// pages/NewsHomepage.tsx (or components/NewsHomepage.tsx)
import React from 'react';
import HeroCard from '@/components/bangladesh/HeroCard'; // Adjust path
import StandardArticleCard from '@/components/bangladesh/StandardArticleCard'; // Adjust path
import MostReadItemComponent from '@/components/bangladesh/MostReadItemComponent'; // Adjust path
import SectionHeader from './ui/SectionHeader';
// types/article.ts (re-using and extending if necessary)

export interface Article {
  id: number | string;
  title: string;
  image: string;
  summary?: string; // For articles with more text
}

// For the right sidebar's "সর্বাধিক পঠিত" (Most Read) section
export interface MostReadItem {
  id: number | string;
  title: string;
  authorImage: string; // Image of the author/person in the thumbnail
} // Adjust path

// Dummy Data
const DUMMY_ARTICLES: Article[] = [
  { id: 'h1', title: 'গণতন্ত্রকে আষ্টেপৃষ্টে বেঁধে সরাকারের', image: 'https://i.imgur.com/8Q9rC1M.jpg', summary: 'দীর্ঘ বিবরণ এখানে থাকবে...' },
  { id: 'm1', title: 'যুবরাজ গোল্ডেন গ্লোবে দারুণ ট্রাম্পস', image: 'https://i.imgur.com/k9b6N8n.jpg', summary: 'বিভিন্ন সংবাদিকদের মুখে শোনা যায় ট্রাম্পস' },
  { id: 'm2', title: 'নির্বাচনকারী দল অংশগ্রহণের জন্য কমিটি গঠন করবে, প্রথম কমিটি গঠিত হয়েছে', image: 'https://i.imgur.com/rM7YmUq.jpg', summary: 'নির্বাচনকারী দল অংশগ্রহণের জন্য কমিটি গঠন করবে, প্রথম কমিটি গঠিত হয়েছে' },
  { id: 'm3', title: 'বিতর্কিত উপনির্বাচন রুখেছে যুবলীগ মানে নিয়ন্ত্রণ', image: 'https://i.imgur.com/H1tN72Q.jpg', summary: 'বিতর্কিত উপনির্বাচন রুখেছে যুবলীগ মানে নিয়ন্ত্রণ' },
];

const DUMMY_MOST_READ: MostReadItem[] = [
  { id: 'mr1', title: 'ইন্টারনেটের খরচ কমানোর নতুন সমস্যা', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
  { id: 'mr2', title: 'সমিট প্রকল্পের অর্থনৈতিক আলোচনা', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
  { id: 'mr3', title: 'আকাশপথে যোগাযোগ বৃদ্ধি', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
  { id: 'mr4', title: 'ইন্টারনেটের খরচ কমানোর নতুন সমস্যা', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
  { id: 'mr5', title: 'সমিট প্রকল্পের অর্থনৈতিক আলোচনা', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
  { id: 'mr6', title: 'আকাশপথে যোগাযোগ বৃদ্ধি', authorImage: 'https://i.imgur.com/y8h8H7y.jpg' },
];

const BangladeshSection: React.FC = () => {
  const heroArticle = DUMMY_ARTICLES[0];
  const mainContentArticles = DUMMY_ARTICLES.slice(1);

  return (
    <section className="bg-white min-h-screen">
        <div className="p-4 sm:p-8 b container mx-auto">
      {/* Top Header - Example "বাণিজ্য >" (You might have a global Header component) */}
      <SectionHeader title=' বাংলাদেশ' />

      {/* --- MAIN LAYOUT GRID --- */}
      {/* Default to single column stack, use grid for md and lg screens */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-12">
        
        {/* LEFT MAIN CONTENT AREA (Hero + 3 Standard Articles) */}
        {/* On mobile, this will just stack. On md+, it takes 2/3 of the width (md:col-span-2) or 9/12 (lg:col-span-9) */}
        <div className="md:col-span-2 lg:col-span-9 flex flex-col gap-6">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2"> {/* Hero Card takes 2/3 of space on md+ */}
              {heroArticle && <HeroCard article={heroArticle} />}
            </div>
            {/* Top Right Banner (e.g., "অরিজিন" ad) */}
            <div className="col-span-1 bg-gray-100 flex items-center justify-center p-4 rounded-lg">
                <img src="https://i.imgur.com/y8h8H7y.jpg" alt="Origin Ad" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
          
          {/* Three Standard Articles below the Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainContentArticles.map(article => (
              <StandardArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR (Most Read Section + Tabs) */}
        {/* On mobile, this stacks after the main content. On md+, it takes 1/3 (md:col-span-1) or 3/12 (lg:col-span-3) */}
        <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-6">
          {/* Most Read Items */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            {DUMMY_MOST_READ.map(item => (
              <MostReadItemComponent key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default BangladeshSection;