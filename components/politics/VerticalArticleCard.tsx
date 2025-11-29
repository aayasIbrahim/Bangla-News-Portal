import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  summary: string;
  image: string;
}
const VerticalArticleCard: React.FC<Article> = ({id, image, summary,title }) => (
  <Link
      href={`/news/${id}`}
    className="block group border border-gray-200 p-4 rounded-lg hover:shadow-xl transition duration-300 bg-white"
  >
    {/* Image on top */}
    <div className="relative w-full h-32 bg-gray-100 rounded overflow-hidden mb-3">
      <Image
        width={500}
        height={500}
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
    </div>

    {/* Text Content */}
    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-red-600 transition">
      {title}
    </h3>
    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{summary}</p>
  </Link>
);

export default VerticalArticleCard;
