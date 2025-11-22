"use client";
import MainHeadline from "@/components/headlines/MainHeadline";
import SmallNewsCard from "@/components/headlines/SmallNewsCard";
import AdCard from "@/components/headlines/AdCard";
import PopularListItem from "@/components/headlines/PopularListItem";

import {
  topHeadline,
  leftColumnNews,
  rightSidebarList,
} from "@/data/Data";
import AdvertisementBanner from "./header/AdvertisementBanner";

export default function HeaderSection() {
  return (
    <section className="py-5 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="bg-white  p-4">
          <h2 className="text-xl font-bold mb-3">সর্বশেষ খবর</h2>

          {leftColumnNews.map((news, i) => (
            <SmallNewsCard key={i} news={news} isTop={i === 0} />
          ))}
        </div>

        {/* Center */}
        <div className="md:col-span-2">
          <MainHeadline headlines={topHeadline} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Future "center block" components here */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white rounded-xl shadow-xl p-4">
          <AdCard
            ad={{
              title: "ঈদ অফার",
              details: "বিশেষ ছাড়!",
              imageUrl: "/ads/image.png",
            }}
          />

          <h2 className="text-xl font-bold mt-4 mb-2">জনপ্রিয় সংবাদ</h2>

          {rightSidebarList.map((item, i) => (
            <PopularListItem key={i} item={item} />
          ))}
        </div>
      </div>
      <AdvertisementBanner/>
    </section>
  );
}
