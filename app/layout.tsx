import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Kateryna Hamanets | NYC Real Estate Advisor | SERHANT.",
  description: "Your Slavic Real Estate girl in NYC. Licensed Real Estate Salesperson in NY & FL at SERHANT. Specializing in luxury residential sales, rentals, and new development.",
  keywords: "Kateryna Hamanets, Kat Hamanets, NYC real estate, SERHANT, luxury apartments, Manhattan, Miami real estate",
  openGraph: {
    title: "Kateryna Hamanets | NYC Real Estate",
    description: "Your Home. Your Story. Licensed at SERHANT.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
