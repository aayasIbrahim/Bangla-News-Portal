"use client";

import React from "react";
import MainArticle from "./NationalNewsSection/MainArticle";
import SidebarNewsCard from "./NationalNewsSection/SidebarNewsCard";
// import { SidebarAds } from './SidebarAds';
import { NationalNewsdata, NationalNewsdataAritcalData } from "@/data/Data";
import AdCard from "./headlines/AdCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./header/AdvertisementBanner";

const NationalNewsSection = () => {
  return (
    <section>
      <div className="container  mx-auto p-4 sm:p-6 font-sans min-h-screen">
       <SectionHeader title="জাতীয়"/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MainArticle {...NationalNewsdataAritcalData} />

          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
              {NationalNewsdata.map((item) => (
                <SidebarNewsCard
                  key={item.id}
                  title={item.title}
                  imageSrc={item.imageSrc}
                />
              ))}
            </div>

            <AdCard
              ad={{
                title: "ঈদ অফার",
                details: "বিশেষ ছাড়!",
                imageUrl: "/ads/image.png",
              }}
            ></AdCard>
          </div>
        </div>
        <AdvertisementBanner/>
      </div>
    </section>
  );
};

export default NationalNewsSection;
