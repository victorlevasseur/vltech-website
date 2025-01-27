import type { Metadata } from "next";
import "./globals.css";
import { firaCode, firaSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Victor Levasseur Tech",
  description: "TODO",
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
