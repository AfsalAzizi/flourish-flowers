import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      ),
      title: "Premium Quality",
      description:
        "Hand-selected fresh flowers from the finest gardens, ensuring exceptional quality and longevity.",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          />
        </svg>
      ),
      title: "Same-Day Delivery",
      description:
        "Fast and reliable delivery service to ensure your flowers arrive fresh and on time.",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "100% Satisfaction",
      description:
        "We guarantee your complete satisfaction with every order, or we'll make it right.",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"
          />
        </svg>
      ),
      title: "Expert Florists",
      description:
        "Our skilled florists create stunning arrangements with years of experience and artistic flair.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className={`${playfair.className} text-4xl md:text-5xl text-gray-800 mb-12`}
          >
            Why Choose FlourishFlowers?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re passionate about delivering the finest floral
            experiences, combining traditional craftsmanship with modern
            convenience to bring beauty to your special moments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3
                className={`${playfair.className} text-xl font-semibold text-gray-800 mb-3`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/why-choose-us.png"
                alt="Beautiful flower arrangement"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div
                  className={`${playfair.className} text-3xl font-bold text-pink-600`}
                >
                  10K+
                </div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div
                  className={`${playfair.className} text-3xl font-bold text-pink-600`}
                >
                  5★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3
              className={`${playfair.className} text-3xl font-bold text-gray-800`}
            >
              Trusted by Thousands of Customers
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Since our founding, we&apos;ve been dedicated to creating
              memorable experiences through the art of flowers. Our commitment
              to quality, creativity, and customer satisfaction has made us the
              preferred choice for celebrations, special occasions, and everyday
              moments of joy.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Fresh flowers sourced daily from premium suppliers
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Custom arrangements for every occasion
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                    <path d="M19 7c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zM9 4h2v1H9V4zm8 14H4V8h3v1c0 .55.45 1 1 1s1-.45 1-1V8h2v1c0 .55.45 1 1 1s1-.45 1-1V8h3v10z" />
                    <circle cx="9" cy="13" r="1.5" />
                    <circle cx="15" cy="13" r="1.5" />
                    <path d="M12 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Professional delivery across the city
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
                Shop Our Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
