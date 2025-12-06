"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Ad } from "@/types/ads";
import Image from "next/image";
import { uploadToCloudinary } from "@/utils/utils";

import {
  useAddAdMutation,
  useUpdateAdMutation,
} from "@/app/redux/features/ads/adsApi";

interface AddAdsProps {
  selectedAd: Ad | null;
  setSelectedAd: (ad: Ad | null) => void;
}

export default function AddAds({ selectedAd, setSelectedAd }: AddAdsProps) {
  const [file, setFile] = useState<File | null>(null);
  // If editing → use selectedAd data
  const initialForm: Ad = selectedAd || {
    title: "",
    image: "",
    link: "",
    position: "",
    startDate: "",
    endDate: "",
  };

  const [form, setForm] = useState<Ad>(initialForm);

  const [addAd, { isLoading: isAdding }] = useAddAdMutation();
  const [updateAd, { isLoading: isUpdating }] = useUpdateAdMutation();

  // When switching between Add <-> Edit, reset form
  const resetForm = (ad: Ad | null) => {
    setForm(
      ad || {
        title: "",
        image: "",
        link: "",
        position: "",
        startDate: "",
        endDate: "",
      }
    );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let imageUrl = form.image;

      // Upload file if a new one is selected
      if (file) {
        imageUrl = await uploadToCloudinary(file);
      }

      const adData = { ...form, image: imageUrl };

      if (selectedAd) {
        // UPDATE MODE
        await updateAd({ id: selectedAd._id!, data: adData }).unwrap();
        alert("Ad updated successfully!");
      } else {
        // ADD MODE
        await addAd(adData).unwrap();
        alert("Ad added successfully!");
      }

      // Reset form
      resetForm(null);
      setSelectedAd(null);
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  // When selectedAd changes from parent
  if (selectedAd && form._id !== selectedAd._id) {
    resetForm(selectedAd);
  }

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {selectedAd ? "Edit Advertisement" : "Add New Advertisement"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Ad Title
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          {form.image && !file && (
            <Image
              src={form.image}
              alt="Ad"
              fill
              className="object-cover rounded"
            />
          )}
        </div>

        {/* Link */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Redirect Link
          </label>
          <input
            type="text"
            name="link"
            value={form.link}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
        </div>

        {/* Position */}
        <div>
          <label className="text-gray-700 font-semibold mb-2 block">
            Ad Position
          </label>
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          >
            <option value="">Select Position</option>
            <option value="sidebar">Sidebar</option>
            <option value="top-banner">Top Banner</option>
            <option value="bottom-banner">Bottom Banner</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 font-semibold mb-2 block">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-semibold mb-2 block">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isAdding || isUpdating}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
          >
            {selectedAd
              ? isUpdating
                ? "Updating..."
                : "Update Advertisement"
              : isAdding
              ? "Adding..."
              : "Add Advertisement"}
          </button>
        </div>
      </form>
    </div>
  );
}
