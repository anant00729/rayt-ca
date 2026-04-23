import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const BUCKET = 'web-customer-queries';
const MAX_FILES = 5;
const MAX_FILE_BYTES = 5120;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: MAX_FILES, fileSize: MAX_FILE_BYTES * 4 },
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/api/customer-query', upload.array('files', MAX_FILES), async (req, res) => {
  try {
    const name = (req.body.name || '').trim() || null;
    const email = (req.body.email || '').trim();
    const subject = (req.body.subject || '').trim() || null;
    const description = (req.body.description || '').trim();
    const files = req.files || [];

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Valid email required' });
    }
    if (!description) {
      return res.status(400).json({ success: false, error: 'Description required' });
    }
    if (files.length > MAX_FILES) {
      return res.status(400).json({ success: false, error: 'Too many files' });
    }
    for (const f of files) {
      if (f.size > MAX_FILE_BYTES) {
        return res.status(400).json({ success: false, error: `File ${f.originalname} exceeds 5KB` });
      }
    }

    const folder = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const paths = [];
    for (let i = 0; i < files.length; i++) {
      const path = `${folder}/image-${i}.webp`;
      const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, files[i].buffer, {
        contentType: 'image/webp',
        upsert: false,
      });
      if (upErr) throw new Error(`Upload failed: ${upErr.message}`);
      paths.push(path);
    }

    const { error: insErr } = await supabase.from('WebCustomerQueries').insert({
      id: crypto.randomUUID(), name, email, subject, description, attachments: paths,
    });
    if (insErr) throw new Error(`Insert failed: ${insErr.message}`);

    res.json({ success: true });
  } catch (err) {
    console.error('[customer-query]', err);
    res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
});

async function checkBucket() {
  const { data, error } = await supabase.storage.listBuckets();
  if (error) { console.error('listBuckets error:', error.message); return; }
  console.log('Available buckets:', data.map(b => b.name));
  if (!data.some(b => b.name === BUCKET)) {
    console.error(`Bucket "${BUCKET}" not found — create it in Supabase dashboard`);
  }
}

checkBucket().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
