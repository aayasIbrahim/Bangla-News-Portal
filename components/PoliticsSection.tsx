"use client";

import React from "react";
import ArticleCard from "./politics/ArticaleCard";
import FeaturedArticle from "./politics/FeaturedArticle";
import VerticalArticleCard from "./politics/VerticalArticleCard";
import AdCard from "./headlines/AdCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./AdvertisementBanner";
import FullScreenLoading from "./ui/FullScreenLoading";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";



const PoliticsSection: React.FC = () => {
  // RTK Query → Fetch news based on category "রাজনীতি"
  const { data, isLoading, error } = useGetNewsQuery("রাজনীতি");

  const news = data?.data || [];


  if (error) return <p className="text-center py-10 text-red-500">Failed to load politics news.</p>;
  if (!news.length) return <p className="text-center py-10">No Politics News Found.</p>;

  // Structure
  const featuredArticle = news[0];
  const miniArticles = news.slice(1);

  // Top 2 horizontal cards
  const leftColumnArticles = miniArticles.slice(0, 2);

  // Bottom 2 vertical cards
  const bottomColumnArticles = miniArticles.slice(2, 4);

  return (
   <>
  
    <div className="container mx-auto px-4 py-6 font-sans bg-white min-h-screen">

      <SectionHeader title="রাজনীতি" />
        {isLoading && <FullScreenLoading/>}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-3">

          {/* FEATURED HERO ARTICLE */}
          <FeaturedArticle
            id={featuredArticle._id}
            title={featuredArticle.title}
            summary={featuredArticle.summary}
            image={featuredArticle.imageSrc || "/placeholder.png"}
          />

          {/* TOP ROW - 2 horizontal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {leftColumnArticles.map((article) => (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                summary={article.summary}
                image={article.imageSrc || "/placeholder.png"}
              />
            ))}
          </div>

          {/* BOTTOM ROW - 2 vertical cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mt-6">
            {bottomColumnArticles.map((article) => (
              <VerticalArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                summary={article.summary}
                image={article.imageSrc || "/placeholder.png"}
              />
            ))}
          </div>
        </div>

        {/* SIDEBAR AD */}
        <AdCard
          ad={{
            title: "ঈদ অফার",
            details: "বিশেষ ছাড়!",
            imageUrl: "/ads/image.png",
          }}
        />
      </div>

      <AdvertisementBanner />
    </div></>
  );
};

export default PoliticsSection;
