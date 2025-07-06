import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const SecondaryFeaturedCollection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`${playfair.className} text-4xl md:text-5xl font-bold text-gray-800 mb-6`}
          >
            OUR MODERN FLOWER BASE COLLECTION
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Buy super fresh and beauty full flower, buka, decor your special
            event with us...
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vase and Description */}
          <div className="relative">
            <div className="bg-pink-100 rounded-3xl p-8 mb-8">
              <div className="relative w-full h-80 flex items-center justify-center">
                <Image
                  src="/images/featured-collection-1.jpg"
                  alt="White textured vase with flowers"
                  width={280}
                  height={320}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="w-16 h-0.5 bg-gray-800 mb-4 mx-auto lg:mx-0"></div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 max-w-xs mx-auto lg:mx-0">
                Fresh Flowers Are Celebrated For Their Natural Beauty
              </h3>
              <button className="inline-flex items-center text-gray-800 font-medium hover:text-pink-600 transition-colors duration-300">
                Explore All
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="relative">
            <div className="bg-pink-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative w-full h-80 flex items-center justify-center">
                <Image
                  src="/images/featured-collection-2.jpg"
                  alt="Beautiful flower arrangement"
                  width={300}
                  height={320}
                  className="object-contain"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6">
                <svg
                  className="w-16 h-8 text-gray-600 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 100 50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M10 25 Q25 10 50 25 T90 25"
                  />
                </svg>
              </div>

              {/* Pricing Card */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    $12
                  </div>
                  <div className="text-sm text-gray-500 mb-3">25% Off</div>
                  <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5h12.5M12 21a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryFeaturedCollection;
