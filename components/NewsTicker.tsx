"use client"

import React from "react";
import { Square } from "lucide-react";
import { useGetNewsQuery} from "@/app/redux/features/news/newsApi";


const NewsTicker = () => {
  const { data, isLoading, error } = useGetNewsQuery("all");

 const headlines = data?.newsheadline || [];


  const duration = (headlines.length || 1) * 6;

  return (
    <div
      className="w-full bg-white border-b-[1.3px] border-black"
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

          {/* CONTENT */}
          <div className="marquee-wrapper flex-grow h-10 bg-gray-100 overflow-hidden relative">

            {isLoading && (
              <div className="flex items-center h-full px-4">
                <span className="text-sm text-gray-600">লোড হচ্ছে...</span>
              </div>
            )}

            {error && (
              <div className="flex items-center h-full px-4">
                <span className="text-sm text-red-600">ডেটা লোডে সমস্যা হয়েছে</span>
              </div>
            )}

            {headlines.length > 0 && (
              <ul className="marquee-track absolute top-0 left-0 flex items-center h-full whitespace-nowrap">

                {headlines.map((item, idx) => (
                  <li key={`a-${idx}`} className="flex items-center">
                    <Square size={8} fill="#059669" className="mx-4 text-emerald-500 flex-shrink-0" />
                    <a href={`#n-${idx}`} className="text-black hover:text-red-600 transition text-sm font-medium pr-10">
                      {item.title}
                    </a>
                  </li>
                ))}

                {/* LOOP 2 */}
                {headlines.map((item, idx) => (
                  <li key={`b-${idx}`} className="flex items-center">
                    <Square size={8} fill="#059669" className="mx-4 text-emerald-500 flex-shrink-0" />
                    <a href={`#n-${idx}`} className="text-black hover:text-red-600 transition text-sm font-medium pr-10">
                      {item.title}
                    </a>
                  </li>
                ))}

              </ul>
            )}

          </div>

        </div>
      </section>
    </div>
  );
};

export default NewsTicker;
