"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import RelatedNewsSection from "@/components/RelatedNewsSection";
import { useGetNewsByIdQuery } from "@/app/redux/features/news/newsApi";

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  const rawId = params.id;
  const newsId = Array.isArray(rawId) ? rawId[0] : rawId;

  const { data: news, isLoading, error } = useGetNewsByIdQuery(newsId ?? "");

  if (!newsId)
    return <p className="text-center py-10 text-red-600">News ID not found</p>;
  if (isLoading) return <div className="container mx-auto py-10">Loading </div>;
  if (error || !news)
    return <p className="text-center py-10 text-red-600">News not found</p>;

  return (
    <>
      <div className="container mx-auto px-4 py-10 mt-[80px] space-y-6">
        {news.category && (
          <p className="text-gray-500 mt-4">
            বিভাগ: <span className="font-semibold">{news.category}</span>
          </p>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          {news.title}
        </h1>

        {news.imageSrc && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={news.imageSrc}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        {news.author && (
          <p className="text-gray-500">
            লেখক: <span className="font-semibold">{news.author}</span>
          </p>
        )}

        {news.publishedAt && (
          <p className="text-gray-400 text-sm">
            প্রকাশের তারিখ:{" "}
            {new Date(news.publishedAt).toLocaleDateString("bn-BD")}
          </p>
        )}
      </div>
      <RelatedNewsSection category={news.category} currentNewsId={news._id} />
    </>
  );
};

export default NewsDetailPage;
