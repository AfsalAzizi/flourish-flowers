import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SlantedScrollDivider: React.FC = () => {
  const scrollText =
    "SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • SCROLL DOWN • ";

  return (
    <div className="w-full bg-gradient-to-r from-orange-200 to-pink-200 py-5 text-center text-2xl text-gray-800 tracking-widest overflow-hidden transform -skew-y-2 origin-bottom-right">
      <div className="animate-marquee-offset whitespace-nowrap transform skew-y-1">
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

export default SlantedScrollDivider;
