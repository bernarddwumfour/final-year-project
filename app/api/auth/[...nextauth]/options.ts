// app/api/auth/[...nextauth]/options.ts

import { signin } from "@/app/(pages)/login/page";
// import { loginUser } from "@/lib/actions/user.action";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ExtendedUser extends User {
  role?: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = credentials as {
          email: string;
          password: string;
        };

        const response = await signin({email :user.email,password: user.password});
        let res = await response.json()
        const loggedInUser = res.data?.user;
        console.log("logged:", loggedInUser);

        if (loggedInUser && res.error === null) {
          // if everything is fine
          return {
            id: loggedInUser._id,
            name: loggedInUser.firstname,
            email: loggedInUser.email,
          };
        } else {
          throw new Error(res.error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const Exteduser: ExtendedUser = user;
      if (Exteduser) token.role = Exteduser.role;
      console.log("token : ", token);
      return token;
    },
    // async session({ session, token }) {
    //   if (session?.user) {
    //     session.user.id = token.sub;
    //   }
    //   console.log("session:", session);
    //   return session;
    // },
  },
  pages: {
    signIn: "/login", // your custom signin page with signin form.
    // error: "/signinError", // Error code passed in query string as ?error=
  },
};