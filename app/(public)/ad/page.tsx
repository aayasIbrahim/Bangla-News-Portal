import Advertisement from "@/components/Advertisment";
import DynamicTitleFavicon from "@/components/DynamicTitleFavicon";


export default function Adpage() {
  return (
    <>
      <DynamicTitleFavicon
        title="বিজ্ঞাপন"
        faviconUrl="/favicon.ico"
      />
      <Advertisement />
    </>
  );
}

