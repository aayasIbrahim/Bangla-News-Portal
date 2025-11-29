// components/CommerceStandardCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string;
}

interface CommerceStandardCardProps {
  article: Article;
}

const CommerceStandardCard: React.FC<CommerceStandardCardProps> = ({ article }) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition duration-200 cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-32 sm:h-40 flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            width={400}      // Set your desired width
            height={240}     // Set your desired height
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="p-3">
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CommerceStandardCard;
