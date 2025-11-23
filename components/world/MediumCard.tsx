import Image from "next/image";

export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string;
}

interface MediumCardProps {
  article: Article;
}

const MediumCard: React.FC<MediumCardProps> = ({ article }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col md:flex-row">
      
      {/* Image */}
      <div className="w-full  md:w-32 h-64 md:h-[150px] flex-shrink-0 relative">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-3 flex-1 flex flex-col justify-center">
        <p className="text-black font-semibold text-base md:text-lg leading-snug">
          {article.title}
        </p>
        {article.summary && (
          <p className="text-gray-600 text-sm mt-1 line-clamp-3">
            {article.summary}
          </p>
        )}
      </div>
    </li>
  );
};

export default MediumCard;
