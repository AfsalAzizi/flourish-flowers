import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import DoubleScrollDivider from "./components/DoubleScrollDivider";
import ProductCarousel from "./components/ProductCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedCollection from "./components/FeaturedCollection";
import Footer from "./components/Footer";
// import SecondaryFeaturedCollection from "./components/SecondaryFeaturedCollection";

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

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Secondary Featured Collection */}
      {/* <SecondaryFeaturedCollection /> */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
