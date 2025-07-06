"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";
import ProductCard from "./ProductCard";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface Product {
  name: string;
  price: string;
  img: string;
}

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show 4 items at a time

  const products: Product[] = [
    {
      name: "Pure Radiance",
      price: "AED 24.99",
      img: "/images/product-1.jpg",
    },
    {
      name: "Spring Embrace",
      price: "AED 19.99",
      img: "/images/product-9.jpg",
    },
    {
      name: "Lily Grace",
      price: "AED 29.99",
      img: "/images/product-3.jpg",
    },
    {
      name: "Cone Blossom",
      price: "AED 22.99",
      img: "/images/product-4.jpg",
    },
    {
      name: "Rose Elegance",
      price: "AED 34.99",
      img: "/images/product-5.jpg",
    },
    {
      name: "Garden Delight",
      price: "AED 27.99",
      img: "/images/product-6.jpg",
    },
    {
      name: "Sunset Bloom",
      price: "AED 31.99",
      img: "/images/product-10.jpg",
    },
    {
      name: "Morning Glory",
      price: "AED 26.99",
      img: "/images/product-8.jpg",
    },
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 px-6 md:px-16 bg-white mt-20">
      <h2
        className={`${playfair.className} text-4xl font-bold text-center mb-4 text-gray-800`}
      >
        POPULAR
      </h2>
      <p className="text-center text-gray-500 mb-12 text-lg max-w-xl mx-auto py-4">
        Fresh flowers are celebrated for their natural beauty and the wide range
        of colors, shapes, and sizes
      </p>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8 transition-all duration-300">
          {currentProducts.map((product, idx) => (
            <ProductCard
              key={currentIndex * itemsPerPage + idx}
              name={product.name}
              price={product.price}
              image={product.img}
              alt={product.name}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors duration-200 group"
            aria-label="Previous products"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className="text-pink-600 group-hover:text-pink-700"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 18l-6-6 6-6"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <span className={`${playfair.className} text-lg text-gray-600`}>
              Prev
            </span>
            <div className="w-16 h-px bg-gray-300"></div>
            <span className={`${playfair.className} text-lg text-gray-600`}>
              Next
            </span>
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors duration-200 group"
            aria-label="Next products"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className="text-pink-600 group-hover:text-pink-700"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
