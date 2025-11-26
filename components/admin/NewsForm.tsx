"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { uploadToCloudinary } from "@/utils/utils"; 
import { useAddNewsMutation, useUpdateNewsMutation } from "@/app/redux/features/news/newsApi";
import { INewsPayload } from "@/types/news"; // <- payload type

interface NewsData {
  _id?: string;
  title: string;
  summary: string;
  category: string;
  content: string;
  imageSrc: string;
  isFeatured?: boolean;
}

interface NewsFormProps {
  initialData?: NewsData | null;
  onSuccess: () => void;
  
}

const categories = [
  { name: "রাজনীতি" }, { name: "জাতীয়" }, { name: "বাংলাদেশ" },
  { name: "বিশ্ব" }, { name: "বাণিজ্য" }, { name: "খেলা" }, { name: "বিনোদন" },
];

export default function NewsForm({ initialData, onSuccess }: NewsFormProps) {
  const isEditMode = !!initialData?._id;

  const [formData, setFormData] = useState<NewsData>(
    initialData || { title: "", summary: "", category: "", content: "", imageSrc: "", isFeatured: false }
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(initialData?.imageSrc || "");
  const [loading, setLoading] = useState(false);

  const [addNews] = useAddNewsMutation();
  const [updateNews] = useUpdateNewsMutation();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setPreviewUrl(initialData.imageSrc || "");
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    let newValue: string | boolean = value;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) newValue = e.target.checked;
    setFormData(prev => ({ ...prev, [name]: newValue }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary || !formData.category || !formData.content) {
      alert("সব ফিল্ড পূরণ করুন।");
      return;
    }
    if (!imageFile && !formData.imageSrc) {
      alert("একটি ছবি আপলোড করুন।");
      return;
    }

    try {
      setLoading(true);
      let uploadedImageUrl = formData.imageSrc;

      if (imageFile) {
        uploadedImageUrl = await uploadToCloudinary(imageFile);
        if (!uploadedImageUrl) throw new Error("ছবি আপলোড ব্যর্থ হয়েছে।");
      }

      // ✅ Use INewsPayload type, _id optional
      const submitData: INewsPayload = {
        title: formData.title,
        summary: formData.summary,
        category: formData.category,
        content: formData.content,
        imageSrc: uploadedImageUrl,
        isFeatured: formData.isFeatured,
      };

      if (isEditMode && formData._id) {
        await updateNews({ id: formData._id, data: submitData }).unwrap();
        alert("সংবাদ সফলভাবে আপডেট হয়েছে!");
      } else {
        await addNews(submitData).unwrap();
        alert("সংবাদ সফলভাবে যুক্ত হয়েছে!");
        setFormData({ title: "", summary: "", category: "", content: "", imageSrc: "", isFeatured: false });
        setPreviewUrl("");
        setImageFile(null);
      }

      onSuccess();
    } catch (err) {
      console.error(err);
      alert(`সংবাদ সংরক্ষণ ব্যর্থ। ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl p-5 bg-white shadow">
      <h2 className="text-2xl font-semibold mb-6">{isEditMode ? "সংবাদ সম্পাদনা করুন" : "সংবাদ যুক্ত করুন"}</h2>
      <form onSubmit={handleSubmit}>
        <ul className="space-y-4 list-none p-0">
          <li>
            <input type="text" name="title" placeholder="শিরোনাম" value={formData.title} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </li>
          <li>
            <textarea name="summary" placeholder="সংক্ষিপ্ত বিবরণ" value={formData.summary} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
          </li>
          <li>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full border px-3 py-2 rounded" required>
              <option value="">বিভাগ নির্বাচন করুন</option>
              {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </li>
          <li>
            <textarea name="content" placeholder="বিস্তারিত সংবাদ" value={formData.content} onChange={handleChange} className="w-full border px-3 py-2 rounded h-32" />
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="accent-blue-600" />
              ফিচার্ড সংবাদ
            </label>
          </li>
          <li>
            <label className="block mb-1">ছবি আপলোড করুন</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
          </li>
          {previewUrl && (
            <li className="relative">
              <Image src={previewUrl} alt="ছবি" width={300} height={200} className="rounded border object-cover" unoptimized={previewUrl.startsWith("blob:")} />
              {imageFile && (
                <button type="button" onClick={() => { setPreviewUrl(formData.imageSrc); setImageFile(null); }} className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">✕</button>
              )}
            </li>
          )}
          <li>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400">
              {loading ? "আপলোড হচ্ছে..." : isEditMode ? "সংবাদ আপডেট করুন" : "সংবাদ যুক্ত করুন"}
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}
