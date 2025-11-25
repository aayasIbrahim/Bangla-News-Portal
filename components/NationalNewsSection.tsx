"use client";

import { useEffect, useState } from "react";
import { INews } from "@/types/news";
import MainArticle from "./NationalNews/MainArticle";
import SidebarNewsCard from "./NationalNews/SidebarNewsCard";
import AdCard from "./headlines/AdCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./AdvertisementBanner";

export default function NationalNewsSection() {
  const [news, setNews] = useState<INews[] | undefined>(undefined); // undefined দিয়ে শুরু করা হলো
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // এরর হ্যান্ডেল করার জন্য স্টেট

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/news?category=জাতীয়");
        
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        
        // নিশ্চিত করুন যে data.data একটি অ্যারে, না হলে undefined সেট করুন
        if (Array.isArray(data.data)) {
            setNews(data.data);
        } else {
            // যদি API একটি অবৈধ ডেটা টাইপ পাঠায়
            setNews(undefined); 
            setError("Invalid data format received from API.");
        }
      } catch (err) {
        console.error("Error fetching national news:", err);
        setError("Could not load national news.");
        setNews(undefined); // এরর হলে news কে undefined সেট করুন
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // --- রেন্ডারিং লজিক ---

  if (loading) return <p className="text-center p-10">Loading national news...</p>;
  
  if (error) return <p className="text-center p-10 text-red-600">Error: {error}</p>;

  // ***এখানে সেফটি চেক করা হচ্ছে***
  // news undefined কিনা চেক করা হচ্ছে, এটিই আপনার TypeError সমাধান করবে।
  // পাশাপাশি এটি যদি একটি খালি অ্যারে হয়, তবেও ধরা পড়বে।
  if (!news || news.length === 0) {
    return <p className="text-center p-10">No national news found.</p>;
  }

  // যেহেতু আমরা নিশ্চিত যে news একটি বৈধ অ্যারে, আমরা নিরাপদে destructuring করতে পারি
  const [main, ...sidebarNews] = news;

  // এই চেকটি নিশ্চিত করে যে অ্যারেতে অন্তত একটি আইটেম আছে MainArticle-এর জন্য
  if (!main) {
     return <p className="text-center p-10">Data error: Main article missing.</p>;
  }

  return (
    <section className="container mx-auto p-4 sm:p-6 font-sans min-h-screen">
      <SectionHeader title="জাতীয়" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MainArticle কম্পোনেন্টকে রেন্ডার করা হচ্ছে */}
        <MainArticle {...main} /> 
        
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
            {/* sidebarNews অ্যারে map করা হচ্ছে */}
            {sidebarNews.map((item) => (
              <SidebarNewsCard key={item._id} {...item} />
            ))}
          </div>
          <AdCard
            ad={{ title: "ঈদ অফার", details: "বিশেষ ছাড়!", imageUrl: "/ads/image.png" }}
          />
        </div>
      </div>
      <AdvertisementBanner />
    </section>
  );
}