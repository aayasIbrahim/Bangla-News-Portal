"use client";


import MainHeadline from "@/components/headlines/MainHeadline";
import SmallNewsCard from "@/components/headlines/SmallNewsCard";
// import AdCard from "@/components/headlines/AdCard";
import PopularListItem from "@/components/headlines/PopularListItem";
// import AdvertisementBanner from "./AdvertisementBanner";
import { INews } from "@/types/news";
import VideoPlayer from "@/components/ui/Videoplayer";
import FullScreenLoading from "./ui/FullScreenLoading";
import { useGetNewsQuery } from "@/app/redux/features/news/newsApi";

// interface Ad {
//   title: string;
//   details: string;
//   imageUrl: string;
// }

export default function HeaderSection() {
 
  const { data, isLoading } = useGetNewsQuery("all"); 
   const news: INews[] = data?.data || [];

  const leftColumnNews = news.slice(4, 7);       // Latest 5
  const topHeadline = news.slice(0, 3);          // Main top 3
  const rightSidebarList =
    news.filter((n) => n.isFeatured).slice(7, 9).length > 0
      ? news.filter((n) => n.isFeatured).slice(7, 9)
      : news.slice(3, 8);

  



  // const ad: Ad = {
  //   title: "ঈদ অফার",
  //   details: "বিশেষ ছাড়!",
  //   imageUrl: "/ads/image.png",
  // };

  return (
    <section className="py-5 sm:py-12">
      {isLoading && <FullScreenLoading />}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Left Column */}
        <div className="bg-white p-4">
          <div className="lg:hidden">
            <VideoPlayer />
          </div>
          <h1 className="text-xl font-bold mb-3">সর্বশেষ খবর</h1>

          {leftColumnNews.map((news, i) => (
            <SmallNewsCard key={news._id} news={news} isTop={i === 0} />
          ))}
        </div>

        {/* Center */}
        <div className="md:col-span-2">
         <div className="hidden md:block">
           <VideoPlayer />
         </div>

          <MainHeadline headlines={topHeadline} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Future center block components */}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white rounded-xl shadow-xl p-4">
          {/* <AdCard ad={ad} /> */}

          <h2 className="text-xl font-bold mt-4 mb-2">জনপ্রিয় সংবাদ</h2>

          {rightSidebarList.map((item) => (
            <PopularListItem key={item._id} item={item} />
          ))}
        </div>
      </div>
      {/* <AdvertisementBanner /> */}
    </section>
  );
}
