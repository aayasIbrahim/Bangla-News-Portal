"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGetAdsQuery, } from "@/app/redux/features/ads/adsApi";
import { Ad } from "@/types/ads";


const AdvertisementBanner: React.FC = () => {
  const { data: ads, isLoading, isError } = useGetAdsQuery();
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300);
  };

  if (!visible || isLoading || isError || !ads || ads.length === 0) return null;

  // ধরুন প্রথম ad দেখাবেন
  const ad: Ad = ads[0];

  return (
    <div
      className={`w-full my-4 flex justify-center relative transition-opacity duration-300 border-b border-gray-500 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ fontFamily: `"Noto Sans Bengali", "Inter", sans-serif` }}
    >
      <a
        href={ad.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-full overflow-hidden"
        aria-label={`Advertisement: ${ad.title}`}
      >
        <Image
          src={ad.image}
          alt={ad.title}
          width={970}
          height={130}
          className="w-full max-w-[970px] h-auto sm:h-[80px] md:h-[100px] lg:h-[120px] object-cover mb-5 rounded-md shadow-sm"
        />
      </a>

      <button
        onClick={handleClose}
        className="absolute top-2 right-2 sm:right-[20%] bg-black/50 text-white rounded-full px-2 py-1 text-sm hover:bg-black/70 transition"
        aria-label="Close Advertisement"
      >
        ✕
      </button>
    </div>
  );
};

export default AdvertisementBanner;
