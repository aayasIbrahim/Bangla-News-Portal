// components/StandardArticleCard.tsx
import React from "react";
import  {Article}  from "@/components/bangladesh/HeroCard";
import Link from "next/link";
import Image from "next/image";

interface StandardArticleCardProps {
  article: Article;
}

const StandardArticleCard: React.FC<StandardArticleCardProps> = ({ article }) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden h-full flex flex-col hover:shadow-md transition duration-200 cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-40 flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
            {article.title}
          </h3>
          {article.summary && (
            <p className="text-gray-700 text-sm leading-relaxed">
              {article.summary}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default StandardArticleCard;
