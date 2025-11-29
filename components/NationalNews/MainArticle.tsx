import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MainArticleProps {
  id: string | number;       // Add id for dynamic routing
  title: string;
  summary: string;
  imageSrc: string;
}

const MainArticle: React.FC<MainArticleProps> = ({ id, title, summary, imageSrc }) => (
  <Link href={`/news/${id}`}>
    <div className="lg:col-span-2 bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-auto object-cover"
        width={593} // Provide width for next/image
        height={410} // Provide height for next/image
      />
      <div className="p-6">
        <h3 className="font-solaiman font-normal not-italic text-[34px] leading-[100%] tracking-[0%]">
          {title}
        </h3>
        <p className="font-solaiman font-normal not-italic text-[20px] leading-[29px] tracking-[0%] text-gray-600 mt-5 line-clamp-2">
          {summary}
        </p>
        <span className="mt-4 text-sm text-red-600 hover:underline font-semibold">
          বিস্তারিত পড়ুন...
        </span>
      </div>
    </div>
  </Link>
);

export default MainArticle;
