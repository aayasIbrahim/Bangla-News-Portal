"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Next 13 app router hook
import { INews } from "@/types/news"; // Your news type

interface ICategory {
  _id: string;
  name: string;
  slug: string;
}

export default function CategoryPage() {
  const params = useParams(); // get params.slug
  const [category, setCategory] = useState<ICategory | null>(null);
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndNews = async () => {
      setLoading(true);
      try {
        // 1️⃣ Fetch category by slug
        const catRes = await fetch(`/api/category/${params.slug}`);
        if (!catRes.ok) throw new Error("Category fetch failed");
        const catData = await catRes.json();

        if (!catData.success || !catData.category) {
          throw new Error("Category not found in response");
        }

        setCategory(catData.category);

        // 2️⃣ Fetch news for this category
        const categoryName = catData.category.name;
        const newsRes = await fetch(`/api/news?category=${categoryName}`);
        if (!newsRes.ok) throw new Error("News fetch failed");
        const newsData = await newsRes.json();
        setNews(newsData.data || []);
      } catch (error) {
        console.error(error);
        setCategory(null);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) fetchCategoryAndNews();
  }, [params.slug]);

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (!category) return <h1>Category not found</h1>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{category.name}</h1>

      {news.length === 0 && <p>এই ক্যাটাগরিতে কোনো নিউজ নেই।</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {news.map((n) => (
          <div key={n._id} className="p-4 border rounded">
            <img
              src={n.imageSrc}
              className="w-full h-40 object-cover rounded"
              alt={n.title}
            />
            <h2 className="font-bold text-lg mt-2">{n.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
