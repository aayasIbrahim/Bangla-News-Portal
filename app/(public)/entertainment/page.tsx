import EntertainmentSection from "@/components/EntertainmentSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";
import React from "react";

function page() {
  return (
    <>
      <DynamicTitleFavicon title="বিনোদন" faviconUrl="/favicon.ico" />
      <EntertainmentSection />
    </>
  );
}

export default page;
