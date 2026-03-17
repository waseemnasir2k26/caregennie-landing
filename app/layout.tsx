import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caregennie.app"),
  title: {
    default: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
    template: "%s | CareGennie",
  },
  description:
    "Automate scheduling, compliance, and care management for your homecare agency. Join the CareGennie waiting list for early access.",
  keywords: [
    "homecare software UK",
    "CQC compliance software",
    "homecare agency scheduling",
    "care management platform",
    "domiciliary care software",
    "home care management system",
    "CQC inspection software",
    "carer scheduling app UK",
    "domiciliary care management",
    "digital care planning software",
  ],
  authors: [
    { name: "SkynetLabs", url: "https://www.skynetjoe.com" },
    { name: "Waseem Nasir", url: "https://www.waseemnasir.com" },
  ],
  creator: "SkynetLabs",
  publisher: "CareGennie",
  openGraph: {
    title: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
    description:
      "Stop drowning in paperwork. Start delivering better care. Automate scheduling, compliance, and care management for your UK homecare agency.",
    url: "https://caregennie.app",
    siteName: "CareGennie",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
    description:
      "Automate scheduling, compliance, and care management for your homecare agency.",
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
    canonical: "https://caregennie.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
