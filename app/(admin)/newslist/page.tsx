"use client";

import React, { useState } from "react";
import NewsForm from "@/components/admin/NewsForm";
import NewsList from "@/components/admin/NewsList";
import { INews } from "@/types/news";
// RTK Query hook import করুন
import { useDeleteNewsMutation } from "@/app/redux/features/news/newsApi"; // পথ আপনার প্রজেক্ট অনুযায়ী ঠিক করুন

export default function NewListPage() {
  const [selectedNews, setSelectedNews] = useState<INews | null>(null); // 🚀 RTK Query mutation hook ব্যবহার করুন

  const [deleteNews, { isLoading: isDeleting, error: deleteError }] =
    useDeleteNewsMutation(); // ============================== // NewsList থেকে edit click handle // ==============================

  const handleEditClick = (item: INews) => {
    setSelectedNews(item);
  }; // ============================== // NewsForm সফলভাবে submit হলে // ==============================

  const handleSuccess = () => {
    setSelectedNews(null);
  }; // ============================== // NewsForm modal বন্ধ করলে // ==============================

  const handleClose = () => {
    setSelectedNews(null);
  }; // ============================== // News delete handle - RTK Query ব্যবহার করে আপডেট করা হয়েছে // ==============================

  const handleDelete = async (id: string) => {
    if (!confirm("আপনি কি এই news মুছতে চান?")) return;

    try {
      // `deleteNews` mutation কল করুন
      await deleteNews(id).unwrap();

      alert("News deleted successfully!"); // RTK Query স্বয়ংক্রিয়ভাবে NewsList-কে রিফ্রেশ করবে (`invalidatesTags` এর কারণে)
    } catch (error) {
      console.error("Delete Error:", error); // error state থেকে মেসেজ দেখানো যেতে পারে
      alert(
        `News delete failed: ${
          deleteError ? deleteError || "Unknown error" : "Server error"
        }`
      );
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-10 relative bg-gray-200">
      {isDeleting && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-[60] flex items-center justify-center">
          {" "}
          <div className="text-white text-lg p-4 rounded-md bg-gray-800"></div>
        </div>
      )}
      {/* ✅ News List */}
      <NewsList onEditClick={handleEditClick} onDelete={handleDelete} /> 
      {/* ✅ Edit/Add Form Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-40 transition-opacity"
            onClick={handleClose}
          ></div>

          <div className="relative bg-white rounded-lg shadow-lg w-[95%] sm:w-[90%] md:w-[80%] max-w-2xl max-h-[90vh] overflow-y-auto p-6 animate-fadeIn">
            {/* ❌ Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition text-3xl font-bold"
            >
              ×
            </button>

            <NewsForm initialData={selectedNews} onSuccess={handleSuccess} />
          </div>
        </div>
      )}
    </div>
  );
}
