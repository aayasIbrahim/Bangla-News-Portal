"use client";

import React from "react";
import SmallCard from "@/components/entertainment/SmallCard";
import MainCard from "@/components/entertainment/MainCard";
import SectionHeader from "./ui/SectionHeader";
// import AdvertisementBanner from "./AdvertisementBanner";
import FullScreenLoading from "./ui/FullScreenLoading";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";


const EntertainmentSection: React.FC = () => {
  // RTK Query call
  const { data, isLoading, error } = useGetNewsQuery("বিনোদন");

  const news = data?.data || [];

  if (error)
    return (
      <p className="text-center py-10 text-red-400">Failed to load news.</p>
    );
  if (!news.length)
    return <p className="text-center py-10 text-white">No news found.</p>;

  const mainArticle = news[0];
  const leftArticles = news.slice(1, 4);
  const rightArticles = news.slice(4, 7);

  return (
    <>
     

      <section className="bg-[#19363D] py-10">
        <div className="container mx-auto px-4">
          {isLoading && <FullScreenLoading />}
          {/* Section Title */}
          <SectionHeader title="বিনোদন" className="text-white" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            {/* LEFT COLUMN */}
            <ul className="flex flex-col gap-4">
              {leftArticles.map((article) => (
                <li key={article._id}>
                  <SmallCard
                    article={{
                      id: article._id,
                      title: article.title,
                      image: article.imageSrc || "/placeholder.png",
                      summary: article.summary,
                    }}
                  />
                </li>
              ))}
            </ul>

            {/* CENTER MAIN ARTICLE */}
            <div className="col-span-1 md:col-span-2">
              {mainArticle && (
                <MainCard
                  article={{
                    id: mainArticle._id,
                    title: mainArticle.title,
                    image: mainArticle.imageSrc || "/placeholder.png",
                    summary: mainArticle.summary,
                  }}
                />
              )}
            </div>

            {/* RIGHT COLUMN */}
            <ul className="flex flex-col gap-4">
              {rightArticles.map((article) => (
                <li key={article._id}>
                  <SmallCard
                    article={{
                      id: article._id,
                      title: article.title,
                      image: article.imageSrc || "/placeholder.png",
                      summary: article.summary,
                    }}
                    isRightAligned={true}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        {/* <AdvertisementBanner /> */}
      </section>
    </>
  );
};

export default EntertainmentSection;
