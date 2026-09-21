import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AMAR WATER PROOFING | Premium Waterproofing Solutions",
  description:
    "Leading waterproofing specialists for roofs, terraces, basements, and commercial structures. 15+ years experience, 10-year warranty. Get a free inspection today.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "waterproofing",
    "roof waterproofing",
    "terrace waterproofing",
    "basement waterproofing",
    "AMAR WATER PROOFING",
    "Mumbai waterproofing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
