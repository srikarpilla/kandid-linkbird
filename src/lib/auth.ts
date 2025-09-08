import { BetterAuthHandler } from 'better-auth/next';


export const authHandler = BetterAuthHandler({
  providers: [
    {
      type: "email",
      emailField: "email",
      passwordField: "password",
    },
    {
      type: "google",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  ],
});
