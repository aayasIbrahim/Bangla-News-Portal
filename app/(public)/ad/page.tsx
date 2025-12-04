"use client";

import React from "react";
import { useGetAdsQuery } from "@/app/redux/features/ads/adsApi"; // আপনার RTK Query path ঠিক করুন
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
// import{Ad}

interface AdItem {
  _id: string;
  title: string;
  image: string;
  link: string;
  position: string; // top-banner, bottom-banner ইত্যাদি
}

const Advertisement: React.FC = () => {
  const { data: ads, isLoading, isError } = useGetAdsQuery(undefined);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">বিজ্ঞাপন</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <LoadingSkeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !ads) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center text-red-600">
        <h1 className="text-3xl font-bold mb-4">বিজ্ঞাপন</h1>
        <p>দুঃখিত! বিজ্ঞাপন লোড করা যায়নি।</p>
      </div>
    );
  }

  // আলাদা position অনুযায়ী banner filter
  const topBanners = ads.filter((ad: AdItem) => ad.position === "top-banner");
  const bottomBanners = ads.filter((ad: AdItem) => ad.position === "bottom-banner");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">বিজ্ঞাপন</h1>

      {/* Top Banner */}
      {topBanners.length > 0 && (
        <div className="mb-8">
          {topBanners.map((ad) => (
            <a
              key={ad._id}
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{ad.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Bottom Banner */}
      {bottomBanners.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bottomBanners.map((ad) => (
            <a
              key={ad._id}
              href={ad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <img src={ad.image} alt={ad.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{ad.title}</h2>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* যোগাযোগের অংশ */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">আপনার বিজ্ঞাপন দিন</h2>
        <p className="text-gray-700 mb-4">
          আপনি চাইলে আপনার ব্যবসা বা প্রোডাক্ট আমাদের ওয়েবসাইটে বিজ্ঞাপন দিতে পারেন। 
          আমাদের সাথে যোগাযোগ করুন:
        </p>
        <p className="text-blue-600 underline cursor-pointer">
          ইমেইল:   tsbvisionnews.net@gmail.com
        </p>
        <p className="text-blue-600 underline cursor-pointer">
          ফোন:    01929450836
        </p>
      </section>
    </div>
  );
};

export default Advertisement;
