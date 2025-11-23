// components/StandardArticleCard.tsx
import React from 'react';
import { Article } from '@/components/BangladeshSection'; // Adjust path

interface StandardArticleCardProps {
  article: Article;
}

const StandardArticleCard: React.FC<StandardArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden h-full flex flex-col hover:shadow-md transition duration-200">
      <div className="relative w-full h-40 flex-shrink-0">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
      </div>
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
  );
};

export default StandardArticleCard;