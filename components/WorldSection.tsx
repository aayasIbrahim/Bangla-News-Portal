// pages/WorldSection.tsx (Revised for Mobile and White Background)
import BasicCard from "@/components/world/BasicCard";
import SideSmallCard from "@/components/world/SideSmallCard";
import MediumCard from "@/components/world/MediumCard";
import LargeLeftCard from "@/components/world/LargeLeftCard";
import SectionHeader from "./ui/SectionHeader";

export interface Article {
  id: number | string; // Using string for IDs now, common with CMS data
  title: string;
  image: string;
  summary?: string; // Optional summary for larger cards
}
// Dummy Data (Reusing the previous data structure for continuity)
const DUMMY_DATA: Article[] = [
  {
    id: "l1",
    title: "অ্যারিজোনায় ড্রোন-স্নাইপার নিয়ে সতর্ক আইনশৃঙ্খলা বাহিনী",
    image: "/nation/image (5).png",
    summary:
      "একগুচ্ছ সামরিক ক্ষেপণাস্ত্র নিয়ে দ্রুত দেশের কোনো সামরিক বাহিনী বিশ্বব্যাপী শক্তিশালী প্রতিরক্ষা শিল্পকারখানার কেন্দনে করছে। একটি এসেতে আধুনিক চুলে বিলতেন কাজ কতিয়িেম। ডেমোক্র্যাটরা একজন উড়াবে তৈরি করতে সক্ষম এবং পধিতরুরু কষযা লনকমটিটে থেকে বেরো। টেটি মেষা, এর টেচিফিয়া মহাসমাবেশে নেতাদের দ্রুত তৈরি এখনো কেউ ভাবে না, কবেই।",
  },
  {
    id: "m1",
    title: "মার্কিন নির্বাচন নিয়ে আলোচনা",
    image: "/nation/image (5).png",
  },
  { id: "s1", title: "চা বাগান উৎসবের আনন্দ", image: "/nation/image (5).png" },
  {
    id: "s2",
    title: "গাজায় ইসরায়েলি হামলায় নিহত ৩৩ ফিলিস্তিনি",
    image: "/nation/image (5).png",
  },
  {
    id: "b1",
    title: "যুক্তরাষ্ট্রের নির্বাচন নিয়ে মুখের কথা অবার্থ হয়ে হয়েছে ২৫০ কোটি",
    image: "/nation/image (5).png",
    summary:
      "একগুচ্ছ সামরিক ক্ষেপণাস্ত্র নিয়ে দ্রুত দেশের কোনো সামরিক বাহিনী বিশ্বব্যাপী শক্তিশালী প্রতিরক্ষা শিল্পকারখানার কেন্দনে করছে। একটি এসেতে আধুনিক চুলে বিলতেন কাজ কতিয়িেম।",
  },
  {
    id: "b2",
    title:
      "জাতিসংঘের উদ্যোগের সঙ্গে সম্পর্ক নিয়ে কথা বলছে, যুক্তরাষ্ট্র ও ইউক্রেন",
    image: "/nation/image (5).png",
    summary:
      "জাতিসংঘের উদ্যোগের সঙ্গে সম্পর্ক নিয়ে কথা বলছে, যুক্তরাষ্ট্র ও ইউক্রেন",
  },
  {
    id: "b3",
    title: "ইন্দোনেশিয়ায় অনুসন্ধানে ১০ জন নিহত",
    image: "/nation/image (5).png",
    summary:
      "অ্যামনেস্টিরি জেলেরের কষেত্র পধিতরুরু কাজ পধিতরুরুরর কষতত্র পধিতরুরুরর",
  },
  {
    id: "b4",
    title: "ইসরায়েলে অস্ত্র সরবরাহ বন্ধের আহ্বান যুক্তরাজ্যের",
    image: "/nation/image (5).png",
  },
];

const WorldSection: React.FC = () => {
  const [
    largeLeft,
    mediumTop1,
    smallRightTop,
    smallRightBottom,
    ...bottomCards
  ] = DUMMY_DATA;

  return (
    <section className=" bg-white min-h-screen">
      <div className="container mx-auto p-4 sm:p-8">
        <SectionHeader title="বিশ্ব" />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2 lg:h-[650px]">
          {/* TOP LEFT LARGE CARD */}
          <div className="lg:col-span-2 lg:row-span-2">
            {largeLeft && <LargeLeftCard article={largeLeft} />}
          </div>

          {/* TOP MIDDLE CARD */}
          <div className="lg:col-span-2 lg:row-span-1">
            {mediumTop1 && <MediumCard article={mediumTop1} />}
          </div>

          {/* TOP RIGHT STACK (On mobile, this will be one block; on large, it stacks vertically) */}
          <div className="lg:col-span-2 lg:row-span-1 flex flex-col gap-4">
            {smallRightTop && <SideSmallCard article={smallRightTop} />}
            {smallRightBottom && <SideSmallCard article={smallRightBottom} />}
          </div>

          {/* BOTTOM ROW (On mobile, they are simply part of the single-column stack) */}
          {bottomCards.slice(0, 3).map((article) => (
            <div key={article.id} className="lg:col-span-2 mt-5">
              <BasicCard article={article} />
            </div>
          ))}
          {/* The very last card */}
          {bottomCards[3] && (
            <div className="lg:col-span-2">
              <BasicCard article={bottomCards[3]} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
