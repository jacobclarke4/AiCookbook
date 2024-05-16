'use client'

import { SessionProvider } from "next-auth/react"
import React from "react"

// Define the types for the props
interface SessionWrapperProps {
    children: React.ReactNode;
    session?: any; // Consider replacing 'any' with a more specific type if possible
  }
  
  const SessionWrapper: React.FC<SessionWrapperProps> = ({ children, session }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
  };
  
  export default SessionWrapper;