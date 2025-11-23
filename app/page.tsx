
import EntertainmentSection from "@/components/EntertainmentSection";
import HeaderSection from "@/components/HeadlineSection";
import NationalNewsSection from "@/components/NationalNewsSection";
import PoliticsSection from "@/components/PoliticsSection";
import WorldSection from "@/components/WorldSection";

import React from "react";

export default function Page() {
  return (
    <>
      <HeaderSection />
      <NationalNewsSection />
      <PoliticsSection />
      <EntertainmentSection />
      <WorldSection/>
    </>
  );
}
