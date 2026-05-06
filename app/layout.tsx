import type { Metadata } from "next";
import { Syne, Instrument_Serif, DM_Mono } from 'next/font/google'
import "./globals.css";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "Adenike's Portfolio",
  description: "Frontend Developer | React | Next.js | TypeScript | UI/UX Enthusiast",

  icons: {
    icon: "/favicon.svg",
  }
};

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-syne',
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`  h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${syne.variable} ${instrumentSerif.variable} ${dmMono.variable}`}>
        <Cursor/>
      {children}</body>
    </html>
  );
}
