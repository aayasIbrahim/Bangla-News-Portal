"use client";

import { useState } from "react";
import Image from "next/image";
import { uploadToCloudinary } from "@/utils/utils"; // Assuming this utility returns the URL/Public ID

const categories = [
  { name: "রাজনীতি", href: "politics" },
  { name: "জাতীয়", href: "national" },
  { name: "বাংলাদেশ", href: "bangladesh" },
  { name: "বিশ্ব", href: "world" },
  { name: "বাণিজ্য", href: "business" },
  { name: "খেলা", href: "sports" },
];

export default function AddNews() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    category: "",
    content: "",
    imageSrc: "",
    isFeatured: false,
  });

  // --- Omitted: handleChange (unchanged) ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value } = e.target;
    let newValue: string | boolean = value;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      newValue = e.target.checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  // --- Omitted: handleImageChange (unchanged) ---
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // ----------------------- UPDATED HANDLE SUBMIT -----------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // **Basic Validation Check**
    if (!formData.title || !formData.summary || !formData.category || !formData.content) {
        alert("অনুগ্রহ করে শিরোনাম, সংক্ষিপ্ত বিবরণ, বিভাগ এবং বিস্তারিত সংবাদ পূরণ করুন।");
        return;
    }
    if (!imageFile && !formData.imageSrc) {
        alert("অনুগ্রহ করে একটি ছবি আপলোড করুন।");
        return;
    }


    try {
      setLoading(true);

      let uploadedImageUrl = formData.imageSrc;

      // 1. Cloudinary-তে ছবি আপলোড
      if (imageFile) {
        // assumed uploadToCloudinary returns the publicly accessible URL or Public ID
        uploadedImageUrl = await uploadToCloudinary(imageFile); 

        if (!uploadedImageUrl) {
            throw new Error("Cloudinary-তে ছবি আপলোড ব্যর্থ হয়েছে।");
        }
      }

      const finalData = {
        ...formData,
        imageSrc: uploadedImageUrl,
      };

      // 2. API-এর সাথে কানেক্ট করা (ডাটা ব্যাকএন্ডে POST করা)
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (!response.ok) {
        // Handle server-side errors (e.g., status 400, 500)
        throw new Error(`API কল ব্যর্থ হয়েছে: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("News created successfully:", result);

      alert("News submitted successfully!");

      // 3. ফর্ম রিসেট
      setFormData({
        title: "",
        summary: "",
        category: "",
        content: "",
        imageSrc: "",
        isFeatured: false,
      });
      setPreviewUrl("");
      setImageFile(null);
      
    } catch (err) {
      console.error("Submit error:", err);
      alert(`সংবাদ যুক্ত করতে ব্যর্থ। ত্রুটি: ${err instanceof Error ? err.message : "অজানা ত্রুটি"}`);
    } finally {
        setLoading(false);
    }
  };

// --- Omitted: return block (unchanged, as the form structure is correct) ---
 return (
 <div className="max-w-2xl p-5  bg-white shadow ">
  <h2 className="text-2xl font-semibold mb-6">সংবাদ যুক্ত করুন</h2>

  <form onSubmit={handleSubmit}>
    <ul className="space-y-4 list-none p-0">
      {/* Title */}
      <li>
        <input
          type="text"
          name="title"
          placeholder="সংবাদের শিরোনাম"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </li>

      {/* Summary */}
      <li>
        <textarea
          name="summary"
          placeholder="সংক্ষিপ্ত বিবরণ"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </li>

      {/* Category */}
      <li>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        >
          <option value="">বিভাগ নির্বাচন করুন</option>
          {categories.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </li>

      {/* Content */}
      <li>
        <textarea
          name="content"
          placeholder="বিস্তারিত সংবাদ লিখুন"
          value={formData.content}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </li>

      {/* Featured Checkbox */}
      <li>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="accent-blue-600"
          />
          <span>ফিচার্ড সংবাদ</span>
        </label>
      </li>

      {/* Image Upload */}
      <li>
        <label className="block mb-1">ছবি আপলোড করুন</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </li>

      {/* Image Preview */}
      {previewUrl && (
        <li className="relative">
          <Image
            src={previewUrl}
            alt="সংবাদের ছবি"
            width={300}
            height={200}
            className="rounded border"
          />
          <button
            type="button"
            onClick={() => setPreviewUrl("")}
            className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full"
          >
            ✕
          </button>
        </li>
      )}

      {/* Submit Button */}
      <li>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "আপলোড হচ্ছে..." : "সংবাদ যুক্ত করুন"}
        </button>
      </li>
    </ul>
  </form>
</div>

);

}