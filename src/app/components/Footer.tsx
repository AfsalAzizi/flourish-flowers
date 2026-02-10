import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 md:py-12 px-4 md:px-6 lg:px-16 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <h5
            className={`${playfair.className} text-xl md:text-2xl mb-3 md:mb-4 text-white`}
          >
            FlourishFlowers
          </h5>
          <p className="text-gray-400 text-sm md:text-base">
            Elegant, fresh, and hand-picked flowers delivered to your door. Make
            every moment bloom with FlourishFlowers
          </p>
        </div>

        <div>
          <h6
            className={`${playfair.className} mb-3 md:mb-4 text-white text-lg md:text-2xl`}
          >
            Information
          </h6>
          <ul className="space-y-1.5 md:space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white text-gray-400 transition-colors text-sm md:text-base"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white text-gray-400 transition-colors text-sm md:text-base"
              >
                Delivery Info
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white text-gray-400 transition-colors text-sm md:text-base"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6
            className={`${playfair.className} mb-3 md:mb-4 text-white text-lg md:text-2xl`}
          >
            Contact Us
          </h6>
          {/* Social Media Icons */}
          <div className="mt-2 mb-3 md:mb-4">
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99S24.005 18.611 24.005 11.987C24.005 5.367 18.641.001 12.017.001zM8.449 6.892c1.111-1.111 2.587-1.723 4.158-1.723 1.571 0 3.047.612 4.158 1.723 1.111 1.111 1.723 2.587 1.723 4.158s-.612 3.047-1.723 4.158c-1.111 1.111-2.587 1.723-4.158 1.723-1.571 0-3.047-.612-4.158-1.723-1.111-1.111-1.723-2.587-1.723-4.158s.612-3.047 1.723-4.158zm7.718 7.718c.85-.85 1.318-1.979 1.318-3.18s-.468-2.33-1.318-3.18c-.85-.85-1.979-1.318-3.18-1.318s-2.33.468-3.18 1.318c-.85.85-1.318 1.979-1.318 3.18s.468 2.33 1.318 3.18c.85.85 1.979 1.318 3.18 1.318s2.33-.468 3.18-1.318z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-gray-200 hover:text-white transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
          <ul className="space-y-1.5 md:space-y-2">
            <li className="flex items-center gap-2 text-gray-400 hover:text-white">
              <span className="text-xs md:text-sm">Email:</span>
              <a
                href="mailto:info@flourishflowers.com"
                className="transition-colors text-gray-400 hover:text-white text-xs md:text-sm"
              >
                info@flourishflowers.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-400 hover:text-white">
              <span className="text-xs md:text-sm">Phone:</span>
              <a
                href="tel:+971523469463"
                className="transition-colors text-gray-400 hover:text-white text-xs md:text-sm"
              >
                +971 50 867 9752
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6
            className={`${playfair.className} mb-3 md:mb-4 text-white text-lg md:text-2xl`}
          >
            Newsletters
          </h6>
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
            Get updates by subscribe our weekly newsletter
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 md:px-4 py-2.5 md:py-3 pr-10 md:pr-12 border border-slate-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500 outline-none transition-colors duration-300 text-white bg-transparent placeholder-gray-400 text-sm md:text-base"
            />
            <button
              type="submit"
              className="absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Subscribe"
            >
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs md:text-sm mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} FlourishFlowers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
