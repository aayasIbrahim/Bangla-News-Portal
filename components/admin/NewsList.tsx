"use client";

import { useEffect, useState } from "react";
import { INews } from "@/types/news";
import NewsManageCard from "@/components/admin/NewsManageCard";

export interface NewsListProps {
  news?: INews[];
  onEditClick: (item: INews) => void;
  onDelete: (id: string) => Promise<void>;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
}

const NewsList = ({ onEditClick }: NewsListProps) => { 
  const [news, setNews] = useState<INews[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // =========================
  // 🔹 Fetch categories from backend
  // =========================
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories([{ _id: "all", name: "সব", slug: "all" }, ...(data.categories || [])]);
      } catch (err) {
        console.error("Category fetch error:", err);
        setCategories([{ _id: "all", name: "সব", slug: "all" }]);
      }
    };

    fetchCategories();
  }, []);

  // =========================
  // 🔹 Fetch news by category
  // =========================
  const fetchNews = async (category: string) => {
    setIsLoading(true);
    try {
      const url = new URL("/api/news", window.location.origin);
      if (category && category !== "all") {
        url.searchParams.append("category", category);
      }
      const res = await fetch(url.toString());
      const data = await res.json();
      if (res.ok && data.data) setNews(data.data as INews[]);
      else setNews([]);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNews([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  // =========================
  // 🔹 Edit & Delete handlers
  // =========================
  const handleEdit = (id: string) => {
    const itemToEdit = news.find(item => item._id === id);
    if (itemToEdit) onEditClick(itemToEdit);
  };

  const handleDelete = async (id: string): Promise<boolean> => {
    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (res.ok) {
        setNews(prev => prev.filter(n => n._id !== id));
        return true;
      } else return false;
    } catch {
      return false;
    }
  };

  return (
    <div className="max-w-7xl mx-auto lg:w-full">
      <h2 className="text-2xl font-bold mb-4">সকল সংবাদ</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === cat.name
                ? "bg-blue-600 text-white border-blue-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p>সংবাদ লোড হচ্ছে...</p>
      ) : news.length === 0 ? (
        <p>কোনো সংবাদ পাওয়া যায়নি।</p>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <NewsManageCard
              key={item._id}
              item={item}
              onEdit={() => handleEdit(item._id)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
