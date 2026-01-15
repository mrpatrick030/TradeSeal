import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppKit } from "@/context/appkit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = { title: "TradeSeal", description: "Tokenize real-world commercial invoices and trade settlements as verifiable on-chain NFT Receipts" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50"><AppKit>{children}</AppKit></body>
    </html>
  );
}

