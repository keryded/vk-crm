import NextAuth from "next-auth";
import VK from "next-auth/providers/vk";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    VK({}), // <-- пустой объект удовлетворяет типам
  ],
  debug: true,
});
