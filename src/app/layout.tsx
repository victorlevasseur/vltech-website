import type { Metadata, Viewport } from "next";
import { firaCode, firaSans } from "@/fonts";

import "@/styles/globals/globals.scss";
import {Scripts} from "@/app/scripts";

export const metadata: Metadata = {
  title: "Victor Levasseur Tech",
  description: "TODO",
  metadataBase: new URL('https://www.victorlevasseur.tech'),
  alternates: {
    canonical: './',
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
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
          ${firaSans.variable} 
          ${firaCode.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
