
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nevbar from "@/Components/nevbar";
import Footer from "@/Components/footer/footer";
import { GGCProvider } from "@/Components/context/context";
import { Toaster } from "@/Components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gujarat Group of Companies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white w-[100vw] relative overflow-x-hidden`}
      >
        <GGCProvider>
          <Nevbar />
          {children}
          <Toaster />
          <Footer />
        </GGCProvider>
      </body>
    </html>
  );
}
