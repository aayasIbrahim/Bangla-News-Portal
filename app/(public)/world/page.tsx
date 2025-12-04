import WorldSection from "@/components/WorldSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

export default function page() {
  return (
    <>
      <DynamicTitleFavicon title="বিশ্ব" faviconUrl="/favicon.ico" />
      <WorldSection />
    </>
  );
}
