// app/layout.tsx
import "../i18n/i18n";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "E-Commerce site with multilingual support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-inter">
      <head>
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          {children}
          <Footer />
  
      </body>
    </html>
  );
}
