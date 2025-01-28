import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { firaCode, firaSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Victor Levasseur Tech",
  description: "TODO",
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
      <body
        className={`
          ${firaSans.variable} 
          ${firaCode.variable} 
          antialiased
          bg-white
          text-black`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
