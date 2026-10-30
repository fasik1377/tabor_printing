import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-ethiopic",
  subsets: ["ethiopic"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Tabor Printing Press | Hawassa, Ethiopia",
    template: "%s | Tabor Printing Press",
  },
  description:
    "Modern printing press in Hawassa, Ethiopia for packaging, stationery, posters, flyers, garments, and large-format print production.",
  icons: {
    icon: [{ url: "/images/logo.jpg", type: "image/jpeg" }],
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Tabor Printing Press | Hawassa, Ethiopia",
    description: "Bold printing, careful finishing, and dependable delivery across Ethiopia.",
    images: ["/images/background_cover.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffd21f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoEthiopic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
