import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";
import { FloatingActions } from "@/components/interactive/FloatingActions";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d0c0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hoskey Production — Where Stories Come Alive",
    template: "%s — Hoskey Production",
  },
  description:
    "Hoskey Production is a broadcast and media production company in Ghana. Television, video, live streaming, post-production and studio facilities.",
  openGraph: {
    title: "Hoskey Production — Where Stories Come Alive",
    description:
      "Broadcast and media production company in Ghana. Television, video, live streaming, post-production and studio facilities.",
    url: SITE.url,
    siteName: "Hoskey Production",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoskey Production — Where Stories Come Alive",
    description:
      "Broadcast and media production company in Ghana. Television, video, live streaming, post-production and studio facilities.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hoskey Production",
  url: SITE.url,
  logo: `${SITE.url}/favicon.ico`,
  foundingDate: "2024-12-01",
  founder: {
    "@type": "Person",
    name: "Ziblim Abu James",
    alternateName: "Demes shr",
    knowsAbout: ["Broadcast Production", "Media Production", "Video Production"],
  },
  telephone: `+${SITE.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GH",
  },
  slogan: "Where Stories Come Alive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
