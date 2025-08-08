"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function About() {
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

  // Structured data for about page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Flourish Flowers UAE | Premium Flower Shop Dubai, Abu Dhabi",
    description:
      "Learn about Flourish Flowers UAE - premium flower shop in Dubai, Abu Dhabi, Sharjah. Our story, mission, and commitment to delivering beautiful flowers across UAE.",
    url: "https://flourishflowers.ae/about",
    mainEntity: {
      "@type": "Organization",
      name: "Flourish Flowers UAE",
      description: "Premium flower delivery service across UAE",
      url: "https://flourishflowers.ae",
      logo: "https://flourishflowers.ae/images/logo.png",
      foundingDate: "2020",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AE",
        addressRegion: "Dubai",
        addressLocality: "Dubai",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-XX-XXX-XXXX",
        contactType: "customer service",
        areaServed: "AE",
      },
    },
  };

  const teamMembers = [
    {
      name: "Sarah Ahmed",
      role: "Founder & Creative Director",
      image: "/images/product-1.jpg",
      description:
        "With over 10 years of experience in floral design, Sarah brings creativity and passion to every arrangement.",
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Head Florist",
      image: "/images/product-2.jpg",
      description:
        "Expert in creating stunning wedding arrangements and corporate flower displays.",
    },
    {
      name: "Fatima Hassan",
      role: "Customer Service Manager",
      image: "/images/product-3.jpg",
      description:
        "Ensuring every customer receives exceptional service and beautiful flowers on time.",
    },
  ];

  const values = [
    {
      icon: "🌸",
      title: "Quality First",
      description:
        "We source only the freshest, highest-quality flowers from premium suppliers",
    },
    {
      icon: "💝",
      title: "Customer Focus",
      description:
        "Every arrangement is crafted with our customers' needs and preferences in mind",
    },
    {
      icon: "🚚",
      title: "Reliable Delivery",
      description: "Fast, safe, and professional delivery service across UAE",
    },
    {
      icon: "🎨",
      title: "Creative Excellence",
      description:
        "Our expert florists create unique, beautiful arrangements for every occasion",
    },
  ];

  return (
    <>
      <SEOHead
        title="About Flourish Flowers UAE | Premium Flower Shop Dubai, Abu Dhabi"
        description="Learn about Flourish Flowers UAE - premium flower shop in Dubai, Abu Dhabi, Sharjah. Our story, mission, and commitment to delivering beautiful flowers across UAE."
        keywords="about flower shop UAE, flower shop Dubai about, flower delivery Abu Dhabi about, Flourish Flowers UAE story, premium flower shop Dubai"
        canonical="/about"
        structuredData={aboutStructuredData}
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
                &#8220;OUR STORY OF
                <br />
                BEAUTY & PASSION&#8221;
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl pl-8 md:pl-20 z-20 relative">
                Discover the story behind Flourish Flowers UAE. We&apos;re
                passionate about bringing beauty and joy to every occasion
                through our premium flower delivery service across Dubai, Abu
                Dhabi, and Sharjah.
              </p>
              <div className="pl-8 md:pl-20 z-20 relative">
                <a
                  href="/contact"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  aria-label="Get in touch with us"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="hidden xl:flex relative h-full items-center justify-end">
              <div className="relative w-full h-full max-w-none">
                <Image
                  src="/images/product-4.jpg"
                  alt="About Flourish Flowers UAE"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800 mb-8`}
                >
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Founded in 2020, Flourish Flowers UAE began with a simple
                    mission: to bring the beauty of fresh flowers to every
                    corner of the UAE. What started as a small passion project
                    has grown into one of the most trusted flower delivery
                    services in Dubai, Abu Dhabi, and Sharjah.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our journey began when our founder, Sarah Ahmed, noticed
                    that many people in the UAE were looking for premium flower
                    delivery services that could match the high standards of the
                    region. With a background in floral design and a deep love
                    for flowers, she decided to create something special.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, we&apos;re proud to serve thousands of customers
                    across the UAE, delivering not just flowers, but moments of
                    joy, celebration, and beauty. From intimate birthday
                    bouquets to grand wedding arrangements, we&apos;ve been part
                    of countless special moments.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/product-5.jpg"
                    alt="Our flower shop story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                These core values guide everything we do, from selecting the
                perfect flowers to ensuring timely delivery to your doorstep
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3
                    className={`${playfair.className} text-xl font-semibold text-gray-800 mb-4`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Meet Our Team
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Our dedicated team of floral experts and customer service
                professionals work together to bring you the best flower
                delivery experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`${playfair.className} text-xl font-semibold text-gray-800 mb-2`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-pink-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/product-6.jpg"
                    alt="Our mission and vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2
                  className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800 mb-8`}
                >
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To deliver exceptional floral experiences that bring joy,
                      beauty, and celebration to every occasion. We strive to be
                      the most trusted and preferred flower delivery service
                      across the UAE.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become the leading floral service provider in the UAE,
                      known for our creativity, reliability, and commitment to
                      customer satisfaction. We envision a future where
                      beautiful flowers are accessible to everyone, delivered
                      with care and precision.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                      Our Promise
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every flower we deliver is carefully selected, expertly
                      arranged, and delivered with the same care and attention
                      we would give to our own family. Your satisfaction is our
                      priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-r from-pink-500 to-pink-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-6`}
              >
                Our Numbers Tell Our Story
              </h2>
              <p className="text-pink-100 text-lg md:text-xl max-w-3xl mx-auto">
                Years of dedication, thousands of happy customers, and countless
                beautiful moments delivered
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-2`}
                >
                  4+
                </div>
                <div className="text-pink-100 text-lg">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div
                  className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-2`}
                >
                  10K+
                </div>
                <div className="text-pink-100 text-lg">Happy Customers</div>
              </div>
              <div className="text-center">
                <div
                  className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-2`}
                >
                  50K+
                </div>
                <div className="text-pink-100 text-lg">Flowers Delivered</div>
              </div>
              <div className="text-center">
                <div
                  className={`${playfair.className} text-4xl md:text-5xl font-bold text-white mb-2`}
                >
                  5★
                </div>
                <div className="text-pink-100 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800 mb-6`}
            >
              Ready to Experience Our Service?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their
              flower delivery needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/collections"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
              >
                Browse Collections
              </a>
              <a
                href="/contact"
                className="border-2 border-pink-500 text-pink-500 font-semibold rounded-full px-8 py-4 transition-all duration-300 text-lg hover:bg-pink-500 hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
