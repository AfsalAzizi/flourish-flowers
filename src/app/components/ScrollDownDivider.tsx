import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ScrollDownDivider: React.FC = () => {
  const scrollText =
    "SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • ";

  return (
    <div className="w-full bg-white py-5 text-center text-2xl text-gray-800 tracking-widest border-b border-pink-200 overflow-hidden">
      <div className="animate-marquee-seamless whitespace-nowrap">
        <span className={`${cormorant.className} mx-8 font-medium`}>
          {scrollText}
        </span>
        <span className={`${cormorant.className} mx-8 font-medium`}>
          {scrollText}
        </span>
      </div>
    </div>
  );
};

export default ScrollDownDivider;
