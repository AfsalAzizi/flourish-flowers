"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function WeddingFlowers() {
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

  // Structured data for wedding flowers page
  const weddingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Wedding Flowers UAE | Premium Wedding Flower Arrangements",
    description:
      "Exquisite wedding flowers and bridal bouquets in UAE. Custom wedding flower arrangements for Dubai, Abu Dhabi, Sharjah. Premium wedding florist services.",
    url: "https://flourishflowers.ae/wedding-flowers",
    mainEntity: {
      "@type": "Service",
      name: "Wedding Flower Arrangements",
      description: "Premium wedding flower arrangements and bridal bouquets",
      provider: {
        "@type": "Organization",
        name: "Flourish Flowers UAE",
      },
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
      priceRange: "AED 500+",
    },
  };

  const weddingCollections = [
    {
      name: "Bridal Bouquets",
      description:
        "Elegant bridal bouquets crafted with premium roses, peonies, and seasonal blooms",
      image: "/images/product-1.jpg",
      price: "AED 800+",
      features: ["Hand-tied arrangements", "Premium flowers", "Custom colors"],
    },
    {
      name: "Ceremony Decorations",
      description:
        "Beautiful ceremony flower arrangements for altars, aisles, and entrance displays",
      image: "/images/product-2.jpg",
      price: "AED 1,200+",
      features: ["Large arrangements", "Seasonal flowers", "Setup included"],
    },
    {
      name: "Reception Centerpieces",
      description:
        "Stunning centerpieces for wedding reception tables and venue decoration",
      image: "/images/product-3.jpg",
      price: "AED 600+",
      features: ["Table centerpieces", "Venue decoration", "Custom designs"],
    },
    {
      name: "Boutonnieres & Corsages",
      description:
        "Elegant boutonnieres for groomsmen and corsages for family members",
      image: "/images/product-4.jpg",
      price: "AED 150+",
      features: ["Groom boutonniere", "Groomsmen sets", "Family corsages"],
    },
  ];

  return (
    <>
      <SEOHead
        title="Wedding Flowers UAE | Premium Wedding Flower Arrangements Dubai"
        description="Exquisite wedding flowers and bridal bouquets in UAE. Custom wedding flower arrangements for Dubai, Abu Dhabi, Sharjah. Premium wedding florist services. AED 500+"
        keywords="wedding flowers UAE, bridal bouquets Dubai, wedding flower arrangements Abu Dhabi, wedding florist UAE, wedding decorations Dubai, bridal flowers UAE"
        canonical="/wedding-flowers"
        structuredData={weddingStructuredData}
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section
          className="xl:h-screen flex flex-col py-24 pb-44 md:py-20 lg:py-32 lg:pb-44 xl:py-0 relative"
          style={{
            backgroundColor: "#f8f6f0",
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
                &#8220;WEDDING
                <br />
                FLOWERS FOR
                <br />
                YOUR SPECIAL DAY&#8221;
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl pl-8 md:pl-20 z-20 relative">
                Create unforgettable wedding memories with our exquisite flower
                arrangements. From bridal bouquets to ceremony decorations, we
                craft the perfect floral elements for your dream wedding in
                Dubai, Abu Dhabi, and across UAE.
              </p>
              <div className="pl-8 md:pl-20 z-20 relative">
                <a
                  href="/contact"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  aria-label="Book wedding flower consultation"
                >
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="hidden xl:flex relative h-full items-center justify-end">
              <div className="relative w-full h-full max-w-none">
                <Image
                  src="/images/product-1.jpg"
                  alt="Beautiful wedding flower arrangement"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Collections */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Wedding Flower Collections
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                From intimate ceremonies to grand celebrations, our wedding
                flower collections are designed to make your special day truly
                magical
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {weddingCollections.map((collection, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`${playfair.className} text-xl font-semibold text-gray-800 mb-2`}
                    >
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {collection.description}
                    </p>
                    <div className="text-pink-600 font-bold text-lg mb-4">
                      {collection.price}
                    </div>
                    <ul className="space-y-1">
                      {collection.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-600 text-sm flex items-center"
                        >
                          <svg
                            className="w-4 h-4 text-pink-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Wedding Flowers */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800 mb-8`}
                >
                  Why Choose Our Wedding Flowers?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Custom Designs
                      </h3>
                      <p className="text-gray-600">
                        Every arrangement is custom-designed to match your
                        wedding theme and color palette
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Fresh & Premium
                      </h3>
                      <p className="text-gray-600">
                        Only the freshest, highest-quality flowers sourced from
                        premium suppliers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Delivery & Setup
                      </h3>
                      <p className="text-gray-600">
                        Professional delivery and setup service across Dubai,
                        Abu Dhabi, and Sharjah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/product-5.jpg"
                    alt="Wedding flower consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-r from-pink-500 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-6`}
            >
              Ready to Create Your Dream Wedding Flowers?
            </h2>
            <p className="text-pink-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Book a consultation with our wedding flower specialists and let us
              bring your floral vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-pink-600 font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg hover:bg-gray-100"
              >
                Book Consultation
              </a>
              <a
                href="tel:+971-XX-XXX-XXXX"
                className="border-2 border-white text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 text-lg hover:bg-white hover:text-pink-600"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
