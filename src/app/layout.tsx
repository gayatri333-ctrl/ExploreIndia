import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExploreIndia — Discover Festivals, Events & Destinations across India",
  description: "Comprehensive festival & events discovery platform for Indian tourism featuring cultural heritage, spiritual trails, national parks, wildlife safaris, and luxury destination experiences.",
  keywords: ["India tourism", "Indian festivals", "Pushkar Camel Fair", "Durga Puja", "Kerala Onam", "Rann Utsav", "Tiger Safaris India", "Destination Weddings India"],
  openGraph: {
    title: "ExploreIndia — Festivals & Tourism Portal",
    description: "Discover festivals, events, national parks, and heritage destinations across India.",
    url: "https://exploreindia.vercel.app",
    siteName: "ExploreIndia",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSerif.variable} ${fontSans.variable} dark`}>
      <body className="bg-primary-dark-900 text-slate-100 font-sans min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

