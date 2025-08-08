"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Delivery() {
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

  // Structured data for delivery page
  const deliveryStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Flower Delivery UAE | Same Day Delivery Dubai, Abu Dhabi, Sharjah",
    description:
      "Premium flower delivery service across UAE. Same-day delivery in Dubai, Abu Dhabi, Sharjah. Fast, reliable flower delivery to your door. AED 150+",
    url: "https://flourishflowers.ae/delivery",
    mainEntity: {
      "@type": "Service",
      name: "Flower Delivery Service",
      description:
        "Premium flower delivery across UAE with same-day delivery options",
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
      serviceType: "Flower Delivery",
      priceRange: "AED 150+",
    },
  };

  const deliveryAreas = [
    {
      city: "Dubai",
      areas: [
        "Downtown Dubai",
        "Dubai Marina",
        "Palm Jumeirah",
        "JBR",
        "Dubai Hills",
        "Emirates Hills",
        "Arabian Ranches",
        "Dubai Silicon Oasis",
        "Dubai Sports City",
        "Dubai Production City",
      ],
      deliveryTime: "2-4 hours",
      minOrder: "AED 150",
    },
    {
      city: "Abu Dhabi",
      areas: [
        "Corniche",
        "Yas Island",
        "Saadiyat Island",
        "Al Reem Island",
        "Al Raha Beach",
        "Khalifa City",
        "Al Reef",
        "Al Raha Gardens",
        "Al Bandar",
        "Al Muneera",
      ],
      deliveryTime: "3-5 hours",
      minOrder: "AED 200",
    },
    {
      city: "Sharjah",
      areas: [
        "Al Majaz",
        "Al Qasba",
        "Al Khan",
        "Al Nahda",
        "Al Taawun",
        "Al Rolla",
        "Al Qulayaa",
        "Al Sajaa",
        "Al Hamriyah",
        "Al Dhaid",
      ],
      deliveryTime: "3-5 hours",
      minOrder: "AED 200",
    },
  ];

  const deliveryOptions = [
    {
      name: "Same Day Delivery",
      description: "Order by 2 PM for same-day delivery",
      price: "AED 50",
      time: "2-6 hours",
      icon: "🚚",
    },
    {
      name: "Express Delivery",
      description: "Ultra-fast delivery within 2 hours",
      price: "AED 80",
      time: "1-2 hours",
      icon: "⚡",
    },
    {
      name: "Scheduled Delivery",
      description: "Choose your preferred delivery time",
      price: "AED 30",
      time: "Flexible",
      icon: "📅",
    },
    {
      name: "Free Delivery",
      description: "Free delivery on orders above AED 300",
      price: "FREE",
      time: "4-8 hours",
      icon: "🎁",
    },
  ];

  return (
    <>
      <SEOHead
        title="Flower Delivery UAE | Same Day Delivery Dubai, Abu Dhabi, Sharjah"
        description="Premium flower delivery service across UAE. Same-day delivery in Dubai, Abu Dhabi, Sharjah. Fast, reliable flower delivery to your door. AED 150+"
        keywords="flower delivery UAE, same day delivery Dubai, flower delivery Abu Dhabi, flower delivery Sharjah, fast flower delivery UAE, flower delivery service Dubai"
        canonical="/delivery"
        structuredData={deliveryStructuredData}
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
                &#8220;FAST & RELIABLE
                <br />
                FLOWER DELIVERY
                <br />
                ACROSS UAE&#8221;
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl pl-8 md:pl-20 z-20 relative">
                Experience premium flower delivery service across UAE. Same-day
                delivery available in Dubai, Abu Dhabi, and Sharjah. Fresh
                flowers delivered to your door with care and precision.
              </p>
              <div className="pl-8 md:pl-20 z-20 relative">
                <a
                  href="/collections"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  aria-label="Order flowers for delivery"
                >
                  Order Now
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="hidden xl:flex relative h-full items-center justify-end">
              <div className="relative w-full h-full max-w-none">
                <Image
                  src="/images/product-6.jpg"
                  alt="Flower delivery service"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Delivery Options
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Choose the delivery option that best suits your needs. From
                same-day delivery to scheduled deliveries, we ensure your
                flowers arrive fresh and on time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3
                    className={`${playfair.className} text-xl font-semibold text-gray-800 mb-3`}
                  >
                    {option.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="text-pink-600 font-bold text-lg mb-2">
                    {option.price}
                  </div>
                  <div className="text-gray-500 text-sm">
                    Delivery Time: {option.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Delivery Areas
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                We deliver fresh flowers across major cities in UAE. Check if we
                deliver to your area
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {deliveryAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl p-8"
                >
                  <h3
                    className={`${playfair.className} text-2xl font-bold text-gray-800 mb-4`}
                  >
                    {area.city}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Delivery Time:</span>
                      <span className="font-semibold text-gray-800">
                        {area.deliveryTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Minimum Order:</span>
                      <span className="font-semibold text-gray-800">
                        {area.minOrder}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Popular Areas:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.areas.slice(0, 8).map((subArea, subIndex) => (
                        <div
                          key={subIndex}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <svg
                            className="w-3 h-3 text-pink-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {subArea}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                How Our Delivery Works
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Simple, fast, and reliable flower delivery process designed for
                your convenience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Place Your Order
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose your flowers and delivery option online or call us
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">We Prepare</h3>
                <p className="text-gray-600 text-sm">
                  Our expert florists carefully arrange your flowers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">We Deliver</h3>
                <p className="text-gray-600 text-sm">
                  Professional delivery to your doorstep with care
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">You Enjoy</h3>
                <p className="text-gray-600 text-sm">
                  Fresh, beautiful flowers delivered on time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Features */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800 mb-8`}
                >
                  Why Choose Our Delivery Service?
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Same Day Delivery
                      </h3>
                      <p className="text-gray-600">
                        Order by 2 PM for same-day delivery across UAE
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Fresh Guarantee
                      </h3>
                      <p className="text-gray-600">
                        All flowers are freshly picked and carefully handled
                        during delivery
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
                        Wide Coverage
                      </h3>
                      <p className="text-gray-600">
                        Delivering to Dubai, Abu Dhabi, Sharjah and surrounding
                        areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/product-7.jpg"
                    alt="Flower delivery service"
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
              Ready for Fast Flower Delivery?
            </h2>
            <p className="text-pink-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Order now and experience our premium flower delivery service
              across UAE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/collections"
                className="bg-white text-pink-600 font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg hover:bg-gray-100"
              >
                Order Flowers
              </a>
              <a
                href="tel:+971-XX-XXX-XXXX"
                className="border-2 border-white text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 text-lg hover:bg-white hover:text-pink-600"
              >
                Call for Delivery
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
