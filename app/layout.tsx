// app/layout.tsx (FINAL Version - Only structure and Providers)
// "use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider/provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "TSB News",
  description: "বাংলাদেশের সর্বশেষ খবর",
  keywords: ["Bangladesh news", "TSB news", "বাংলাদেশ নিউজ"],
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "TSB News",
    description: "বাংলাদেশের সর্বশেষ খবর",
    
    siteName: "TSB News",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSB News",
    description: "বাংলাদেশের সর্বশেষ খবর",
    images: ["/twitter-image.jpg"],
  },
  themeColor: "#1E40AF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
