import CommerceSection from "@/components/CommerceSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

function page() {
  return (
    <>
      <DynamicTitleFavicon title="বাণিজ্য" faviconUrl="/favicon.ico" />
      <CommerceSection />
    </>
  );
}

export default page;
