import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:3000/api/login",{
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
          }).then(res=>{
            res.json()

            if(!res.ok){
              throw new Error("Something Went wrong")
            }
          })
          .then(data=>{
            if (data && data.token) {
                return { token:data.token, user:data.user };
              }
              return null;
          })
         
        } catch (error) {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
        token.user = user.user;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
