"use client";
import React from "react";
import Image from "next/image";

interface AdCardProps {
  ad: {
    _id?: string;
    title: string;
    details: string;
    imageUrl: string;
    link?: string;
  };
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <a
      href={ad.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition p-2 bg-white"
    >
      <Image
        src={ad.imageUrl}
        alt={ad.title}
        width={400}
        height={200}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-sm">{ad.title}</h3>
      <p className="text-xs text-gray-600">{ad.details}</p>
    </a>
  );
};

export default AdCard;
