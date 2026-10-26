import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameer Dhakad — Full-Stack Engineer & Product Builder",
  description:
    "Portfolio of Sameer Dhakad: Full-Stack Engineer & Undergraduate at SRMIST. Flipkart GRID 8.0 Semi-Finalist and builder in MERN, Next.js, Python, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900 selection:bg-pink-100 selection:text-pink-900">
        {children}
      </body>
    </html>
  );
}
