import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SessionWrapper from "./components/SessionWrapper/SessionWrapper";
import { auth } from "@/auth";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CookNook",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body className={inter.className}>
            <header className="header-width">
                <NavigationBar/>
            </header>
            <div>{children}</div>
        </body>
      </html>
    </SessionWrapper>

  );
}

