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
  title: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
  description:
    "Automate scheduling, compliance, and care management for your homecare agency. Join the CareGennie waiting list for early access.",
  keywords: [
    "homecare software UK",
    "CQC compliance software",
    "homecare agency scheduling",
    "care management platform",
    "domiciliary care software",
  ],
  openGraph: {
    title: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
    description:
      "Stop drowning in paperwork. Start delivering better care.",
    url: "https://caregennie.app",
    siteName: "CareGennie",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareGennie \u2014 Intelligent Software for UK Homecare Agencies",
    description:
      "Automate scheduling, compliance, and care management for your homecare agency.",
  },
  robots: { index: true, follow: true },
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
