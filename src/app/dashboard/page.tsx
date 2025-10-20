// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/signin");

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
