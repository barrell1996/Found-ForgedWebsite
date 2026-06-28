import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundandforged.com"),
  title: {
    default: "Found & Forged | Built for Home. Property. Life.",
    template: "%s | Found & Forged"
  },
  description:
    "The digital headquarters for Found & Forged: property services, digital products, curated goods, custom goods, learning resources, calculators, and rugged practical-property guidance.",
  openGraph: {
    title: "Found & Forged",
    description: "Built for Home. Property. Life.",
    url: "https://foundandforged.com",
    siteName: "Found & Forged",
    images: ["/brand/found-forged-logo.jpeg"],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
