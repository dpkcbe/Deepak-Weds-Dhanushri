import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Poppins, Great_Vibes, Alex_Brush } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
  weight: ['400'],
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex-brush',
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deepak-dhanushri.wedding'),
  title: 'Deepak & Dhanushri — Wedding Reception Invitation',
  description:
    'Join us as we celebrate the wedding reception of Deepak R & Dhanushri V S on 14 November 2026 at Aadrika Hall, Coimbatore. Save the date.',
  keywords: ['wedding invitation', 'Deepak', 'Dhanushri', 'reception', 'Coimbatore', '2026'],
  openGraph: {
    title: 'Deepak & Dhanushri — Wedding Reception',
    description: '14 November 2026 · Aadrika Hall, Coimbatore',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak & Dhanushri — Wedding Reception',
    description: '14 November 2026 · Aadrika Hall, Coimbatore',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} ${greatVibes.variable} ${alexBrush.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
