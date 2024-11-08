import dbConnect from "@/dbConfig/dbConfig";
import User from "@/model/User";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { type: String, required: true },
        password: { type: String, required: true },
      },
      async authorize(credentials) {
        /*  const user = {
          id: 101,
          name: "tutul",
          password: "admin",
          role: "tk",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        } */

        await dbConnect();
        const user = User.findOne({
          username: credentials?.username,
          password: credentials?.password,
        });

        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
