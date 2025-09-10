import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add Credentials provider here if needed
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Optionally add adapter if using a DB to persist users/sessions
  // adapter: ...,
});
