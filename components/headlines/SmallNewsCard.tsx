"use client";

import Image from "next/image";
import Link from "next/link";
import { INews } from "@/types/news"; // Import your INews type

interface SmallNewsCardProps {
  news: INews;
  isTop?: boolean;
}

const SmallNewsCard: React.FC<SmallNewsCardProps> = ({ news, isTop = false }) => {
  return (
    <Link
      href={`/news/${news._id}`}
      className={`block border-r border-gray-500 hover:bg-gray-50 transition ${isTop ? "pt-0" : ""}`}
    >
      <div className="p-4">
        {/* Image */}
        <div className="w-full h-40 relative">
          <Image
            src={news.imageSrc || "/placeholder.png"} // fallback image
            alt={news.title}
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2 hover:text-red-600 cursor-pointer">
          {news.title}
        </h2>

        {/* Summary */}
        {news.summary && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-3">
            {news.summary}
          </p>
        )}
      </div>
    </Link>
  );
};

export default SmallNewsCard;
