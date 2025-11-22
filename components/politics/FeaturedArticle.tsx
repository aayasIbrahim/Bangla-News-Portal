import Image from "next/image";

interface Article {
  id: number;
  headline: string;
  imageUrl: string;
  link: string;
}


const FeaturedArticle: React.FC<Article> = ({ headline, imageUrl, link }) => {
  return (
    <a href={link} className="block group mb-6 relative">
      {/* Image Container */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={headline}
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
          {headline}
        </h2>
      </div>
    </a>
  );
};

export default FeaturedArticle;
