import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  alt?: string;
  bgColor?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  alt,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`relative w-full aspect-[3/4] mb-6 overflow-hidden`}>
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={alt || name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <div
        className={`${playfair.className} text-xl text-gray-700 mb-2 text-center`}
      >
        {name}
      </div>
      <div className={`text-slate-700 font-normal text-lg`}>{price}</div>
    </div>
  );
};

export default ProductCard;
