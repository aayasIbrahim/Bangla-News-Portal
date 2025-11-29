// components/LeftStackedCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Article {
  id: string | number; // for dynamic routing
  title: string;
  image: string;
  summary?: string;
}

interface LeftStackedCardProps {
  article: Article;
}

const LeftStackedCard: React.FC<LeftStackedCardProps> = ({ article }) => {
  return (
    <Link
      href={`/news/${article.id}`}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden h-[500px] flex flex-col hover:bg-gray-50 transition duration-150 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-64 flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex-grow">
        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {article.title}
        </h3>
        {article.summary && (
          <p className="text-gray-600 text-sm mt-1 leading-tight line-clamp-3">
            {article.summary}
          </p>
        )}
      </div>
    </Link>
  );
};

export default LeftStackedCard;
