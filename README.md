# RCC House Church Map

Interactive map of Rochester Christian Church house churches (Leaflet + OpenStreetMap tiles, no build step).
Same static-site pattern as the Missions Map; add `?embed=1` to the URL to hide the header and footer when embedding.

All data is in `houses.js`. Public-safe by design: only town, Sunday of the month, status, and an *approximate* location (circle ~1 mile). No street addresses, phone numbers, host or attendee names.
