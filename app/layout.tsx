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
  title: "Web Developer in Minneapolis | Minnesota",
  description:
    "Web developer in Minneapolis specializing in responsive websites, e-commerce solutions, and modern frontend development with React, Next.js, Vue, WordPress, and Shopify.",
  keywords: [
    "Web Developer Minneapolis",
    "Frontend Developer Minneapolis",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Shopify Developer",
    "E-commerce Developer",
    "Tanya Kovalenko",
  ],
  authors: [{ name: "Tanya Kovalenko" }],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
