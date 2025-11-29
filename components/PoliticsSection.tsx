"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "./politics/ArticaleCard";
import FeaturedArticle from "./politics/FeaturedArticle";
import VerticalArticleCard from "./politics/VerticalArticleCard";
import AdCard from "./headlines/AdCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./AdvertisementBanner";
import { INews } from "@/types/news";

const PoliticsSection: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPoliticsNews = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/news?category=রাজনীতি");
        const data = await res.json();

        if (data.success) {
          setNews(data.data);
        }
      } catch (error) {
        console.error("Politics API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoliticsNews();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!news.length) return <p className="text-center py-10">No Politics News Found.</p>;

  // Structure:
  const featuredArticle = news[0];        // Hero Article
  const miniArticles = news.slice(1);     // Rest mini cards

  // Top 2 → horizontal ArticleCard
  const leftColumnArticles = miniArticles.slice(0, 2);

  // Bottom 2 → vertical ArticleCard
  const bottomColumnArticles = miniArticles.slice(2, 4);

  return (
    <div className="container mx-auto px-4 py-6 font-sans bg-white min-h-screen">
      
      <SectionHeader title="রাজনীতি" />

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
    </div>
  );
};

export default PoliticsSection;
