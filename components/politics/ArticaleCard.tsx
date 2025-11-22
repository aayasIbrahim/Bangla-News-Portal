
import Image from "next/image";
interface Article {
  id: number;
  headline: string;
  imageUrl: string;
  link: string;
}

const ArticleCard: React.FC<Article> = ({ headline, imageUrl, link }) => (
  // Note: For the last two articles in the image, the layout switches to vertical, 
  // but for a consistent grid, we keep this horizontal card format for now.
  <a href={link} className="flex items-start space-x-4 p-3 hover:bg-gray-50 transition duration-150 border-b border-gray-100">
    {/* Image Container - Using a placeholder for visual structure */}
    <div className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded overflow-hidden">
      {/* In a real app, use <Image /> from 'next/image' */}
      <Image
        src={imageUrl}
        alt={headline}
        height={300}
        width={300}
        className=" object-cover"
        
      />
    </div>
    
    {/* Text Content */}
    <div className="flex-grow">
      <h3 className="text-sm font-semibold text-gray-800 leading-snug">
        {headline}
      </h3>
    </div>
  </a>
);
export default ArticleCard