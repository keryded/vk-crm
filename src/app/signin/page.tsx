"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main style={{display:"grid",placeItems:"center",minHeight:"100vh",gap:16}}>
      <h1>Вход</h1>
      <button
        onClick={() => signIn("vk", { callbackUrl: "/dashboard" })}
        style={{padding:"10px 16px", fontWeight:600}}
      >
        Войти через VK
      </button>
    </main>
  );
}
