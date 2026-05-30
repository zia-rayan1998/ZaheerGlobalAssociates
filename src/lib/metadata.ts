import type { Metadata } from "next";
import { COMPANY } from "./utils";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zaheerglobalassociates.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.name} | HMDA & GHMC Approval Consultant Hyderabad`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Premium HMDA permissions, GHMC building approvals, Fire NOC, land surveying, plot verification & construction consultancy in Hyderabad. Trusted by 600+ clients.",
  keywords: [
    "HMDA permission consultant Hyderabad",
    "GHMC approval services Hyderabad",
    "Fire NOC consultant Hyderabad",
    "building permission consultancy",
    "land surveyor Hyderabad",
    "construction approval services",
    "plot verification Hyderabad",
    "real estate approval consultant",
    "Zaheer Global Associates",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Permission & Approval Consultancy Hyderabad`,
    description:
      "Expert HMDA, GHMC, Fire NOC, land surveying & plot verification services in Hyderabad. Book your free consultation today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url: `${siteUrl}${path}`,
    },
  };
}
