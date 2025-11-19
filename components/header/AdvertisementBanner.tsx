"use client";

import React, { useState } from "react";
import Image from "next/image";

const AdvertisementBanner: React.FC = () => {
  const adImageUrl = "/ads/image 2.png"; // Local or public path
  const adLinkUrl = "https://www.waltonbd.com/"; // Click URL
  const altText = "Walton Smart Fridge Advertisement";

  const [visible, setVisible] = useState<boolean>(true);
  const [closing, setClosing] = useState<boolean>(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 300); // fade-out duration
  };

  if (!visible) return null;

  return (
    <div
      className={`w-full my-4 flex justify-center relative transition-opacity duration-300  border-b border-gray-500  ${
        closing ? "opacity-0" : "opacity-100"
      }`}
      style={{ fontFamily: `"Noto Sans Bengali", "Inter", sans-serif` }}
    >
      <a
        href={adLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-full overflow-hidden"
        aria-label={`Advertisement: ${altText}`}
      >
        <Image
          src={adImageUrl}
          alt={altText}
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
