import Image from "next/image";
import Link from "next/link";
interface Article {
  id:string|number
  title: string;
  summary: string;
  image: string;
}

const FeaturedArticle: React.FC<Article> = ({id, title, image }) => {
  return (
    <Link href={`/news/${id}`} className="block group mb-6 relative">
      {/* Image Container */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="/placeholder.png" // optional, for Next.js blur effect
        />
      </div>

      {/* Headline Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
        <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
