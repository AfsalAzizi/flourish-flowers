"use client";

import React, { useState, useEffect } from "react";
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
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2); // Small tablet: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3); // Tablet: 3 items
      } else {
        setItemsPerPage(4); // Desktop: 4 items
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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

  // Reset current index when items per page changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const currentProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-16 bg-white mt-4 xl:mt-20">
      <h2
        className={`${playfair.className} text-3xl md:text-4xl  text-center mb-4 text-gray-800`}
      >
        POPULAR
      </h2>
      <p className="text-center text-gray-500 mb-8 md:mb-12 text-base md:text-lg max-w-xl mx-auto py-4 px-4">
        Fresh flowers are celebrated for their natural beauty and the wide range
        of colors, shapes, and sizes
      </p>

      {/* Carousel Container */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8 transition-all duration-300">
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
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-16">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors duration-200 group"
            aria-label="Previous products"
          >
            <svg
              width="16"
              height="16"
              className="md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 18l-6-6 6-6"
                className="text-pink-600 group-hover:text-pink-700"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <span
              className={`${playfair.className} text-base md:text-lg text-gray-600`}
            >
              Prev
            </span>
            <div className="w-12 md:w-16 h-px bg-gray-300"></div>
            <span
              className={`${playfair.className} text-base md:text-lg text-gray-600`}
            >
              Next
            </span>
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-200 hover:bg-pink-300 transition-colors duration-200 group"
            aria-label="Next products"
          >
            <svg
              width="16"
              height="16"
              className="md:w-5 md:h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 18l6-6-6-6"
                className="text-pink-600 group-hover:text-pink-700"
              />
            </svg>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
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
