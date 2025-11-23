import Image from "next/image";

export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string;
}

interface SideSmallCardProps {
  article: Article;
}

const SideSmallCard: React.FC<SideSmallCardProps> = ({ article }) => {
  return (
    <div className="bg-white border border-gray-200 flex flex-row-reverse items-center gap-2 h-28 hover:bg-gray-100 transition duration-150 cursor-pointer rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative w-28 h-full flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="p-2 flex-grow text-right">
        <p className="text-black text-sm font-medium leading-snug truncateline-clamp-1">
          {article.title}
        </p>
      </div>
    </div>
  );
};

export default SideSmallCard;
