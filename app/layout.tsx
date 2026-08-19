import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import { generateLocalBusinessSchema } from "./lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Apex Electrical UK | 24/7 NICEIC Approved Electrician in Guildford & Surrey",
  description:
    "Surrey's trusted 24/7 NICEIC Approved Electrician. Specialising in rapid emergency fault finding (45 min arrival), consumer unit fuse box upgrades, smart EV chargers, and landlord EICR certificates. 100% Fixed Upfront Pricing.",
  keywords: [
    "Electrician Guildford",
    "Emergency Electrician Surrey",
    "Consumer Unit Replacement",
    "EV Charger Installation",
    "EICR Certificate Guildford",
    "NICEIC Approved Contractor",
    "Part P Electrician Woking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-[#f4f4f5] flex flex-col min-h-screen selection:bg-yellow-400 selection:text-black`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
