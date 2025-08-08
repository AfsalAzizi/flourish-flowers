"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEOHead from "../components/SEOHead";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Contact() {
  const [petalSize, setPetalSize] = useState(400);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "general",
  });

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

  // Structured data for contact page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact Flourish Flowers UAE | Flower Delivery Dubai, Abu Dhabi",
    description:
      "Contact Flourish Flowers UAE for flower delivery in Dubai, Abu Dhabi, Sharjah. Get in touch for wedding flowers, corporate gifts, and same-day delivery. Call +971-XX-XXX-XXXX",
    url: "https://flourishflowers.ae/contact",
    mainEntity: {
      "@type": "ContactPage",
      name: "Contact Flourish Flowers UAE",
      description: "Get in touch with us for flower delivery services",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-XX-XXX-XXXX",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: "English",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["+971-XX-XXX-XXXX", "Available 8 AM - 10 PM"],
      action: "tel:+971-XX-XXX-XXXX",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["info@flourishflowers.ae", "orders@flourishflowers.ae"],
      action: "mailto:info@flourishflowers.ae",
    },
    {
      icon: "📍",
      title: "Address",
      details: [
        "Dubai, United Arab Emirates",
        "Serving Dubai, Abu Dhabi, Sharjah",
      ],
      action: "#",
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Monday - Sunday", "8:00 AM - 10:00 PM"],
      action: "#",
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Flourish Flowers UAE | Flower Delivery Dubai, Abu Dhabi"
        description="Contact Flourish Flowers UAE for flower delivery in Dubai, Abu Dhabi, Sharjah. Get in touch for wedding flowers, corporate gifts, and same-day delivery. Call +971-XX-XXX-XXXX"
        keywords="contact flower delivery UAE, flower shop Dubai contact, wedding flowers contact UAE, flower delivery Abu Dhabi contact, corporate flowers UAE contact"
        canonical="/contact"
        structuredData={contactStructuredData}
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
                &#8220;GET IN TOUCH
                <br />
                WITH US TODAY&#8221;
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl pl-8 md:pl-20 z-20 relative">
                Ready to order beautiful flowers? Have questions about our
                services? We&apos;re here to help you create the perfect floral
                experience. Contact us for flower delivery across UAE.
              </p>
              <div className="pl-8 md:pl-20 z-20 relative">
                <a
                  href="tel:+971-XX-XXX-XXXX"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  aria-label="Call us now"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="hidden xl:flex relative h-full items-center justify-end">
              <div className="relative w-full h-full max-w-none">
                <Image
                  src="/images/product-8.jpg"
                  alt="Contact us for flower delivery"
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-pink-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Contact Information
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Get in touch with us through any of these channels. We&apos;re
                here to help you with all your flower delivery needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3
                    className={`${playfair.className} text-xl font-semibold text-gray-800 mb-4`}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={info.action}
                    className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-4 py-2 text-sm transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2
                className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-8 md:mb-12`}
              >
                Send Us a Message
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. We&apos;re here to help with all your flower
                delivery needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="wedding">Wedding Flowers</option>
                      <option value="birthday">Birthday Flowers</option>
                      <option value="corporate">Corporate Gifts</option>
                      <option value="delivery">Delivery Inquiry</option>
                      <option value="custom">Custom Arrangement</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Tell us about your flower delivery needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h3
                    className={`${playfair.className} text-2xl font-bold text-gray-800 mb-6`}
                  >
                    Why Contact Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-pink-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Custom flower arrangements
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-pink-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Wedding flower consultations
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-pink-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Same-day delivery inquiries
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-pink-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Corporate gift services
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6">
                  <h4
                    className={`${playfair.className} text-xl font-semibold text-gray-800 mb-4`}
                  >
                    Quick Contact
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+971-XX-XXX-XXXX"
                      className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +971-XX-XXX-XXXX
                    </a>
                    <a
                      href="mailto:info@flourishflowers.ae"
                      className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      info@flourishflowers.ae
                    </a>
                  </div>
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
              Ready to Order Beautiful Flowers?
            </h2>
            <p className="text-pink-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Contact us today and let us help you create the perfect floral
              experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/collections"
                className="bg-white text-pink-600 font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 text-lg hover:bg-gray-100"
              >
                Browse Collections
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
