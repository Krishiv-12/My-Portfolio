import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit } from 'next/font/google';


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
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
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
