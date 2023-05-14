import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains

    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      // console.log({ url, baseUrl })
      return baseUrl
    },
    async session({ session, token, user }) {
      // console.log({ session, token, user })

      // console.log(" on session callback---->", { session, token })



      // console.log(session.user)
      // Update Session with Profile & JWT
      // session.profile = token.profile;
      // session.symmetryToken = token.symmetryToken;
      // console.log("WITHTOKEN___", {session})
      // session.account = { "this": "data" }
      session.token = token;
      return session
    },
    async jwt({ token, user, account }) {

      // console.log({"process.env":{ token, user, account }})

      const isSignIn = user ? true : false;
      if (isSignIn) {

        try {
          // console.log("BEFORE FETCH",`${process.env.NEXTAUTH_API}/api/auth/${account.provider}/callback?access_token=${account.access_token}`)

          const response = await fetch(
            `${process.env.NEXTAUTH_API}/api/auth/${account.provider}/callback?access_token=${account.access_token}`
          );

          const data = await response.json();

          // console.log("AFTER FETCH",{data})
          token.jwt = data.jwt;
          token.id = data.user.id;
          token.site = process.env.STUDIO_SITE
          // token.email = data.user.email;
          // token.name = data.user.username;
          // token.image = data.user.avatar.url;
          // token.role = data.user.role.name;
          // token.provider = account.provider;
          // token.accessToken = account.access_token;

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({ user, token });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

        } catch (e) {
          console.log(e)
        }


        fetch(`${process.env.NEXTAUTH_API}/studio-profile/verify`, requestOptions)
          .then(response => response.text())
          .then(result => {
            // console.log(JSON.parse(result))
            const { profile, studioToken } = JSON.parse(result);

            token.profile = profile;
            token.studioToken = studioToken
            // console.log({ token })
          })
          .catch(error => console.log('error', error));
      }
      return token
    }
  },
  events: {
    async signIn(message) {
      /* on successful sign in */
    },
    async signOut(message) { /*on successful sign in */ },
    async createUser(message) {
      /* user created */
    },
    async linkAccount(message) { /* account linked to a user */ },
    async session(message) { /* session is active */ },
    // async error(message) { /* error in authentication flow */ }
  },
  pages: {
    signIn: "/auth/signin",
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug(code, metadata)
    }
  }
}

export default NextAuth(authOptions)
