import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit, Rock_Salt } from 'next/font/google';
import localFont from "next/font/local";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock",
});

const neueMachina = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-machina",
});

export const metadata: Metadata = {
  title: "Krishiv | MERN Stack Developer",
  description: "Portfolio of a passionate MERN stack developer with full-stack projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>

      <body
        className={`${outfit.variable} ${rockSalt.variable} ${neueMachina.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}