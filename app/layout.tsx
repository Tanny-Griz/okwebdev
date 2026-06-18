import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://okwebdev.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OKWEBDEV | Web Developer & Designer in Minnesota",
    template: "%s | OKWEBDEV",
  },
  description:
    "Web developer and designer in Minnesota creating polished websites, e-commerce stores, WordPress sites, Shopify experiences, SEO-friendly pages, and custom frontend solutions.",
  keywords: [
    "Web Developer Minnesota",
    "Web Developer Minneapolis",
    "Web Designer Minnesota",
    "Small Business Website Design",
    "Frontend Developer Minneapolis",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Shopify Developer",
    "E-commerce Developer",
    "Custom Website Development",
    "Tanya Kovalenko",
    "OKWEBDEV",
  ],
  authors: [{ name: "Tanya Kovalenko" }],
  creator: "Tanya Kovalenko",
  publisher: "OKWEBDEV",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OKWEBDEV | Web Developer & Designer in Minnesota",
    description:
      "Clean, responsive websites, online stores, WordPress, Shopify, SEO, and custom frontend development for small businesses and creative brands.",
    url: "/",
    siteName: "OKWEBDEV",
    images: [
      {
        url: "/images/okwebdev.jpg",
        width: 1600,
        height: 991,
        alt: "OKWEBDEV portfolio website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKWEBDEV | Web Developer & Designer in Minnesota",
    description:
      "Polished websites, e-commerce stores, WordPress, Shopify, SEO, and custom frontend support.",
    images: ["/images/okwebdev.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
