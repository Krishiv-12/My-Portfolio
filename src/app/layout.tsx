import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit, Rock_Salt } from 'next/font/google';
import localFont from "next/font/local";


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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${rockSalt.variable} ${neueMachina.variable} antialiased`}
      suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
