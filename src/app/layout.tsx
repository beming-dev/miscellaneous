import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beming's Minor Apps",
  description: "Do whatever you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} + w-screen h-screen bg-gradient-to-r from-[#fdfbfb] to-[#ebedee]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
