"use client";

import React from "react";
import HeroCard from "@/components/bangladesh/HeroCard";
import StandardArticleCard from "@/components/bangladesh/StandardArticleCard";
import MostReadItemComponent from "@/components/bangladesh/MostReadItemComponent";
import SectionHeader from "./ui/SectionHeader";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";
import FullScreenLoading from "./ui/FullScreenLoading";
const BangladeshSection: React.FC = () => {
  const { data, isLoading, error } = useGetNewsQuery("বাংলাদেশ");

  const news = data?.data || [];

  if (error)
    return (
      <p className="text-center py-10 text-red-600">Failed to load news.</p>
    );
  if (!news.length) return <p className="text-center py-10">No news found.</p>;

  // Structure
  const heroArticle = news[0];
  const mainContentArticles = news.slice(1, 4);

  // Convert Most Read
  const mostRead = news.slice(0, 6).map((item) => ({
    id: item._id,
    title: item.title,
    authorImage: item.imageSrc || "/placeholder.png",
  }));

  return (
    <>
    
      
    <section className="bg-white min-h-screen">
      <div className="p-4 sm:p-8 container mx-auto">
        <SectionHeader title="বাংলাদেশ" />
        {isLoading && <FullScreenLoading />}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12">
          {/* LEFT SIDE */}
          <div className="md:col-span-2 lg:col-span-9 flex flex-col gap-6">
            {/* HERO SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <HeroCard
                  article={{
                    id: heroArticle._id,
                    title: heroArticle.title,
                    image: heroArticle.imageSrc || "/placeholder.png",
                    summary: heroArticle.summary,
                  }}
                />
              </div>
            </div>

            {/* STANDARD ARTICLES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainContentArticles.map((article) => (
                <StandardArticleCard
                  key={article._id}
                  article={{
                    id: article._id,
                    title: article.title,
                    image: article.imageSrc || "/placeholder.png",
                    summary: article.summary,
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR → MOST READ */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              {mostRead.map((item) => (
                <MostReadItemComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BangladeshSection;
