import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  summary: string;
  image: string;
}

const ArticleCard: React.FC<Article> = ({ id, title, summary, image }) => (
  <Link
    href={`/news/${id}`} // ✅ Use id for dynamic routing
    className="flex items-start space-x-4 p-3 hover:bg-gray-50 transition duration-150 border-b border-gray-100"
  >
    {/* Image Container */}
    <div className="flex-shrink-0 w-24 h-16 rounded overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200} // Adjusted for better aspect ratio
        className="object-cover w-full h-full"
      />
    </div>

    {/* Text Content */}
    <div className="flex-grow">
      <h3 className="text-sm font-semibold text-gray-800 leading-snug">
        {title}
      </h3>
      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
        {summary}
      </p>
    </div>
  </Link>
);

export default ArticleCard;
