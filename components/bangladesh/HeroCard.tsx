// components/HeroCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Re-use Article type
export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string;
}

interface HeroCardProps {
  article: Article;
}

const HeroCard: React.FC<HeroCardProps> = ({ article }) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="relative w-full h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg cursor-pointer">
        {/* Hero Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Gradient overlay + title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex items-end">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
