import React from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react'; // Import type for lucide icons

interface SidebarNewsCardProps {
  title: string;
  imageSrc: string;
  Icon?: LucideIcon; // Optional icon prop
}

const SidebarNewsCard: React.FC<SidebarNewsCardProps> = ({ title, imageSrc, Icon }) => (
  <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 transition duration-150 rounded-lg cursor-pointer">
    <Image
      src={imageSrc}
      alt={title}
      height={100}
      width={100}
      className="w-24 h-16 object-cover rounded-md flex-shrink-0"
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.currentTarget;
        target.onerror = null;
        target.src = "https://placehold.co/100x70/ccc/000?text=News";
      }}
    />
    <div className="flex-grow flex items-center">
      {Icon && <Icon className="w-4 h-4 text-red-500 mr-2" />}
      <p className="font-solaiman font-normal text-[18px] leading-[1.2] tracking-normal line-clamp-2 hover:text-blue-600">{title}</p>
    </div>
  </div>
);

export default SidebarNewsCard;
