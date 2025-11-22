"use client";

import React from "react";
import MainArticle from "./NationalNewsSection/MainArticle";
import SidebarNewsCard from "./NationalNewsSection/SidebarNewsCard";
// import { SidebarAds } from './SidebarAds';
import { NationalNewsdata, NationalNewsdataAritcalData } from "@/data/Data";
import AdCard from "./headlines/AdCard";

const NationalNewsSection = () => {
  return (
    <section>
      <div className="container  mx-auto p-4 sm:p-6 font-sans min-h-screen">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-600 pb-2 mb-6 flex items-center">
          জাতীয়
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 text-red-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </h2>

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
      </div>
    </section>
  );
};

export default NationalNewsSection;
