import NextAuth from 'next-auth';
// import Credentials from "next-auth/providers/credentials";
import GitHubProvider from 'next-auth/providers/github';

export const authConfig = {
  debug: true,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // Credentials({
    //   credentials: { password: { label: "Password", type: "password" } },
    //   authorize(c) {
    //     if (c.password !== "1") return null;
    //     return {
    //       name: "Fill Murray",
    //       email: "bill@fillmurray.com",
    //       image: "https://www.fillmurray.com/64/64",
    //       id: "1",
    //     };
    //   },
    // }),
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    }
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
