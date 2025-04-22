import type { Metadata } from 'next';
import {
  Gelasio,
  Gruppo,
  Give_You_Glory,
  Fenix,
  Goldman,
  Flamenco,
  Gamja_Flower,
} from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const gelasio = Gelasio({
  variable: '--font-gelasio',
  subsets: ['latin'],
});

const gruppo = Gruppo({
  variable: '--font-gruppo',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

const giveYouGlory = Give_You_Glory({
  variable: '--font-give-you-glory',
  subsets: ['latin'],
  weight: ['400'],
});

const fenix = Fenix({
  variable: '--font-fenix',
  subsets: ['latin'],
  weight: ['400'],
});

const goldman = Goldman({
  variable: '--font-goldman',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const flamenco = Flamenco({
  variable: '--font-flamenco',
  subsets: ['latin'],
  weight: ['300', '400'],
});

const gamjaFlower = Gamja_Flower({
  variable: '--font-gamja-flower',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Alphabait',
  description: 'Learn the alphabets by intuition.',
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
      </body>
    </html>
  );
}

