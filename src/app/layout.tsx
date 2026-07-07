import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { AIAssistant } from "@/components/ai/ai-assistant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <AIAssistant />
      </body>
    </html>
  );
}
