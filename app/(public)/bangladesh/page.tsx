import BangladeshSection from "@/components/BangladeshSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

function page() {
  return (
    <>
      <DynamicTitleFavicon title={"বাংলাদেশ"} faviconUrl="/favicon.ico" />
      <BangladeshSection />
    </>
  );
}

export default page;
