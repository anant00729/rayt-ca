import { useState } from 'react';
import { compressToWebp } from '../../lib/compressImage';
import {
  Launcher, Panel, Header, HeaderTitle, CloseBtn, Body, Card, CardTitle,
  Field, Label, Input, Textarea, Dropzone, FileList, FileRow, FileMeta,
  TrashBtn, SubmitBtn, ErrorBanner, WarnText, SuccessWrap, SuccessIcon, SuccessText,
} from './style';

const MAX_FILES = 5;

const Icon = {
  Help: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 4" /><circle cx="12" cy="17" r="0.6" fill="currentColor" />
    </svg>
  ),
  X: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
  Upload: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
  ),
  Trash: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /></svg>
  ),
  Envelope: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22 7 12 13 2 7" /></svg>
  ),
};

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  return `${(n / 1024).toFixed(1)} KB`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [warn, setWarn] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function reset() {
    setName(''); setEmail(''); setSubject(''); setDescription('');
    setFiles([]); setWarn(''); setError(''); setView('form');
  }

  function handleFiles(e) {
    setWarn('');
    const incoming = Array.from(e.target.files || []);
    e.target.value = '';
    const remaining = MAX_FILES - files.length;
    if (incoming.length > remaining) {
      setWarn('You cannot upload more than 5 files.');
    }
    const accepted = incoming.slice(0, remaining).filter(f => f.type.startsWith('image/'));
    setFiles(prev => [...prev, ...accepted]);
  }

  function removeFile(idx) {
    setFiles(prev => prev.filter((_, i) => i !== idx));
    setWarn('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email.trim() || !description.trim()) {
      setError('Email and description are required.');
      return;
    }
    setSubmitting(true);
    try {
      const blobs = await Promise.all(files.map(f => compressToWebp(f)));
      const form = new FormData();
      form.append('name', name);
      form.append('email', email);
      form.append('subject', subject);
      form.append('description', description);
      blobs.forEach((b, i) => form.append('files', b, `image-${i}.webp`));

      const res = await fetch('/api/customer-query', { method: 'POST', body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.error || 'Submission failed');
      setView('success');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function close() {
    setOpen(false);
    if (view === 'success') reset();
  }

  return (
    <>
      {!open && (
        <Launcher type="button" onClick={() => setOpen(true)} aria-label="Open contact form">
          <Icon.Help /> Help
        </Launcher>
      )}
      {open && (
        <Panel role="dialog" aria-label="Contact us">
          <Header>
            <HeaderTitle>Welcome to Rayt!</HeaderTitle>
            <CloseBtn type="button" onClick={close} aria-label="Close"><Icon.X /></CloseBtn>
          </Header>

          {view === 'form' && (
            <Body>
              <Card>
                <CardTitle>Contact us</CardTitle>
                {error && <ErrorBanner>{error}</ErrorBanner>}
                <form onSubmit={onSubmit}>
                  <Field>
                    <Label htmlFor="cw-name">Your name</Label>
                    <Input id="cw-name" value={name} onChange={e => setName(e.target.value)} />
                  </Field>
                  <Field>
                    <Label htmlFor="cw-email">Your email address *</Label>
                    <Input id="cw-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                  </Field>
                  <Field>
                    <Label htmlFor="cw-subject">Subject</Label>
                    <Input id="cw-subject" value={subject} onChange={e => setSubject(e.target.value)} />
                  </Field>
                  <Field>
                    <Label htmlFor="cw-desc">Description *</Label>
                    <Textarea id="cw-desc" required value={description} onChange={e => setDescription(e.target.value)} />
                  </Field>
                  <Field>
                    <Dropzone>
                      <Icon.Upload /> Upload files (max {MAX_FILES})
                      <input type="file" accept="image/*" multiple onChange={handleFiles} />
                    </Dropzone>
                    {warn && <WarnText>{warn}</WarnText>}
                    {files.length > 0 && (
                      <FileList>
                        {files.map((f, i) => (
                          <FileRow key={`${f.name}-${i}`}>
                            <span>{f.name}<FileMeta>{formatBytes(f.size)}</FileMeta></span>
                            <TrashBtn type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}><Icon.Trash /></TrashBtn>
                          </FileRow>
                        ))}
                      </FileList>
                    )}
                  </Field>
                  <SubmitBtn type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send'}
                  </SubmitBtn>
                </form>
              </Card>
            </Body>
          )}

          {view === 'success' && (
            <SuccessWrap>
              <SuccessIcon><Icon.Envelope /></SuccessIcon>
              <SuccessText>Thank you! We&apos;ll be in touch through email.</SuccessText>
              <SubmitBtn type="button" onClick={close}>Close</SubmitBtn>
            </SuccessWrap>
          )}
        </Panel>
      )}
    </>
  );
}
