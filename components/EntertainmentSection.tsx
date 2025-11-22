// components/EntertainmentSection.tsx
import React from "react";
import SmallCard from "@/components/entertainment/SmallCard";
import MainCard from "@/components/entertainment/MainCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./header/AdvertisementBanner";

const DUMMY_DATA = [
  {
    id: 1,
    title: "এবার সিনেমার পর্দায় মির্জাপুর পাচ্ছেন স্বস্তিকা! (The Main Story)",
    image: "/headliness/image (4).png",
    isMain: true,
    summary: "মুখ্য চরিত্র স্বস্তিকা এবার সিনেমার পর্দায় অভিনয় করবেন...",
  },
  {
    id: 2,
    title: "কেমন দেখতে পারেন জেমস বন্ডকে, জানালেন সায়েদ ",
    image: "/headliness/image (4).png",
  },
  {
    id: 3,
    title: "এ নিয়ে ভক্তদের আর দ্বিধা নেই! ",
    image: "/headliness/image (4).png",
  },
  {
    id: 4,
    title: "প্রিয় মানুষকে নিয়ে দারুণ মেজাজে মেহজাবিন ",
    image: "/headliness/image (4).png",
  },
  {
    id: 5,
    title: "মিথুন চক্রবর্তীর ছবিতে শ্রাবণী মুখোপাধ্যায় ",
    image: "/headliness/image (4).png",
  },
  {
    id: 6,
    title: "মমতার অভিনেত্রী প্রেরণা রয় ",
    image: "/headliness/image (4).png",
  },
  {
    id: 7,
    title: "বড় পর্দায় আসছে ডায়েজের নতুন চমক ",
    image: "/headliness/image (4).png",
  },
];

const EntertainmentSection = () => {
  const mainArticle = DUMMY_DATA.find((a) => a.isMain);
  const leftArticles = DUMMY_DATA.filter((a) => a.id >= 2 && a.id <= 4);
  const rightArticles = DUMMY_DATA.filter((a) => a.id >= 5 && a.id <= 7);

  return (
    <section className="bg-[#19363D] py-10">
      <div className="container mx-auto px-4">
        <SectionHeader title="বিনোদন" />

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* LEFT COLUMN */}
          <ul className="flex flex-col gap-4">
            {leftArticles.map((article) => (
              <li key={article.id}>
                <SmallCard article={article} />
              </li>
            ))}
          </ul>

          {/* CENTER MAIN ARTICLE */}
          {mainArticle && (
            <div className="col-span-1 md:col-span-2">
              <MainCard article={mainArticle} />
            </div>
          )}

          {/* RIGHT COLUMN */}
          <ul className="flex flex-col gap-4">
            {rightArticles.map((article) => (
              <li key={article.id}>
                <SmallCard article={article} isRightAligned={true} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AdvertisementBanner />
    </section>
  );
};

export default EntertainmentSection;
