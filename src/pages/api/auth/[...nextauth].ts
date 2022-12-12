import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import TwitchProvider from "next-auth/providers/twitch";

// eslint-disable-next-line no-console

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID
        ? process.env.FACEBOOK_CLIENT_ID
        : "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        ? process.env.FACEBOOK_CLIENT_SECRET
        : "",
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID
        ? process.env.TWITCH_CLIENT_ID
        : "",
      clientSecret: process.env.TWITCH_CLIENT_SECRET
        ? process.env.TWITCH_CLIENT_SECRET
        : "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : "",
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
});
