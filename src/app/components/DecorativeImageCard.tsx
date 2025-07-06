import React from "react";
import Image from "next/image";

interface DecorativeImageCardProps {
  imageUrl: string;
  alt?: string;
  bgColor?: string;
  className?: string;
}

const DecorativeImageCard: React.FC<DecorativeImageCardProps> = ({
  imageUrl,
  alt = "Decorative image",
  bgColor = "bg-gradient-to-br from-pink-50 to-orange-50",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer decorative background */}
      <div className={`${bgColor} rounded-t-full rounded-b-3xl p-6 shadow-lg`}>
        {/* Inner image container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full rounded-b-2xl bg-white/20 backdrop-blur-sm">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-200 rounded-full opacity-60"></div>
    </div>
  );
};

export default DecorativeImageCard;
