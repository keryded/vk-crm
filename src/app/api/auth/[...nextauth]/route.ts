// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import VK from "next-auth/providers/vk";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },  // <-- берём готовые хэндлеры
} = NextAuth({
  providers: [
    VK({}) // можно пустой объект — берёт VK_CLIENT_ID/SECRET из env
  ],
  debug: process.env.AUTHJS_DEBUG === "true",
});
