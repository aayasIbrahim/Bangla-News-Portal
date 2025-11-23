// components/HeroCard.tsx
import React from 'react';
// types/article.ts (re-using and extending if necessary)

export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string; // For articles with more text
}

// For the right sidebar's "সর্বাধিক পঠিত" (Most Read) section
export interface MostReadItem {
  id: number | string;
  title: string;
  authorImage: string; // Image of the author/person in the thumbnail
}

interface HeroCardProps {
  article: Article;
}

const HeroCard: React.FC<HeroCardProps> = ({ article }) => {
  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex items-end">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {article.title}
        </h2>
      </div>
    </div>
  );
};

export default HeroCard;