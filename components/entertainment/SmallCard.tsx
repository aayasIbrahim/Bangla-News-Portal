import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string | number;
  title: string;
  image: string;
  summary?: string;
}

interface SmallCardProps {
  article: Article;
  isRightAligned?: boolean;
}

const SmallCard: React.FC<SmallCardProps> = ({ article, isRightAligned }) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div
        className={`flex gap-3 p-2 bg-white rounded-md hover:shadow-md transition cursor-pointer ${
          isRightAligned ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <p className="text-gray-900 text-sm font-medium leading-snug">
          {article.title}
        </p>
      </div>
    </Link>
  );
};

export default SmallCard;
