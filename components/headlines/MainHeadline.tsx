"use client";
import Image from "next/image";

interface Headline {
  id: number;
  imageUrl: string;
  title: string;
  summary: string;
}

interface MainHeadlineProps {
  headlines: Headline[];
}

// ------------------------------------------------------------------
// Small Card (Other Headlines)
// ------------------------------------------------------------------
const HeadlineCard: React.FC<{ headline: Headline }> = ({ headline }) => {
  return (
    <div className=" p-6 border-b py-3 flex gap-3 items-start w-full">
      
      {/* Image */}
      <div className="w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded overflow-hidden cursor-pointer">
        <Image
          src={headline.imageUrl}
          alt={headline.title}
          width={120}
          height={90}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col w-full">
        <h2 className="text-[15px] sm:text-lg font-semibold leading-snug cursor-pointer">
          {headline.title}
        </h2>

        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 sm:line-clamp-3 cursor-pointer">
          {headline.summary}
        </p>
      </div>
    </div>
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
      {/* ------------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------ */}
      <div className="relative bg-white shadow-xl rounded-xl overflow-hidden mb-6">

        <Image
          src={hero.imageUrl}
          alt={hero.title}
          width={1200}
          height={600}
          className="w-full h-56 sm:h-72 md:h-96 object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-0 p-3 sm:p-5 text-white">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-tight cursor-pointer hover:text-red-500">
            {hero.title}
          </h1>

          <p className="text-[11px] sm:text-sm md:text-base mt-2 opacity-90 line-clamp-3">
            {hero.summary}
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* OTHER HEADLINES */}
      {/* ------------------------------------------------------------ */}
      {otherHeadlines.map((headline) => (
        <HeadlineCard key={headline.id} headline={headline} />
      ))}
    </>
  );
};

export default MainHeadline;
