# Calviora

MERN landing page for Calviora. The React UI matches the original HTML design. Express serves plans and FAQs, and MongoDB stores that content plus email signups.

## Local development

```bash
npm install
npm run dev
```

- Site: http://localhost:5173
- API: http://localhost:5000

The page looks the same without a database. Pricing and FAQs are served from `shared/content.js` until MongoDB is connected.

## MongoDB

1. Create a free database on [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Copy `.env.example` to `.env`.
3. Set `MONGODB_URI`.
4. Run `npm run seed` once, or just open the site. The API seeds plans and FAQs on the first request.

Signup endpoint:

```bash
curl -X POST http://localhost:5000/api/leads -H "Content-Type: application/json" -d "{\"email\":\"you@example.com\",\"plan\":\"free\"}"
```

## Deploy on Vercel

1. Push this folder to GitHub.
2. In Vercel, import the repo and leave the framework preset as Vite.
3. Add `MONGODB_URI` under Project Settings → Environment Variables if you want the database. The site still deploys without it.
4. Deploy.

Vercel serves the Vite build. Requests to `/api/health`, `/api/content`, and `/api/leads` run the Express app.
