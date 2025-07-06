import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#fff1f2] flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h3
          className={`${playfair.className} text-3xl font-bold text-gray-800 mb-6 text-center md:text-left`}
        >
          OUR MODERN FLOWER BASE COLLECTION
        </h3>
        <p className="text-gray-600 mb-8 max-w-md text-center md:text-left text-lg">
          Buy super fresh, lovely full flower, tulips, decor your special event
          with us
        </p>
        <a
          href="#"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-300 text-lg"
        >
          Explore All
        </a>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="relative w-80 h-80 mb-4">
          <Image
            src="/images/featured-collection-3.jpg"
            alt="Modern collection"
            fill
            className=" object-cover shadow-xl"
          />
          <div className="absolute bottom-6 right-6 bg-white px-6 py-3 shadow-lg rounded-full">
            <span className="text-pink-600 font-bold text-xl">AED 12</span>
            <span className="text-sm text-gray-400 line-through ml-2">
              AED 16
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
