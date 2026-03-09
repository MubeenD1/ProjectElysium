export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (!ua.toLowerCase().includes('curl')) {
    res.status(403).send('Access denied.');
    return;
  }

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`
  ┌──────────────────────────────────────┐
  │       ZENITH SYSTEMS — INTERNAL      │
  └──────────────────────────────────────┘

  [ Ethan's message here ]

  [ Maybe a URL to the admin portal at the end ]

`);
}
