import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import DoubleScrollDivider from "./components/DoubleScrollDivider";
import ProductCarousel from "./components/ProductCarousel";

// Import Google Fonts
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col"
        style={{
          backgroundColor: "#8fd3de",
          backgroundImage: "url(/images/wall-block-3.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 items-center pt-20">
          {/* Text Content */}
          <div className="px-10 space-y-6 z-10">
            <h1
              className={`${playfair.className} pl-20 text-5xl md:text-6xl leading-tight text-gray-800 text-left`}
            >
              &#8220;RADIANT
              <br />
              BLOOMS FOR
              <br />
              EVERY OCCASION&#8221;
            </h1>
          </div>

          {/* Image Content - Positioned to right edge */}
          <div className="relative h-full flex items-center justify-end">
            <div className="relative w-full h-full max-w-none">
              <Image
                src="/images/hero-bg-removed.png"
                alt="Flower bouquet"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>

        {/* Double Scroll Down Divider - Inside hero section */}
        <DoubleScrollDivider />
      </section>

      {/* Popular Products Carousel */}
      <ProductCarousel />

      {/* Modern Collection */}
      <section className="py-16 px-6 md:px-16 bg-[#fff1f2] flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3
            className={`${playfair.className} text-3xl font-bold text-gray-800 mb-6 text-center md:text-left`}
          >
            OUR MODERN FLOWER BASE COLLECTION
          </h3>
          <p className="text-gray-600 mb-8 max-w-md text-center md:text-left text-lg">
            Buy super fresh, lovely full flower, tulips, decor your special
            event with us.
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
              src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
              alt="Modern collection"
              fill
              className="rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg">
              <span className="text-pink-600 font-bold text-xl">$12</span>
              <span className="text-sm text-gray-400 line-through ml-2">
                $16
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl w-80 h-80 bg-[#fff1f2] flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
              alt="Why choose us"
              width={300}
              height={300}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4
            className={`${playfair.className} text-3xl font-bold text-gray-800 mb-8`}
          >
            WHY CHOOSE US
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 rounded-full p-3 mt-1 flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 text-lg">
                Frequently New Design
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 rounded-full p-3 mt-1 flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 text-lg">Original Production</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 rounded-full p-3 mt-1 flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 text-lg">
                Production With Large Stock
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-pink-100 text-pink-600 rounded-full p-3 mt-1 flex-shrink-0">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 text-lg">
                Professional Quality Control
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-16 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5
              className={`${playfair.className} text-2xl font-bold mb-4 text-white`}
            >
              FlourishFlowers
            </h5>
            <p className="text-gray-400">
              Elegant, fresh, and hand-picked flowers delivered to your door.
              Make every moment bloom with FlourishFlowers.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">Information</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">Contact Us</h6>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@flourishflowers.com"
                  className="hover:text-pink-400 transition-colors"
                >
                  info@flourishflowers.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-pink-400 transition-colors"
                >
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">Newsletter</h6>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg px-4 py-3 text-gray-900 border-none focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-4 py-3 font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-800">
          &copy; {new Date().getFullYear()} FlourishFlowers. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
