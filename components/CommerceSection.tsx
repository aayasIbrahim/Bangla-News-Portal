"use client";

import React from "react";
import CommerceMainCard from "@/components/commerce/CommerceMainCard";
import CommerceStandardCard from "@/components/commerce/CommerceStandardCard";
import SectionHeader from "./ui/SectionHeader";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";
import FullScreenLoading from "./ui/FullScreenLoading";
import DynamicTitleFavicon from "./DynamicTitleFavicon";

const CommerceSection: React.FC = () => {
  // RTK Query call
  const { data, isLoading, error } = useGetNewsQuery("বাণিজ্য");

  const news = data?.data || [];

  if (error)
    return (
      <p className="text-center py-10 text-red-600">Failed to load news.</p>
    );
  if (!news.length) return <p className="text-center py-10">No news found.</p>;

  const mainArticle = news[0];
  const rightArticles = news.slice(1);

  return (
    <>
      <DynamicTitleFavicon title="বাণিজ্য" faviconUrl="/favicon.ico" />
      <section className="bg-white min-h-screen">
        <div className="p-4 sm:p-8 container mx-auto">
          {isLoading && <FullScreenLoading />}

          {/* Section Header */}
          <SectionHeader title="বাণিজ্য" />

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {/* Left big card */}
            <div className="lg:col-span-2 lg:row-span-2">
              {mainArticle && (
                <CommerceMainCard
                  article={{
                    id: mainArticle._id,
                    title: mainArticle.title,
                    image: mainArticle.imageSrc || "/placeholder.png",
                    summary: mainArticle.summary,
                  }}
                />
              )}
            </div>

            {/* Right side articles */}
            {rightArticles.map((article) => (
              <div key={article._id} className="lg:col-span-2">
                <CommerceStandardCard
                  article={{
                    id: article._id,
                    title: article.title,
                    image: article.imageSrc || "/placeholder.png",
                    summary: article.summary,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommerceSection;
