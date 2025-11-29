// components/CommerceMainCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string; // For the large left card
}

interface CommerceMainCardProps {
  article: Article;
}

const CommerceMainCard: React.FC<CommerceMainCardProps> = ({ article }) => {
  return (
    <Link href={`news/${article.id}`}>
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden h-full flex flex-col hover:shadow-md transition duration-200">
        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 flex-shrink-0">
          <Image
            src={article.image} // OR directly /images/product.jpg
            alt={article.title}
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title (can be an overlay or below, here below for clarity on white background) */}
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
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

export default CommerceMainCard;
