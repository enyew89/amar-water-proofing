import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company, siteUrl } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "AMAR WATER PROOFING P.L.C | Waterproofing Contractors in Addis Ababa, Ethiopia",
    template: "%s | AMAR WATER PROOFING",
  },
  description:
    "Ethiopia's trusted waterproofing company with 15+ years of experience and 4,000+ completed projects. Roof, terrace, basement, and commercial waterproofing across Addis Ababa and Ethiopia. 10-year warranty — get a free inspection today.",
  keywords: [
    "waterproofing Ethiopia",
    "waterproofing Addis Ababa",
    "waterproofing contractors Ethiopia",
    "roof waterproofing Addis Ababa",
    "terrace waterproofing",
    "basement waterproofing",
    "AMAR WATER PROOFING",
    "የውሃ መከላከያ",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  applicationName: company.name,

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  // Google Search Console verification
  verification: {
    google: "bwPFyOuVSnrlt92rtvUNfkohAfNa987auOvAfz17OXg",
  },

  // Canonical URLs + indexing directives
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp link previews)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: "AMAR WATER PROOFING P.L.C | Waterproofing Experts in Ethiopia",
    description:
      "15+ years protecting buildings across Ethiopia. 4,000+ projects, 10-year warranty. Roof, terrace, basement & commercial waterproofing with a free inspection.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMAR WATER PROOFING — Waterproofing Experts in Ethiopia",
      },
    ],
  },

  // Twitter/X cards
  twitter: {
    card: "summary_large_image",
    title: "AMAR WATER PROOFING P.L.C | Waterproofing Experts in Ethiopia",
    description:
      "15+ years protecting buildings across Ethiopia. 4,000+ projects, 10-year warranty. Free inspection available.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: company.name,
  description: company.description,
  url: siteUrl,
  telephone: "+251911524838",
  email: company.email,
  image: `${siteUrl}/logo.png`,
  logo: `${siteUrl}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lideta Ahmed Building, 9th Floor",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: {
    "@type": "Country",
    name: "Ethiopia",
  },
  knowsAbout: [
    "Roof waterproofing",
    "Terrace waterproofing",
    "Basement waterproofing",
    "Bathroom waterproofing",
    "Swimming pool waterproofing",
    "Commercial waterproofing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
