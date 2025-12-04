"use client";
import React from "react";
import { MapPin, Phone, Mail, ChevronUp } from "lucide-react";
import Image from "next/image";
import Logo from "../ui/Logo";

const footerLinks = [
  ["সর্বশেষ", "বিশ্ব", "খেলা", "চাকরি"],
  ["রাজনীতি", "অপরাধ", "বিজ্ঞান", "জীবনযাপন"],
  ["বাংলাদেশ", "বাণিজ্য", "মতামত", "প্রযুক্তি"],
];

const bottomLinks = [
  { name: "বিজ্ঞাপন", href: "/ad" },
  { name: "শর্তাবলি ও নীতিমালা", href: "/termsAndPolicies" },
  { name: "গোপনীয়তা নীতি", href: "/privacy" },

];

const NewsFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-12 pt-8 font-sans py-9">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer/bg.png"
          width={1900}
          height={580}
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-black bg-white/90 bg-blend-multiply mt-5">
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-300 py-5">
          {/* Left Column */}
          <div className="md:col-span-1 text-center md:text-left ">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-1">
              <Logo />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm mt-4">
              {footerLinks.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {column.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={`#${link}`}
                        className="hover:text-red-400 transition duration-150 whitespace-nowrap"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="text-center md:text-right w-full md:w-auto">
              <h2 className="text-lg font-bold mb-4">
                ভারপ্রাপ্ত সম্পাদক: এম ডি বাইজীদ
              </h2>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center justify-center md:justify-end">
                  <MapPin size={16} className="mr-2 flex-shrink-0" />
                 বঙ্গবন্ধু রোড, আশুলিয়া বাস স্ট্যান্ড, আশুলিয়া, সাভার, ঢাকা।

                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Phone size={16} className="mr-2 flex-shrink-0" />

                  <a href="tel:01929450836" className="hover:underline">
                    01929450836
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-end">
                  <Mail size={16} className="mr-2 flex-shrink-0" />

                  <a
                    href="mailto:tsbvisionnews.net@gmail.com"
                    className="hover:underline"
                  >
                    tsbvisionnews.net@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-center sm:justify-start py-4 space-x-2 sm:space-x-6 text-xs font-medium relative">
          <ul className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
            {bottomLinks.map((link) => (
              <li
                key={link.name}
                className="flex items-center hover:text-red-400 transition duration-150"
              >
                <span className="w-1.5 h-1.5 bg-red-400 mr-2 flex-shrink-0"></span>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={scrollToTop}
            className="absolute right-0 bottom-4 w-12 h-12 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        {/* Copyright */}
        <div className="py-4 text-center text-xs mt-4 border-t border-gray-200">
          &copy; {new Date().getFullYear()} TSB News24 TV. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default NewsFooter;
