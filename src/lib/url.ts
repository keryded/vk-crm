// src/lib/url.ts
export function getBaseUrl() {
  // Приоритет: явный публичный URL, затем Vercel URL, затем локалка
  const explicit =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.AUTH_URL ||
    process.env.NEXTAUTH_URL;

  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_URL; // без протокола на Vercel
  if (vercel) return `https://${vercel}`.replace(/\/+$/, "");

  return "http://localhost:3000";
}
