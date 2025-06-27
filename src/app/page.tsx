import Image from "next/image";

const products = [
  {
    name: "Pure Radiance",
    price: "$24.99",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Spring Embrace",
    price: "$19.99",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lily Grace",
    price: "$29.99",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cone Blossom",
    price: "$22.99",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#e0f7fa] via-[#fff1f2] to-[#ffe0e9] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-10 py-20 bg-[#B7E5E0]">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl  leading-tight text-gray-900 font-[\'Playfair Display\',serif]">
              RADIANT BLOOMS
              <br />
              FOR EVERY OCCASION
            </h1>
            <div className="bg-white p-4 rounded-xl inline-block shadow-md">
              <p className="text-lg font-medium text-gray-800">
                <span className="text-pink-600 font-bold text-xl">30% off</span>{" "}
                on Gerbera
                <br />
                Buy super fresh and beauty full flowers, buke, decor your
                special event with us.
              </p>
              <a
                href="#"
                className="mt-4 inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
              >
                See More
              </a>
            </div>
          </div>
          {/* Image Content */}
          <div className="relative flex justify-center">
            <Image
              src="https://i.ibb.co/Xj3rDMB/flower-bouquet.png"
              alt="Flower bouquet"
              width={350}
              height={350}
              className="w-full max-w-md mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Scroll Down Divider */}
      <div className="w-full bg-[#ffe0e9] py-2 text-center text-lg font-serif text-pink-500 tracking-widest border-b border-pink-200">
        <span className="mx-2 animate-bounce">Scroll Down</span>
      </div>

      {/* Popular Products */}
      <section id="popular" className="py-16 px-6 md:px-16 bg-white">
        <h2 className="text-3xl font-serif font-bold text-center mb-2 text-gray-800">
          POPULAR
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Fresh flowers are celebrated for their natural beauty and the wide
          range of colors, shapes, and sizes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] rounded-2xl shadow-md p-4 flex flex-col items-center border border-pink-100"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={160}
                height={200}
                className="rounded-xl object-cover mb-4"
              />
              <div className="font-serif text-lg font-semibold text-gray-700 mb-1">
                {product.name}
              </div>
              <div className="text-pink-600 font-bold text-base">
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern Collection */}
      <section className="py-16 px-6 md:px-16 bg-[#fff1f2] flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            OUR MODERN FLOWER BASE COLLECTION
          </h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Buy super fresh, lovely full flower, tulips, decor your special
            event with us.
          </p>
          <a
            href="#"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-6 py-2 shadow transition-all duration-200 text-base"
          >
            Explore All
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4">
            <Image
              src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
              alt="Modern collection"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow text-pink-600 font-bold text-lg">
              $12{" "}
              <span className="text-xs text-gray-400 line-through ml-1">
                $16
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-16 bg-white flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl w-72 h-72 bg-[#fff1f2] flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
              alt="Why choose us"
              width={250}
              height={250}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-serif font-bold text-gray-800 mb-6">
            WHY CHOOSE US
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-pink-100 text-pink-600 rounded-full p-2 mt-1">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700">Frequently New Design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-100 text-pink-600 rounded-full p-2 mt-1">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700">Original Production</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-100 text-pink-600 rounded-full p-2 mt-1">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700">Production With Large Stock</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-pink-100 text-pink-600 rounded-full p-2 mt-1">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700">
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
            <h5 className="font-serif text-lg font-bold mb-4 text-white">
              FlourishFlowers
            </h5>
            <p className="text-gray-400 text-sm">
              Elegant, fresh, and hand-picked flowers delivered to your door.
              Make every moment bloom with FlourishFlowers.
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Information</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Contact Us</h6>
            <ul className="space-y-1 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@flourishflowers.com"
                  className="hover:underline"
                >
                  info@flourishflowers.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Newsletter</h6>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded px-3 py-2 text-gray-900"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded px-3 py-2 font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} FlourishFlowers. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
