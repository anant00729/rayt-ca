import { createClient } from '@supabase/supabase-js';
import Busboy from 'busboy';

export const config = { api: { bodyParser: false } };

const BUCKET = 'web-customer-queries';
const MAX_FILES = 5;
const MAX_FILE_BYTES = 5120;

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: req.headers, limits: { files: MAX_FILES, fileSize: MAX_FILE_BYTES * 4 } });
    const fields = {};
    const files = [];
    bb.on('field', (name, val) => { fields[name] = val; });
    bb.on('file', (_name, stream, info) => {
      const chunks = [];
      let size = 0;
      let truncated = false;
      stream.on('data', (c) => { chunks.push(c); size += c.length; });
      stream.on('limit', () => { truncated = true; });
      stream.on('end', () => {
        if (!truncated) files.push({ buffer: Buffer.concat(chunks), size, mimeType: info.mimeType, filename: info.filename });
      });
    });
    bb.on('error', reject);
    bb.on('close', () => resolve({ fields, files }));
    req.pipe(bb);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(500).json({ success: false, error: 'Server misconfigured' });

  try {
    const { fields, files } = await parseMultipart(req);
    const name = (fields.name || '').trim() || null;
    const email = (fields.email || '').trim();
    const subject = (fields.subject || '').trim() || null;
    const description = (fields.description || '').trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Valid email required' });
    }
    if (!description) return res.status(400).json({ success: false, error: 'Description required' });
    if (files.length > MAX_FILES) return res.status(400).json({ success: false, error: 'Too many files' });
    for (const f of files) {
      if (f.size > MAX_FILE_BYTES) return res.status(400).json({ success: false, error: 'File too large' });
    }

    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const ts = Date.now();
    const paths = [];
    for (let i = 0; i < files.length; i++) {
      const path = `${ts}-${Math.random().toString(36).slice(2, 8)}/image-${i}.webp`;
      const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, files[i].buffer, {
        contentType: 'image/webp',
        upsert: false,
      });
      if (upErr) throw new Error(`Upload failed: ${upErr.message}`);
      paths.push(path);
    }

    const { error: insErr } = await supabase.from('WebCustomerQueries').insert({
      name, email, subject, description, attachments: paths,
    });
    if (insErr) throw new Error(`Insert failed: ${insErr.message}`);

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
}
