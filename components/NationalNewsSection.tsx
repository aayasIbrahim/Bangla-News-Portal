"use client";

import React from "react";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";
import SectionHeader from "./ui/SectionHeader";
import MainArticle from "./NationalNews/MainArticle";
import SidebarNewsCard from "./NationalNews/SidebarNewsCard";
import AdCard from "./headlines/AdCard";
import AdvertisementBanner from "./AdvertisementBanner";
import { INews } from "@/types/news";


const NationalNewsSection: React.FC = () => {
  const { data, isLoading, error } = useGetNewsQuery("জাতীয়"); // category "জাতীয়"

  // Safety checks
  if (isLoading) return <p className="text-center p-10">Loading national news...</p>;
  if (error) return <p className="text-center p-10 text-red-600">Error loading national news</p>;
  if (!data || !data.data.length) return <p className="text-center p-10">No national news found.</p>;

  const news: INews[] = data.data;
  const [main, ...sidebarNews] = news;

  if (!main) return <p className="text-center p-10">Data error: Main article missing.</p>;

  return (
    <section className="container mx-auto p-4 sm:p-6 font-sans min-h-screen">
      <SectionHeader title="জাতীয়" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article */}
        <MainArticle {...main}   id={main._id}/>

        {/* Sidebar + Ads */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
            {sidebarNews.map((item) => (
              <SidebarNewsCard key={item._id} {...item} />
            ))}
          </div>

          <AdCard ad={{ title: "ঈদ অফার", details: "বিশেষ ছাড়!", imageUrl: "/ads/image.png" }} />
        </div>
      </div>

      <AdvertisementBanner />
    </section>
  );
};

export default NationalNewsSection;
