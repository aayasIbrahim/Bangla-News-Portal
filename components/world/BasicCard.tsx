import Image from "next/image";

export interface Article {
  id: number | string; // Using string for IDs now, common with CMS data
  title: string;
  image: string;
  summary?: string; // Optional summary for larger cards
}

interface BasicCardProps {
  article: Article;
}

const BasicCard: React.FC<BasicCardProps> = ({ article }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 hover:bg-gray-100 transition duration-150 cursor-pointer ">
      <div className="h-30 mb-3 ">
        <Image src={article.image} alt={article.title} width={302} height={280} className="w-full h-full object-cover" />
      </div>
      <p className="text-black text-base font-semibold leading-tight">
        {article.title}
      </p>
    </div>
  );
};

export default BasicCard;