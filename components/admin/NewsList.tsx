"use client";

import { useEffect, useState } from "react";
import { INews } from "@/types/news";
import NewsManageCard from "@/components/admin/NewsManageCard";

export interface NewsListProps {
  news?: INews[]; // যদি news পাঠানো হয়
  onEditClick: (item: INews) => void;
  onDelete: (id: string) => Promise<void>; // <-- এই লাইনটা যুক্ত করো
}
const allCategories = [
  { name: "সব", value: "all" },
  { name: "রাজনীতি", value: "রাজনীতি" },
  { name: "জাতীয়", value: "জাতীয়" },
  { name: "বাংলাদেশ", value: "বাংলাদেশ" },
  { name: "বিশ্ব", value: "বিশ্ব" },
  { name: "বাণিজ্য", value: "বাণিজ্য" },
  { name: "খেলা", value: "খেলা" },
];

// কম্পোনেন্টটি এখন NewsListProps গ্রহণ করবে
const NewsList = ({ onEditClick }: NewsListProps) => { 
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchNews = async (category: string) => {
    setIsLoading(true);
    try {
      const url = new URL("/api/news", location.origin);
      if (category && category !== "all") {
        url.searchParams.append("category", category);
      }

      const res = await fetch(url.toString());
      const data = await res.json();

      // ধরে নিলাম API response স্ট্রাকচার: { success: true, data: INews[] }
      if (res.ok && data.data) { 
        setNews(data.data as INews[]);
      } else {
         console.error("API error:", data.error || "Unknown response format");
         setNews([]);
      }
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

  // =========================================================
  // ✅ UPDATED handleEdit (আইডি-এর বদলে আইটেমটি প্যারেন্টে পাঠানো)
  // =========================================================
  const handleEdit = (id: string) => {
    // ID দ্বারা খবরের আইটেমটি খুঁজে বের করা
    const itemToEdit = news.find(item => item._id === id);
    if (itemToEdit) {
        // সম্পূর্ণ আইটেমটি প্যারেন্ট কম্পোনেন্টের onEditClick প্রপসে পাঠানো
        onEditClick(itemToEdit); 
    }
  };

  // =========================================================
  // ✅ UPDATED handleDelete (boolean রিটার্ন করা)
  // =========================================================
  const handleDelete = async (id: string): Promise<boolean> => {
    try {
      const url = new URL(`/api/news/${id}`, window.location.origin);
      const res = await fetch(url.toString(), { method: "DELETE" });

      if (res.ok) {
        setNews(prev => prev.filter(n => n._id !== id));
        return true;
      } else {
        console.error("Delete API failed:", res.status);
        return false;
      }
    } catch (error) {
      console.error("Network delete error:", error);
      return false;
    }
  };

  return (
    <div className="max-w-7xl mx-auto  lg:w-full">
      <h2 className="text-2xl font-bold mb-4">সকল সংবাদ</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        {allCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === cat.value
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
              // onEdit-এ handleEdit ফাংশনকে কল করা, যা আইটেমটিকে প্যারেন্টে পাঠাবে
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