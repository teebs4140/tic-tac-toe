import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe Game',
  description: 'A modern, responsive tic-tac-toe web game for two players. Built with Next.js 14, TypeScript, and Tailwind CSS.',
  keywords: ['tic-tac-toe', 'game', 'react', 'nextjs', 'typescript', 'two-player'],
  authors: [{ name: 'Tic-Tac-Toe Game' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Tic-Tac-Toe Game',
    description: 'Play the classic tic-tac-toe game online. Modern design with smooth animations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Tic-Tac-Toe Game',
    description: 'Play the classic tic-tac-toe game online. Modern design with smooth animations.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}