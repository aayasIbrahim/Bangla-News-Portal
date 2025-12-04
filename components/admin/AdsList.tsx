"use client";
import React from "react";
import { useGetAdsQuery, useDeleteAdMutation } from "@/app/redux/features/ads/adsApi";
import { Ad } from "@/types/ads";
interface AdsListProps {
  setSelectedAd: (ad:Ad) => void;
}
export default function AdsList({ setSelectedAd }: AdsListProps) {
  const { data: ads, isLoading } = useGetAdsQuery();
  const [deleteAd] = useDeleteAdMutation();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-4">
      {ads?.map((ad) => (
        <div
          key={ad._id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white shadow rounded space-y-3 sm:space-y-0 sm:space-x-4"
        >
          {/* Image */}
          <div className="flex-shrink-0 w-full sm:w-32 h-24 sm:h-24 overflow-hidden rounded">
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="font-bold text-lg">{ad.title}</h3>
            <p className="text-gray-500">{ad.position}</p>
            <p className="text-gray-400 text-sm">
              Active: {new Date(ad.startDate).toLocaleDateString()} -{" "}
              {new Date(ad.endDate).toLocaleDateString()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {/* Edit Button */}
            <button
               onClick={() => setSelectedAd(ad)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              onClick={() => deleteAd(ad._id!)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
