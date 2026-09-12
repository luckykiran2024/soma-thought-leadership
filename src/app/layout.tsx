import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://somakirangonella.com'),
  title: {
    default: 'Soma Kiran Gonella | Organizational Decision Intelligence · Author · Builder of SigmaGo',
    template: '%s | Soma Kiran Gonella',
  },
  description: 'HR Business Partner with 11+ years of experience, author of The Other Book, and builder of SigmaGo. Exploring how organizations make, record, retrieve, and learn from decisions to build institutional intelligence.',
  keywords: [
    'Decision Management',
    'Organizational Decision Intelligence',
    'Institutional Memory',
    'SigmaGo',
    'The Other Book',
    'Soma Kiran Gonella',
    'HR Business Partner',
    'Strategic HR',
    'Policy Drift',
    'Decision Debt',
    'Exception Management',
    'AI Decision Intelligence'
  ],
  authors: [{ name: 'Soma Kiran Gonella', url: 'https://somakirangonella.com' }],
  creator: 'Soma Kiran Gonella',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://somakirangonella.com',
    title: 'Soma Kiran Gonella | Organizational Decision Intelligence',
    description: 'Companies have systems to remember money, customers, employees, and transactions, but very few systems designed to preserve the reasoning behind important decisions.',
    siteName: 'Soma Kiran Gonella',
    images: [
      {
        url: '/images/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Soma Kiran Gonella',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soma Kiran Gonella | Organizational Decision Intelligence',
    description: 'HR Business Partner · Author · Decision Management Thinker · Builder of SigmaGo',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <JsonLd type="Person" />
        <JsonLd type="WebSite" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-navy-950 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
