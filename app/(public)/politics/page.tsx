import PoliticsSection from "@/components/PoliticsSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

function page() {
  return (
    <>
      {" "}
      <DynamicTitleFavicon title="রাজনীতি" faviconUrl="/favicon.ico" />
      <PoliticsSection />
    </>
  );
}

export default page;
