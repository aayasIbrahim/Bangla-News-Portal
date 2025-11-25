"use client";

import { useEffect, useState, useMemo } from "react";
import { INews } from "@/types/news";
import NewsManageCard from "@/components/admin/NewsManageCard";

const allCategories = [
  { name: "সব", value: "all" },
  { name: "রাজনীতি", value: "রাজনীতি" },
  { name: "জাতীয়", value: "জাতীয়" },
  { name: "বাংলাদেশ", value: "বাংলাদেশ" },
  { name: "বিশ্ব", value: "বিশ্ব" },
  { name: "বাণিজ্য", value: "বাণিজ্য" },
  { name: "খেলা", value: "খেলা" },
];

const AllNewsPage = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();

        if (data.success) {
          setNews(data.data as INews[]);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = useMemo(() => {
    if (selectedCategory === "all") return news;
    return news.filter((item) => item.category === selectedCategory);
  }, [news, selectedCategory]);

  // Edit handler
  const handleEdit = (id: string) => {
    alert("Edit pressed for ID: " + id);
    // Example: router.push(`/news/edit/${id}`)
  };

  // Delete handler
  const handleDelete = async (id: string) => {
    const sure = confirm("আপনি কি নিশ্চিত যে আপনি এই সংবাদটি মুছে ফেলতে চান?");
    if (!sure) return;

    const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (data.success) {
      setNews((prev) => prev.filter((n) => n._id !== id));
    }
  };

  return (
    <div className="max-w-7xl  p-5 lg:w-full">
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
      ) : filteredNews.length === 0 ? (
        <p>কোনো সংবাদ পাওয়া যায়নি।</p>
      ) : (
        <div className="space-y-4">
          {filteredNews.map((item) => (
            <NewsManageCard
              key={item._id}
              item={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNewsPage;
