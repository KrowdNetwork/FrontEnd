// import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";
import TwitchProvider from "next-auth/providers/twitch";

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
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID
        ? process.env.INSTAGRAM_CLIENT_ID
        : "",
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        ? process.env.INSTAGRAM_CLIENT_SECRET
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
  // adapter: FirestoreAdapter({
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   appId: process.env.FIREBASE_APP_ID,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // }),
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
});
