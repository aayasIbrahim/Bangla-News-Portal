// components/MainCenterSportsCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Article {
  id: string | number; // for dynamic routing
  title: string;
  image: string;
  summary?: string;
}

interface MainCenterSportsCardProps {
  article: Article;
}

const MainCenterSportsCard: React.FC<MainCenterSportsCardProps> = ({ article }) => {
  return (
    <Link
      href={`/news/${article.id}`}
      className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image */}
      <div className="relative w-full h-[400px] flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
        <h3 className="text-white text-xl font-bold leading-tight">
          {article.title}
        </h3>
      </div>
    </Link>
  );
};

export default MainCenterSportsCard;
