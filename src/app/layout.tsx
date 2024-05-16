import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainHeader } from "./components/MainHeader/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoFinder",
  description: "Find your dream car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader></MainHeader>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
