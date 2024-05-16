import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "./util/password";
import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import google from "next-auth/providers/google";

// Function to create a new Prisma Client instance
const prismaClientSingleton = () => {
 return new PrismaClient();
};

// Declare a global variable to hold the Prisma Client instance
declare global {
 var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Check if the global variable already holds an instance of Prisma Client
// If not, create a new one and assign it to the global variable
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Export the Prisma Client instance
export default prisma;

// If not in production, assign the Prisma Client instance to the global variable
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

const providers: Provider[] = [
  github,
  google,/*
    EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM,
        // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
    */
  credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {label:"", placeholder:"Email"},
      username: {label:"", placeholder:"Username"},
      emailUsername: {label:"", placeholder:"Email, or username"},
      password: {label:"", placeholder:"Password"},
    },
    authorize: async (credentials) => {
      // logic to salt and hash password
      const pwHash = await saltAndHashPassword(credentials.password as string)
      console.log("EMAILUSERNAME: ", credentials.emailUsername as string);
      // logic to verify if user exists
      let user = await prisma.user.findFirst({
         where: {
          OR: [
            {
              email: credentials.emailUsername as string,
            },
            {
              username: credentials.emailUsername as string,
            }
          ],           
         },
      });
      console.log("USER: ",user);
     
      if (!user) {
         // User does not exist, create a new user
          console.log("No user exists");
          return null;
      };
  
     
      // Ensure the returned object matches the User type expected by NextAuth
      return user;
     },
     
  }),
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers,
  pages: {
    signIn: "/signin"
  },
  session: {
    strategy: 'database', // Use database strategy for session management
    maxAge: 30 * 24 * 60 * 60, // Session max age (30 days)
    updateAge: 24 * 60 * 60, // Session update age (24 hours)
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({session, user}) {
      // Customize session data here
      console.log("Session callback", {session, user})
      session.user = user;
      return session;
    },
 },
})


