"use client";

import { Playfair_Display } from "next/font/google";
import React, { useState } from "react";

const navLinks = [
  { name: "Shop", href: "#" },
  { name: "Our Products", href: "#" },
  { name: "Popular", href: "#" },
];

const playfair = Playfair_Display({ subsets: ["latin"] });

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/20 backdrop-blur-md shadow-md flex items-center transition-all duration-300"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className={`${playfair.className}  text-2xl md:text-3xl font-bold text-gray-800 tracking-tight select-none`}
          >
            FlourishFlowers
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium text-lg px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
              tabIndex={0}
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-6 py-2 text-lg shadow transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            Order Now
          </a>
        </div>
        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className={`w-7 h-7 transition-transform duration-200 ${
              menuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        <nav
          id="mobile-menu"
          className={`md:hidden fixed top-20 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg border-t border-pink-100 transition-all duration-300 z-40 ${
            menuOpen ? "block" : "hidden"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium text-lg px-2 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-6 py-2 text-lg shadow transition-colors duration-200 mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 text-center"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
