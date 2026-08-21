// Central place for the backend API base URL.
//
// Locally: falls back to http://localhost:5000 automatically, so `npm run dev`
// keeps working with no setup.
//
// In production (Vercel): set VITE_API_URL in your Vercel project's
// Environment Variables to your deployed backend's URL, e.g.
//   VITE_API_URL=https://e-mart-backend-production.up.railway.app
// then redeploy. Until you set this, the deployed site will still try to
// reach localhost:5000 and signup/login will fail with a connection error.
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";
