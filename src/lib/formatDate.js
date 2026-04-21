const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const dtf = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' });

/** Returns a relative string ("3 days ago") for dates within the past year, absolute ("Apr 21, 2026") otherwise. */
export function formatPostDate(dateString) {
  const date = new Date(dateString);
  const diffMs = date - Date.now();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  if (Math.abs(diffDays) >= 365) return dtf.format(date);
  if (Math.abs(diffDays) < 1) return 'Today';
  if (Math.abs(diffDays) < 7) return rtf.format(Math.round(diffDays), 'day');
  if (Math.abs(diffDays) < 30) return rtf.format(Math.round(diffDays / 7), 'week');
  return rtf.format(Math.round(diffDays / 30), 'month');
}
