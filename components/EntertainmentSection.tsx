"use client";

import React, { useEffect, useState } from "react";
import SmallCard from "@/components/entertainment/SmallCard";
import MainCard from "@/components/entertainment/MainCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./AdvertisementBanner";
import { INews } from "@/types/news";

const EntertainmentSection: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/news?category=বিনোদন");
        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();

        if (data.success && data.data.length > 0) {
          setNews(data.data);
        } else {
          setNews([]);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!news.length) return <p className="text-center py-10">No news found.</p>;

  const mainArticle = news[0];
  const leftArticles = news.slice(1, 4);
  const rightArticles = news.slice(4, 7);

  return (
    <section className="bg-[#19363D] py-10">
      <div className="container mx-auto px-4">
        <SectionHeader title="বিনোদন" className="text-white" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* LEFT COLUMN */}
          <ul className="flex flex-col gap-4">
            {leftArticles.map((article) => (
              <li key={article._id}>
                <SmallCard
                  article={{
                    id: article._id, // ✅ Add id for dynamic routing
                    title: article.title,
                    image: article.imageSrc || "/placeholder.png",
                    summary: article.summary,
                  }}
                />
              </li>
            ))}
          </ul>

          {/* CENTER MAIN ARTICLE */}
          {mainArticle && (
            <div className="col-span-1 md:col-span-2">
              <MainCard
                article={{
                  id: mainArticle._id, // ✅ Pass id
                  title: mainArticle.title,
                  image: mainArticle.imageSrc || "/placeholder.png",
                  summary: mainArticle.summary,
                }}
              />
            </div>
          )}

          {/* RIGHT COLUMN */}
          <ul className="flex flex-col gap-4">
            {rightArticles.map((article) => (
              <li key={article._id}>
                <SmallCard
                  article={{
                    id: article._id, // ✅ Pass id for dynamic routing
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
      <AdvertisementBanner />
    </section>
  );
};

export default EntertainmentSection;
