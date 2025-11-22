import Image from "next/image";

interface Article {
  id: number;
  headline: string;
  imageUrl: string;
  link: string;
}
const VerticalArticleCard: React.FC<Article> = ({
  headline,
  imageUrl,
  link,
}) => (
  <a
    href={link}
    className="block group border border-gray-200 p-4 rounded-lg hover:shadow-xl transition duration-300 bg-white"
  >
    {/* Image on top */}
    <div className="relative w-full h-32 bg-gray-100 rounded overflow-hidden mb-3">
      <Image
        width={500}
        height={500}
        src={imageUrl}
        alt={headline}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
    </div>

    {/* Text Content */}
    <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-red-600 transition">
      {headline}
    </h3>
    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
      {/* Placeholder description for vertical cards */}
      বরাবরের মতো এবারও জাতীয় ঐক্যফ্রন্টের ব্যানারে নির্বাচনকালীন সরকারসহ
      বিভিন্ন ইস্যুতে পাঁচ দফা দাবি জানিয়েছেন নেতারা।
    </p>
  </a>
);

export default VerticalArticleCard;