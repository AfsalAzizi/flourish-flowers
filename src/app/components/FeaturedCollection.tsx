import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-16 bg-[#fff1f2] flex flex-col lg:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h3
          className={`${playfair.className} text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 text-center lg:text-left px-4 lg:px-0`}
        >
          OUR MODERN FLOWER BASE COLLECTION
        </h3>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-md text-center lg:text-left text-base md:text-lg px-4 lg:px-0">
          Buy super fresh, lovely full flower, tulips, decor your special event
          with us
        </p>
        <a
          href="#"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-6 md:px-8 py-2.5 md:py-3 shadow-lg transition-all duration-300 text-base md:text-lg"
        >
          Explore All
        </a>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80 mb-4">
          <Image
            src="/images/featured-collection-3.jpg"
            alt="Modern collection"
            fill
            className="object-cover shadow-xl rounded-lg"
          />
          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white px-4 md:px-6 py-2 md:py-3 shadow-lg rounded-full">
            <span className="text-pink-600 font-bold text-lg md:text-xl">
              AED 12
            </span>
            <span className="text-xs md:text-sm text-gray-400 line-through ml-2">
              AED 16
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
