"use client";

import Image from "next/image";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import DoubleScrollDivider from "./components/DoubleScrollDivider";
import ProductCarousel from "./components/ProductCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCollection from "./components/FeaturedCollection";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";
// import SecondaryFeaturedCollection from "./components/SecondaryFeaturedCollection";

// Import Google Fonts
const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [petalSize, setPetalSize] = useState(400);

  useEffect(() => {
    const updatePetalSize = () => {
      if (window.innerWidth >= 768) {
        setPetalSize(400);
      } else {
        setPetalSize(200);
      }
    };

    updatePetalSize();
    window.addEventListener("resize", updatePetalSize);

    return () => window.removeEventListener("resize", updatePetalSize);
  }, []);

  // Structured data for the homepage
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Flourish Flowers UAE - Premium Flower Delivery",
    description:
      "Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions. Same-day delivery in Dubai, Abu Dhabi, Sharjah.",
    url: "https://flourishflowers.ae",
    mainEntity: {
      "@type": "Organization",
      name: "Flourish Flowers UAE",
      url: "https://flourishflowers.ae",
      logo: "https://flourishflowers.ae/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-XX-XXX-XXXX",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/flourishflowersuae",
        "https://www.instagram.com/flourishflowersuae",
        "https://twitter.com/flourishflowersuae",
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://flourishflowers.ae",
        },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="Premium Flower Delivery UAE | Dubai, Abu Dhabi, Sharjah"
        description="Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions. Same-day delivery in Dubai, Abu Dhabi, Sharjah. Wedding flowers, birthday bouquets, corporate gifts. AED 150+"
        keywords="flower delivery UAE, Dubai flowers, Abu Dhabi flowers, wedding flowers UAE, birthday flowers, corporate flowers, fresh flowers Dubai, flower shop UAE, online flowers, same day delivery, UAE flower delivery"
        canonical="/"
        structuredData={homepageStructuredData}
      />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section
          className="xl:h-screen flex flex-col py-24 pb-44 md:py-20 lg:py-32 lg:pb-44 xl:py-0 relative"
          style={{
            backgroundColor: "#f8f6f0",
            // backgroundImage: "url(/images/hero-image-petal.jpg)",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-1 w-full grid grid-cols-1 xl:grid-cols-2 items-center pt-20 xl:pt-20 pb-0 xl:pb-0">
            {/* Text Content */}
            <div className="relative px-6 md:px-10 space-y-6 z-10 flex flex-col justify-center">
              {/* Petal Background Behind Text */}
              <div className="absolute -top-8 -left-4 w-72 h-72 md:w-96 md:h-96 flex pointer-events-none z-0">
                <Image
                  src="/images/petal-removebg.png"
                  alt="Decorative petals background"
                  width={petalSize}
                  height={petalSize}
                  className="object-contain opacity-40 transform rotate-12"
                  priority
                />
              </div>
              <h1
                className={`${playfair.className} relative pl-8 md:pl-20 text-4xl sm:text-5xl md:text-5xl xl:text-6xl leading-tight text-gray-800 text-left z-20`}
              >
                &#8220;RADIANT
                <br />
                BLOOMS FOR
                <br />
                EVERY OCCASION&#8221;
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl pl-8 md:pl-20 z-20 relative">
                Premium flower delivery across UAE. Fresh, hand-picked flowers
                for weddings, birthdays, anniversaries, and corporate events.
                Same-day delivery in Dubai, Abu Dhabi, and Sharjah.
              </p>
              <div className="pl-8 md:pl-20 z-20 relative">
                <a
                  href="/collections"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  aria-label="Explore our flower collections"
                >
                  Explore Collections
                </a>
              </div>
            </div>

            {/* Image Content - Hidden on medium and smaller screens */}
            <div className="hidden xl:flex relative h-full items-center justify-end">
              <div className="relative w-full h-full max-w-none">
                <Image
                  src="/images/hero-bg-removed.png"
                  alt="Premium flower bouquet for delivery in UAE"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Dividers */}
          {/* Mobile Scroll Divider - Black background with white text - Absolute positioned */}
          <div className="block xl:hidden absolute bottom-0 left-0 right-0">
            <div className="w-full bg-black py-4 text-center text-base text-white tracking-widest overflow-hidden">
              <div className="animate-marquee-seamless whitespace-nowrap">
                <span className={`${cormorant.className} mx-6 font-medium`}>
                  SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL
                  DOWN • SCROLL DOWN •
                </span>
                <span className={`${cormorant.className} mx-6 font-medium`}>
                  SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL
                  DOWN • SCROLL DOWN •
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Double Scroll Down Divider */}
          <div className="hidden xl:block">
            <DoubleScrollDivider />
          </div>
        </section>

        {/* Popular Products Carousel */}
        <ProductCarousel />

        {/* Featured Collection */}
        <FeaturedCollection />

        {/* Secondary Featured Collection */}
        {/* <SecondaryFeaturedCollection /> */}

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
