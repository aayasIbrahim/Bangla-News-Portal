import React from "react";
import CommerceMainCard from "@/components/commerce/CommerceMainCard";
import CommerceStandardCard from "@/components/commerce/CommerceStandardCard";
import SectionHeader from "./ui/SectionHeader";
interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string; // For the large left card
} // Adjust path

// Dummy Data
const DUMMY_DATA: Article[] = [
  {
    id: "c1",
    title: "বিটকয়েনের প্রতিষ্ঠাতার পরিচয় উদ্‌ঘাটনে আরেকটি ব্যর্থ প্রচেষ্টা",
    image: "/nation/image (5).png", // Placeholder image
    summary:
      "নিয়ে টেউলিান না দুই সাশ কেউটি ডেমস ডিওটিটাকলের জন্মের ভিত্তি পতে বিটকয়েনের প্রিতিষ্টাধীর চুলটি ছাতে কাজ করে কমটিটে কাষকাজ বিষেয় পলিট্আিনদগিগিলনা পতিিঠাকিকনে কেকেনিন রেরপে। এতোটি এসেতে আলিময়গিটয়না চুলে বিলতেন কাজ কতিয়িেম।",
  },
  {
    id: "c2",
    title: "বৈশ্বিক অর্থনীতিতে কার্যক্রম বন্ধ",
    image: "/nation/image (5).png",
  }, // Bear & Bull
  {
    id: "c3",
    title: "বিশ্বের শীর্ষ ১০ বিমান নির্মাণকারী কোম্পানি কোনগুলো",
    image: "/nation/image (5).png",
  }, // Airplane
  {
    id: "c4",
    title: "সংরক্ষণ ও বন্ডে বিনিয়োগ করলে মিলবে কিছু নতুন সুবিধা",
    image: "/nation/image (5).png",
  }, // Money stack
  {
    id: "c5",
    title: "প্রবাসী আয়ে অক্টোবরের বড় প্রবৃদ্ধি",
    image: "/nation/image (5).png",
  }, // Dollar
];

const CommerceSection: React.FC = () => {
  const mainArticle = DUMMY_DATA[0];
  const rightArticles = DUMMY_DATA.slice(1); // The four articles on the right

  return ( 
    <section className="bg-white min-h-screen">
      <div className="p-4 sm:p-8  container mx-auto">
        {/* Section Header */}
        <SectionHeader title=" বাণিজ্য" />

        {/* --- MAIN GRID LAYOUT CONTAINER --- */}
        {/* On small screens, everything stacks (grid-cols-1).
          On large screens (lg), it becomes a 4-column grid, with the left card spanning 2 columns, 2 rows. */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {/* LEFT LARGE ARTICLE CARD */}
          <div className="lg:col-span-2 lg:row-span-2">
            {" "}
            {mainArticle && <CommerceMainCard article={mainArticle} />}
          </div>

          {/* RIGHT SIDE ARTICLES (4 cards) */}
          {rightArticles.map((article) => (
            <div key={article.id} className="lg:col-span-2">
              {" "}
              <CommerceStandardCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommerceSection;
