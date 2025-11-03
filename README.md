Socket2 — Todo + Socket demo
=================================

This repository contains a small demo app with two parts:

- A Todo single-page app (frontend) served from `public/todo`.
- A Node/Express backend with Socket.IO and a simple users API (in `src/`).

Quick overview
--------------
- Frontend (static): `public/todo/index.html`, `public/todo/app.js`, `public/todo/styles.css`.
- Backend:
	- `src/todos` — in-memory Todo API (GET/POST/PUT/DELETE at `/api/todos`).
	- `src/users` — example user middleware, routes and service.
	- `src/index.js` — app entry, mounts `/api/todos`, `/users` and serves static UI at `/todo`.

Run locally
-----------

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node src/index.js
# or for development with auto-reload
npm run dev
```

3. Open the UI in your browser:

- Chat: http://localhost:3000/
- Todo UI: http://localhost:3000/todo/

Deploy options
--------------

- Static-only (frontend) to GitHub Pages: create a `gh-pages` branch containing the files from `public/todo` or use the `gh-pages` npm package.
- Full app (backend + socket) to Render, Railway or Heroku — update `src/index.js` to read port from `process.env.PORT` (already supported) and deploy the repository on those platforms.

Notes
-----
- The data stores are in-memory for demo purposes and are reset when the server restarts.
- If you want CI that runs tests on push, I can add a GitHub Actions workflow.

If you'd like, I can also deploy the Todo UI to GitHub Pages now and/or add CI; tell me which you'd prefer.
