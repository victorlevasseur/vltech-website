import type { Metadata, Viewport } from 'next';
import { firaCode, firaSans } from '@/fonts';

import { Footer } from './footer';
import { Header } from './header';
import { Scripts } from './scripts';

import '@/styles/globals/globals.scss';

import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Victor Levasseur Tech',
  description: 'Victor Levasseur, Tech Lead Java, Spring Boot, Angular, React et AWS en freelance.',
  creator: 'Victor Levasseur',
  authors: {
    name: 'Victor Levasseur',
  },
  metadataBase: new URL('https://www.victorlevasseur.tech'),
  alternates: {
    canonical: './',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Scripts />
      <body
        className={`
          ${styles.body}
          ${firaSans.variable} 
          ${firaCode.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
