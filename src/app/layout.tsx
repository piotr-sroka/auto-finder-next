import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

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
      <body className={`text-base flex flex-col ${inter.className}`}>
        <Header />
        <main className="bg-regal-beige w-full flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
