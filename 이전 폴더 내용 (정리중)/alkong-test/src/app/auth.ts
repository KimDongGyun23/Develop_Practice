import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, auth, signIn } = NextAuth({
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: credentials.email,
              password: credentials.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);
        return user;
      },
    }),
  ],
});
