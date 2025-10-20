// app/page.tsx
'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
      }}
    >
      <Link
        href="/signin"
        style={{
          padding: "12px 18px",
          borderRadius: 10,
          border: "1px solid #eaeaea",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Войти через VK
      </Link>
    </main>
  );
}
