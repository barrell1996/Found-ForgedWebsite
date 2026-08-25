import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { JsonLd, canonicalUrl } from "@/components/JsonLd";
import { MetaPixel } from "@/components/MetaPixel";

const siteName = "Found & Forged";
const siteDescription =
  "Found & Forged provides garden-bed cleanup, mulching, junk removal, gravel driveway work, grading, and light tractor services in Troy, Piqua, Tipp City, Miami County, and nearby western Ohio communities.";
const logoPath = "/brand/found-forged-logo.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundforgedco.com"),
  applicationName: siteName,
  title: {
    default: "Found & Forged | Local Property Services in Miami County, Ohio",
    template: "%s | Found & Forged"
  },
  description: siteDescription,
  keywords: [
    "gravel driveway repair Miami County Ohio",
    "gravel driveway repair Troy Ohio",
    "garden bed cleanup Troy Ohio",
    "mulching Miami County Ohio",
    "junk removal Troy Ohio",
    "gravel driveway grading",
    "driveway pothole repair",
    "gravel spreading",
    "light tractor services",
    "box blade driveway grading",
    "property maintenance western Ohio",
    "Found & Forged"
  ],
  authors: [{ name: "Found & Forged" }],
  creator: "Found & Forged",
  publisher: "Found & Forged",
  icons: {
    icon: [
      { url: logoPath, type: "image/jpeg" }
    ],
    shortcut: [logoPath],
    apple: [
      { url: logoPath, type: "image/jpeg" }
    ]
  },
  verification: {
    google: "Aqo_8PfMdwMnPtGsgbitOaUzpyKepVZFcwbeM3K28fM"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Found & Forged | Gravel Driveway Repair & Property Services",
    description: siteDescription,
    url: "https://foundforgedco.com",
    siteName,
    images: [
      {
        url: logoPath,
        width: 1200,
        height: 1200,
        alt: "Found & Forged logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Found & Forged | Gravel Driveway Repair & Property Services",
    description: siteDescription,
    images: [logoPath]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${canonicalUrl()}#business`,
    name: "Found & Forged",
    url: canonicalUrl(),
    image: canonicalUrl(logoPath),
    logo: canonicalUrl(logoPath),
    description: siteDescription,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Miami County, Ohio" },
      { "@type": "City", name: "Troy, Ohio" },
      { "@type": "City", name: "Piqua, Ohio" },
      { "@type": "City", name: "Tipp City, Ohio" },
      { "@type": "AdministrativeArea", name: "Shelby County, Ohio" },
      { "@type": "AdministrativeArea", name: "Champaign County, Ohio" },
      { "@type": "AdministrativeArea", name: "Montgomery County, Ohio" }
    ],
    makesOffer: [
      "Garden-bed cleanup",
      "Mulching",
      "Junk removal",
      "Gravel driveway repair",
      "Gravel driveway grading",
      "Pothole repair",
      "Gravel spreading",
      "Culvert and drainage repair",
      "Light tractor services"
    ],
    email: "hello@foundforgedco.com",
    telephone: "+1-937-572-8109",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-937-572-8109",
      contactType: "customer service",
      areaServed: "US-OH",
      availableLanguage: "English"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${canonicalUrl()}#website`,
    name: siteName,
    url: canonicalUrl(),
    publisher: { "@id": `${canonicalUrl()}#business` },
    inLanguage: "en-US"
  };

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <MetaPixel />
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
