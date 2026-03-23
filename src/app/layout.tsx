import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Off The Couch - Immersive Escape Rooms in Fremont, CA",
  description:
    "Experience immersive escape rooms in Fremont. Play the Asheville chapters: Occam's Apartment, Norcross Art Gallery, and The Morgue. No time limits, save progress, private bookings.",
  keywords:
    "escape room, Fremont, immersive, adventure, Asheville, puzzle game, team building",
  openGraph: {
    title: "Off The Couch - Immersive Escape Rooms",
    description:
      "Experience immersive escape rooms in Fremont with the Asheville storyline.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <FloatingIcons density="sparse" />
        </div>
        <Header />
        <main className="flex-1 relative" style={{ zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
