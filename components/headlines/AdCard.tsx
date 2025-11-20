"use client";
import Image from "next/image";

interface AdCardProps {
  ad: {
    imageUrl: string;
    title: string;
    details: string;
  };
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <div className="p-4 bg-white mb-6 hover:shadow-md transition ">
      <p className="text-[10px] sm:text-xs text-center text-gray-400">
        Advertisement
      </p>

      <div className="flex justify-center">
        <Image
          src={ad.imageUrl}
          alt={ad.title}
          width={400}
          height={300}
          className="rounded-lg mt-2 mb-3 w-full h-auto object-cover"
        />
      </div>

      <h4 className="text-center text-base sm:text-lg font-semibold">
        {ad.title}
      </h4>

      <p className="text-center text-xs sm:text-sm text-gray-500 px-1 sm:px-4">
        {ad.details}
      </p>
    </div>
  );
};

export default AdCard;
