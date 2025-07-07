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
          backgroundColor: "#f8f6f0",
          // backgroundImage: "url(/images/hero-image-petal.jpg)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 items-center pt-20">
          {/* Text Content */}
          <div className="relative px-10 space-y-6 z-10">
            {/* Petal Background Behind Text */}
            <div className="absolute -top-8 -left-4 w-96 h-96 flex pointer-events-none z-0">
              <Image
                src="/images/petal-removebg.png"
                alt="Decorative petals"
                width={400}
                height={400}
                className="object-contain opacity-40 transform rotate-12"
              />
            </div>
            <h1
              className={`${playfair.className} relative pl-20 text-5xl md:text-6xl leading-tight text-gray-800 text-left z-20`}
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
