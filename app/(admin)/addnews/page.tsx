"use client";

import { useState } from "react";
import Image from "next/image";
import { uploadToCloudinary } from "@/utils/utils";

const categories = [
  { name: "রাজনীতি", href: "politics" },
  { name: "জাতীয়", href: "national" },
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

  // ----------------------- HANDLE TEXT INPUTS -----------------------
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

  // ----------------------- HANDLE IMAGE UPLOAD -----------------------
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // ----------------------- HANDLE SUBMIT -----------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      let uploadedImageUrl = formData.imageSrc;

      if (imageFile) {
        uploadedImageUrl = await uploadToCloudinary(imageFile);
      }

      const finalData = {
        ...formData,
        imageSrc: uploadedImageUrl,
      };

      console.log("Final Submitted Data:", finalData);

      setLoading(false);

      alert("News submitted successfully!");

      // RESET FORM
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
      setLoading(false);
      console.error("Upload error:", err);
    }
  };

 return (
  <div className="max-w-2xl mx-auto p-5">
    <h2 className="text-xl font-semibold mb-4">সংবাদ যুক্ত করুন</h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Title */}
      <input
        type="text"
        name="title"
        placeholder="সংবাদের শিরোনাম"
        value={formData.title}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      {/* Summary */}
      <textarea
        name="summary"
        placeholder="সংক্ষিপ্ত বিবরণ"
        value={formData.summary}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      {/* Category */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="">বিভাগ নির্বাচন করুন</option>
        {categories.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {/* Content */}
      <textarea
        name="content"
        placeholder="বিস্তারিত সংবাদ লিখুন"
        value={formData.content}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded h-32"
      />

      {/* Featured Checkbox */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />
        <span>ফিচার্ড সংবাদ</span>
      </label>

      {/* Image Upload */}
      <div>
        <label className="block mb-1">ছবি আপলোড করুন</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      {/* Image Preview */}
      {previewUrl && (
        <div className="mt-3 relative inline-block">
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
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "আপলোড হচ্ছে..." : "সংবাদ যুক্ত করুন"}
      </button>
    </form>
  </div>
);

}
