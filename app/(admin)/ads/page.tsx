"use client";
import AddAds from "@/components/admin/AddAds";
import AdsList from "@/components/admin/AdsList";
import { Ad } from "@/types/ads";
import React, { useState } from "react";

export default function Page() {
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);

  return (
    <section className="bg-gray-50 flex flex-col md:flex-row justify-center gap-6 p-6">
      <AddAds selectedAd={selectedAd} setSelectedAd={setSelectedAd} />
      <AdsList setSelectedAd={setSelectedAd} />
    </section>
  );
}
