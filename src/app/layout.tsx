import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Автошкола Формула водіння - Навчання водінню в Києві | Права категорії B",
  description: "Професійна автошкола в Києві. Навчання водінню на механіці та автоматі. Досвідчені інструктори, сучасні автомобілі. 98% учнів складають іспит з першого разу. Запишіться зараз!",
  keywords: "автошкола київ, навчання водінню, права категорії B, інструктор водіння, механіка, автомат, іспит ДАІ, водійські курси",
  authors: [{ name: "Формула водіння" }],
  creator: "Автошкола Формула водіння",
  publisher: "Формула водіння",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Автошкола Формула водіння - Навчання водінню в Києві",
    description: "Професійна автошкола з досвідченими інструкторами та сучасними автомобілями. 98% успішності складання іспитів.",
    url: "https://formula-vodinnya.com",
    siteName: "Формула водіння",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Автошкола Формула водіння - Навчання водінню в Києві",
      }
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Автошкола Формула водіння - Навчання водінню в Києві",
    description: "Професійна автошкола з досвідченими інструкторами. 98% учнів складають іспит з першого разу.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/logo-red.png" />
        <meta name="theme-color" content="#fb2c36" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
