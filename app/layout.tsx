import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd, canonicalUrl } from "@/components/JsonLd";

const siteName = "Found & Forged";
const siteDescription =
  "Found & Forged provides gravel driveway repair, grading, gravel spreading, light tractor work, custom goods, curated goods, digital plans, and practical property resources in western Ohio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundforgedco.com"),
  applicationName: siteName,
  title: {
    default: "Found & Forged | Gravel Driveway Repair & Property Services in Western Ohio",
    template: "%s | Found & Forged"
  },
  description: siteDescription,
  keywords: [
    "gravel driveway repair western Ohio",
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
        url: "/brand/found-forged-logo.jpeg",
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
    images: ["/brand/found-forged-logo.jpeg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${canonicalUrl()}#business`,
    name: "Found & Forged",
    url: canonicalUrl(),
    image: canonicalUrl("/brand/found-forged-logo.jpeg"),
    logo: canonicalUrl("/brand/found-forged-logo.jpeg"),
    description: siteDescription,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Western Ohio" },
      { "@type": "AdministrativeArea", name: "Miami County, Ohio" }
    ],
    makesOffer: [
      "Gravel driveway repair",
      "Gravel driveway grading",
      "Pothole repair",
      "Gravel spreading",
      "Culvert and drainage repair",
      "Light tractor services",
      "Custom goods",
      "Curated vintage goods",
      "Digital plans and guides"
    ]
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
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
