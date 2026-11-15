// House church data. Public-safe: town + approximate area only (no street addresses, phone numbers or host names).
// lat/lng are deliberately approximate (about a mile); the map draws a circle, not a pin on a house.
// week: which Sunday of the month (1-4). status: 'confirmed' | 'starting' | 'maybe-moving'
window.HOUSES = [
  { id:'h1', week:1, city:'Shelby Township',  lat:42.672, lng:-83.045, status:'confirmed' },
  { id:'h2', week:2, city:'Rochester Hills',  lat:42.655, lng:-83.135, status:'confirmed', note:'Began meeting November 1, then the 2nd Sunday going forward.' },
  { id:'h3', week:2, city:'Shelby Township',  lat:42.665, lng:-83.020, status:'maybe-moving', note:'Location may shift within Shelby Township.' },
  { id:'h4', week:3, city:'Lapeer',           lat:43.050, lng:-83.320, status:'confirmed' },
  { id:'h5', week:3, city:'Oxford',           lat:42.835, lng:-83.265, status:'confirmed' },
  { id:'h6', week:4, city:'Oakland Township', lat:42.745, lng:-83.150, status:'starting',  note:'First gathering in November.' },
  { id:'h7', week:4, city:'Farmington Hills', lat:42.500, lng:-83.380, status:'confirmed' }
];
window.CHURCH = { name:'Rochester Christian Church', lat:42.700, lng:-83.130 };
