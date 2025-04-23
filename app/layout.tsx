import type { Metadata } from "next";
import {
  Fenix,
  Flamenco,
  Gamja_Flower,
  Gelasio,
  Give_You_Glory,
  Goldman,
  Gruppo,
} from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const gelasio = Gelasio({
  variable: "--gelasio",
  subsets: ["latin"],
});

const gruppo = Gruppo({
  variable: "--gruppo",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const giveYouGlory = Give_You_Glory({
  variable: "--give-you-glory",
  subsets: ["latin"],
  weight: ["400"],
});

const fenix = Fenix({
  variable: "--fenix",
  subsets: ["latin"],
  weight: ["400"],
});

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const flamenco = Flamenco({
  variable: "--flamenco",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const gamjaFlower = Gamja_Flower({
  variable: "--gamja-flower",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Alphabait",
  description: "Learn the alphabets by intuition.",
  icons: {
    icon: [
      {
        url: "/assets/images/alphabait-logo-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/images/alphabait-logo-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${gelasio.variable} ${gruppo.variable} ${giveYouGlory.variable} ${fenix.variable} ${goldman.variable} ${flamenco.variable} ${gamjaFlower.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
