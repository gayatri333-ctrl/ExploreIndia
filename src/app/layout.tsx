import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { BookmarkProvider } from "@/context/BookmarkContext";

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
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "India tourism",
    "ExploreIndia",
    "28 States and 8 Union Territories",
    "Indian festivals",
    "Heritage Forts",
    "Spiritual Trails",
    "Wildlife Safaris",
    "Incredible India travel portal",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
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
        <BookmarkProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
