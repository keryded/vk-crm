import NextAuth from "next-auth";
import VK from "next-auth/providers/vk";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    VK({
      authorization: {
        params: {
          code_challenge_method: undefined,
        },
      },
    }),
  ],
  debug: true,
});