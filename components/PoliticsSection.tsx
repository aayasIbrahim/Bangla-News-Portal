import React from "react";
import ArticleCard from "./politics/ArticaleCard";
import FeaturedArticle from "./politics/FeaturedArticle";
import { DUMMY_DATA } from "@/data/politicsData";
import VerticalArticleCard from "./politics/VerticalArticleCard";
import AdCard from "./headlines/AdCard";
import SectionHeader from "./ui/SectionHeader";
import AdvertisementBanner from "./header/AdvertisementBanner";

const PoliticsSection: React.FC = () => {
  const { featuredArticle, miniArticles } = DUMMY_DATA;

  // Custom filter function to separate articles for different layouts
  // Articles 2 and 3 are in the left column (horizontal cards)
  const leftColumnArticles = miniArticles.slice(0, 2);
  // Articles 4 and 5 are below the left column, taking up full width in the original image (vertical cards)
  const bottomColumnArticles = miniArticles.slice(2);

  return (
    // Outer container: Full width, centered max-width, general padding
    <div className="container mx-auto px-4 py-6 font-sans bg-white min-h-screen">
      {/* Section Header */}
      <SectionHeader title="রাজনীতি" />
      {/* Main Grid Layout: 3/4 for content, 1/4 for sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column: Main Content (3/4 width on large screens) */}
        <div className="lg:col-span-3">
          {/* Featured Article (The Hero) */}
          <FeaturedArticle {...featuredArticle} />

          {/* Top Row of Smaller Articles (Grid layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {leftColumnArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {/* Bottom Row of Smaller Articles (Vertical layout, spans full column width) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mt-6">
            {bottomColumnArticles.map((article) => (
              // Using the specialized VerticalArticleCard for the two articles at the bottom-left
              <VerticalArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        <AdCard
          ad={{
            title: "ঈদ অফার",
            details: "বিশেষ ছাড়!",
            imageUrl: "/ads/image.png",
          }}
        ></AdCard>
      </div>
      <AdvertisementBanner/>
    </div>
  );
};

export default PoliticsSection;
