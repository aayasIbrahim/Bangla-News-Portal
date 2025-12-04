import SportsSection from "@/components/SportsSection";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";

function page() {
  return (
    <>
      <DynamicTitleFavicon  title="খেলা" faviconUrl="/favicon.ico" />
      <SportsSection />
    </>
  );
}

export default page;
