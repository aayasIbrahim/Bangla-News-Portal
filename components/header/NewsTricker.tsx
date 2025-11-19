import React from "react";
import { Square } from "lucide-react";

// ----------------------
// ⭐ Headlines Data
// ----------------------
const headlines = [
  "প্রশাসন ক্যাডার নিয়ে দেশে ফিরে গেল বিশেষ ফ্লাইট চেষ্টার",
  "মুদ্রাস্ফীতি নিয়ন্ত্রণ, বিনিয়োগ বাড়াতে রফতানি বাড়াতে হবে",
  "দীর্ঘদিন ধরে রাজনৈতিক মতপার্থক্য থাকার পরও সুখের নিঃশ্বাস",
  "করোনাভাইরাসের নতুন রূপ নিয়ে জরুরি বৈঠকে বিশেষজ্ঞরা",
  "জাতীয় বাজেটে কৃষি খাতে বিশেষ প্রণোদনা ঘোষণা",
  "শিক্ষাক্ষেত্রে ডিজিটাল প্রযুক্তির ব্যবহার বৃদ্ধি পাচ্ছে"
];

// ----------------------
// ⭐ Main Component
// ----------------------
const NewsTicker = () => {
  const duration = headlines.length * 6;

  return (
    <div
      className="w-full bg-white  border-b border-gray-200"
      style={{ fontFamily: `"Noto Sans Bengali", "Inter", sans-serif` }}
    >
      <style>{`
        @keyframes smooth-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: smooth-marquee ${duration}s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <section className="py-0 sm:py-1 sm:m-[10px]"> 
        <div className="container mx-auto flex items-center overflow-hidden">
          
          {/* LEFT LABEL */}
          <div className="bg-red-600 h-10 flex items-center px-5 md:px-6 shadow-md flex-shrink-0">
            <span className="text-white text-base font-bold whitespace-nowrap">
              শিরোনাম
            </span>
          </div>

          {/* SCROLLING UL MARQUEE */}
          <div className="marquee-wrapper flex-grow h-10 bg-gray-100 overflow-hidden relative">
            
            <ul className="marquee-track absolute top-0 left-0 flex items-center h-full whitespace-nowrap">
              
              {/* LOOP 1 */}
              {headlines.map((item, idx) => (
                <li key={`a-${idx}`} className="flex items-center">
                  <Square
                    size={8}
                    fill="#059669"
                    className="mx-4 text-emerald-500 flex-shrink-0"
                  />
                  <a
                    href={`#n-${idx}`}
                    className="text-black hover:text-red-600 transition text-sm font-medium pr-10"
                  >
                    {item}
                  </a>
                </li>
              ))}

              {/* LOOP 2 — to ensure infinite smooth scroll without gap */}
              {headlines.map((item, idx) => (
                <li key={`b-${idx}`} className="flex items-center">
                  <Square
                    size={8}
                    fill="#059669"
                    className="mx-4 text-emerald-500 flex-shrink-0"
                  />
                  <a
                    href={`#n-${idx}`}
                    className="text-black hover:text-red-600 transition text-sm font-medium pr-10"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NewsTicker;
