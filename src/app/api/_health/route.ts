// src/app/api/_env/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET() {
  const result = {
    HAS_NEXTAUTH_URL: !!process.env.NEXTAUTH_URL || !!process.env.AUTH_URL,
    HAS_NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET || !!process.env.AUTH_SECRET,
    HAS_VK_CLIENT_ID: !!process.env.VK_CLIENT_ID,
    HAS_VK_CLIENT_SECRET: !!process.env.VK_CLIENT_SECRET,
  };
  return new Response(JSON.stringify(result, null, 2), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
