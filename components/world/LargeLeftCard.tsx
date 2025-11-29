import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string;
}

interface LargeLeftCardProps {
  article: Article;
}

const LargeLeftCard: React.FC<LargeLeftCardProps> = ({ article }) => {
  return (
    <Link
      href={`/news/${article.id}`}
      className="block bg-white border border-gray-200 relative hover:opacity-90 transition duration-300 cursor-pointer h-auto rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
    >
      <div className="w-full h-64 md:h-full relative">
        <Image
          src={article.image || "/placeholder.png"}
          width={428}
          height={584}
          alt={article.title}
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-center gap-3">
        <h2 className="text-2xl font-semibold leading-tight line-clamp-2">
          {article.title}
        </h2>

        {article.summary && (
          <p className="text-black text-base line-clamp-3">{article.summary}</p>
        )}
      </div>
    </Link>
  );
};

export default LargeLeftCard;
