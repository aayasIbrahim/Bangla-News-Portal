import NationalNewsSection from "@/components/NationalNewsSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

function page() {
  return (
    <>
      <DynamicTitleFavicon title="জাতীয়" faviconUrl="/favicon.ico" />
      <NationalNewsSection />
    </>
  );
}

export default page;
