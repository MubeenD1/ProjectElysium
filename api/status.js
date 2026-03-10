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

  If you're reading this then it worked! My name
  is Ethan Larkin, I am apart of the recruitment
  department of Zenith-Systems' Project Elyisum.

  I made that business card and hijacked the 
  maintenance server because it's my only option 
  to get people to know the truth.
  
  Project Elysium is not what it seems, I have
  the clearance level to know what Zenith-Systems
  is planning and they're lying to you!

  I cannot send any documents outside of the
  system's walls so I need you to take them from
  me instead. 

  Below, I have given you my admin credentials so 
  you can see for yourself. People need to know,
  this project cannot go through, for the sake
  of all humanity... Please help
  
  zenith-systems.co.za/admin
  user: e.larkin
  pass: A17-KL3

  – E.L

`);
}
