// components/MainCard.tsx
import React from "react";
import Image from "next/image";

interface Article {
  title: string;
  image: string;
}

interface MainCardProps {
  article: Article;
}

const MainCard: React.FC<MainCardProps> = ({ article }) => {
  const { title, image } = article;

  return (
    <div className="relative col-span-2 cursor-pointer overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300">

      <Image
        src={image}
        alt={title}
        width={900} 
        height={500} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">{title}</h2>
      </div>
    </div>
  );
};

export default MainCard;
