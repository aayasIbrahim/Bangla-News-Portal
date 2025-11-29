"use client";
import Image from "next/image";
import Link from "next/link";
import { INews } from "@/types/news"; // তোমার INews type import করো

interface MainHeadlineProps {
  headlines: INews[];
}

// ------------------------------------------------------------------
// Small Card (Other Headlines)
// ------------------------------------------------------------------
const HeadlineCard: React.FC<{ headline: INews }> = ({ headline }) => {
  return (
    <Link
      href={`/news/${headline._id}`}
      className="p-6 border-b py-3 flex gap-3 items-start w-full hover:bg-gray-50 transition duration-150"
    >
      {/* Image */}
      <div className="w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded overflow-hidden">
        <Image
          src={headline.imageSrc || "/placeholder.png"}
          alt={headline.title}
          width={120}
          height={90}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col w-full">
        <h2 className="text-[15px] sm:text-lg font-semibold leading-snug hover:text-red-500">
          {headline.title}
        </h2>

        {headline.summary && (
          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 sm:line-clamp-3">
            {headline.summary}
          </p>
        )}
      </div>
    </Link>
  );
};

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------
const MainHeadline: React.FC<MainHeadlineProps> = ({ headlines }) => {
  if (!headlines || headlines.length === 0) return <p>No headlines found.</p>;

  const [hero, ...otherHeadlines] = headlines;

  return (
    <>
      {/* HERO HEADLINE */}
      <Link href={`/news/${hero._id}`} className="relative bg-white shadow-xl rounded-xl overflow-hidden mb-6 block group">
        <Image
          src={hero.imageSrc || "/placeholder.png"}
          alt={hero.title}
          width={1200}
          height={600}
          className="w-full h-56 sm:h-72 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-0 p-3 sm:p-5 text-white">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-tight cursor-pointer group-hover:text-red-500 transition-colors duration-200">
            {hero.title}
          </h1>

          {hero.summary && (
            <p className="text-[11px] sm:text-sm md:text-base mt-2 opacity-90 line-clamp-3">
              {hero.summary}
            </p>
          )}
        </div>
      </Link>

      {/* OTHER HEADLINES */}
      {otherHeadlines.map((headline) => (
        <HeadlineCard key={headline._id} headline={headline} />
      ))}
    </>
  );
};

export default MainHeadline;
