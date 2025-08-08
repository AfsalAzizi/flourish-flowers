import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flourish Flowers UAE | Premium Flower Delivery Dubai & Abu Dhabi",
  description:
    "Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions. Same-day delivery in Dubai, Abu Dhabi, Sharjah. Wedding flowers, birthday bouquets, corporate gifts. AED 150+",
  keywords:
    "flower delivery UAE, Dubai flowers, Abu Dhabi flowers, wedding flowers UAE, birthday flowers, corporate flowers, fresh flowers Dubai, flower shop UAE, online flowers, same day delivery",
  authors: [{ name: "Flourish Flowers UAE" }],
  creator: "Flourish Flowers UAE",
  publisher: "Flourish Flowers UAE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flourishflowers.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flourishflowers.ae",
    siteName: "Flourish Flowers UAE",
    title: "Flourish Flowers UAE | Premium Flower Delivery Dubai & Abu Dhabi",
    description:
      "Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions. Same-day delivery in Dubai, Abu Dhabi, Sharjah.",
    images: [
      {
        url: "/images/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Flourish Flowers UAE - Premium Flower Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flourish Flowers UAE | Premium Flower Delivery Dubai & Abu Dhabi",
    description:
      "Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions.",
    images: ["/images/hero-img.png"],
    creator: "@flourishflowersuae",
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
    yahoo: "your-yahoo-verification-code",
  },
  category: "Flower Shop",
  classification: "E-commerce",
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
    "DC.title": "Flourish Flowers UAE",
    "DC.creator": "Flourish Flowers UAE",
    "DC.subject": "Flower Delivery UAE",
    "DC.description": "Premium flower delivery across UAE",
    "DC.publisher": "Flourish Flowers UAE",
    "DC.contributor": "Flourish Flowers UAE",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://flourishflowers.ae",
    "DC.language": "en",
    "DC.coverage": "United Arab Emirates",
    "DC.rights": "Copyright 2024 Flourish Flowers UAE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="application-name" content="Flourish Flowers UAE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Flourish Flowers UAE"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Florist",
              name: "Flourish Flowers UAE",
              description: "Premium flower delivery service across UAE",
              url: "https://flourishflowers.ae",
              logo: "https://flourishflowers.ae/images/logo.png",
              image: "https://flourishflowers.ae/images/hero-img.png",
              telephone: "+971-XX-XXX-XXXX",
              email: "info@flourishflowers.ae",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
                addressRegion: "Dubai",
                addressLocality: "Dubai",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.2048,
                longitude: 55.2708,
              },
              openingHours: "Mo-Su 08:00-22:00",
              priceRange: "AED 150+",
              currenciesAccepted: "AED",
              paymentAccepted: "Cash, Credit Card, Online Payment",
              areaServed: [
                {
                  "@type": "City",
                  name: "Dubai",
                },
                {
                  "@type": "City",
                  name: "Abu Dhabi",
                },
                {
                  "@type": "City",
                  name: "Sharjah",
                },
              ],
              serviceType: "Flower Delivery",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Flower Collections",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Modern Flower Collection",
                      description:
                        "Fresh, hand-picked flowers for special occasions",
                    },
                    price: "150.99",
                    priceCurrency: "AED",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
