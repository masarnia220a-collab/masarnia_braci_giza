import type { Metadata } from "next";
import { Albert_Sans, Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masarniabracigiza.pl"), // <-- your site url
  title: {
    default: "Masarnia braci Giża • Tradycja i prawdziwy smak",
    template: "%s | Masarnia braci Giża",
  },
  description:
    "Wyroby wędliniarskie tworzone według rodzinnych receptur — naturalne składniki, lokalne mięso, prawdziwe wędzenie drewnem. Poznaj smak pokoleń.",
  keywords: [
    "masarnia",
    "wędliny",
    "kielbasa",
    "tradycyjne wyroby",
    "lokalne mięso",
    "Żarówka",
  ],
  authors: [{ name: "Masarnia braci Giża" }],
  creator: "Masarnia braci Giża",
  publisher: "Masarnia braci Giża",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://masarniabracigiza.pl",
    title: "Masarnia braci Giża • Tradycja i prawdziwy smak",
    description:
      "Od 1990 roku tworzymy wyroby według rodzinnych receptur — lokalne składniki, prawdziwe wędzenie, smak pokoleń.",
    siteName: "Masarnia braci Giża",
    images: [
      {
        url: "/og-image.png", // <-- add if you have one
        width: 1200,
        height: 630,
        alt: "Masarnia braci Giża",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Masarnia braci Giża • Smak tradycji",
    description:
      "Wyroby tworzone według rodzinnej tradycji — naturalne, świeże, wędzone drewnem.",
    images: ["/og-image.png"], // update if needed
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${albertSans.variable} antialiased bg-background-soft overflow-x-hidden`}
      >
        <Analytics />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
