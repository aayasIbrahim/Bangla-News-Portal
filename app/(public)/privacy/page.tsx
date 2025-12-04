"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">গোপনীয়তা নীতি</h1>

      {/* ভূমিকা */}
      <section className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold text-red-500">TSB Vision News</span>{" "}
          আপনাদের গোপনীয়তা রক্ষা করতে সর্বদা প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি
          ব্যাখ্যা করে আমরা কীভাবে ব্যবহারকারীর তথ্য সংগ্রহ, ব্যবহার ও সংরক্ষণ
          করি।
        </p>
      </section>

      {/* ১. তথ্য সংগ্রহ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">১. তথ্য সংগ্রহ</h2>
        <p className="text-gray-700">
          আমরা ব্যবহারকারীর থেকে নিম্নলিখিত তথ্য সংগ্রহ করতে পারি:
          <ul className="list-disc list-inside mt-2">
            <li>ব্যবহারকারীর নাম, ইমেইল, ফোন নম্বর ইত্যাদি সরবরাহকৃত তথ্য।</li>
            <li>
              ওয়েবসাইট ব্যবহারের সময় স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য যেমন IP ঠিকানা,
              ব্রাউজার টাইপ, ভিজিট সময়।
            </li>
            <li>কুকিজ ও অন্যান্য ট্র্যাকিং প্রযুক্তির মাধ্যমে প্রাপ্ত তথ্য।</li>
          </ul>
        </p>
      </section>

      {/* ২. তথ্য ব্যবহার */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">২. তথ্য ব্যবহার</h2>
        <p className="text-gray-700">
          আমরা সংগ্রহ করা তথ্য ব্যবহার করি নিম্নলিখিত উদ্দেশ্যে:
          <ul className="list-disc list-inside mt-2">
            <li>ওয়েবসাইটের অভিজ্ঞতা উন্নত করা।</li>
            <li>নিউজলেটার, বিজ্ঞপ্তি বা গুরুত্বপূর্ণ আপডেট পাঠানো।</li>
            <li>সাইটের নিরাপত্তা ও অবৈধ কার্যকলাপ নিরীক্ষণ।</li>
          </ul>
        </p>
      </section>

      {/* ৩. তথ্য শেয়ার করা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৩. তথ্য শেয়ার করা</h2>
        <p className="text-gray-700">
          আমরা ব্যবহারকারীর ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না। তবে,
          আইন অনুযায়ী বাধ্য থাকলে বা সুরক্ষা নিশ্চিত করার প্রয়োজন হলে তথ্য
          প্রকাশ করা যেতে পারে। এছাড়া, আমাদের সার্ভার ও প্রযুক্তি প্রদানকারীকে
          সীমিত উদ্দেশ্যে তথ্য শেয়ার করা হতে পারে (যেমন হোস্টিং ও সিকিউরিটি)।
        </p>
      </section>

      {/* ৪. কুকিজ নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৪. কুকিজ নীতি</h2>
        <p className="text-gray-700">
          ওয়েবসাইটে কুকিজ ব্যবহার করা হয় ব্যবহারকারীর অভিজ্ঞতা উন্নত এবং
          ওয়েবসাইট কার্যকারিতা বিশ্লেষণ করার জন্য। ব্যবহারকারী ব্রাউজার সেটিংস
          থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে কিছু ফিচার ঠিকমত কাজ নাও করতে
          পারে।
        </p>
      </section>

      {/* ৫. তথ্য সংরক্ষণ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৫. তথ্য সংরক্ষণ</h2>
        <p className="text-gray-700">
          আমরা ব্যবহারকারীর তথ্য শুধুমাত্র প্রয়োজনীয় সময়ের জন্য সংরক্ষণ করি এবং
          অতিরিক্ত সময়ের পর নিরাপদভাবে মুছে ফেলি।
        </p>
      </section>

      {/* ৬. ব্যবহারকারীর অধিকার */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৬. ব্যবহারকারীর অধিকার</h2>
        <p className="text-gray-700">
          ব্যবহারকারী চাইলে যে কোনো সময় তাদের ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন
          বা মুছে ফেলার অনুরোধ করতে পারেন। যোগাযোগ করুন:{" "}
          <span className="text-blue-600 underline cursor-pointer">
            info@tsbvisionnews.com
          </span>
        </p>
      </section>

      {/* ৭. নিরাপত্তা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৭. নিরাপত্তা</h2>
        <p className="text-gray-700">
          আমরা ব্যবহারকারীর তথ্য সুরক্ষিত রাখার জন্য যথাযথ প্রযুক্তি ও প্রক্রিয়া
          ব্যবহার করি। তবে, ইন্টারনেটে 100% নিরাপত্তা নিশ্চিত করা সম্ভব নয়, তাই
          কোনো ক্ষতির জন্য ওয়েবসাইট দায়ী নয়।
        </p>
      </section>

      {/* ৮. নীতিমালা পরিবর্তন */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৮. নীতিমালা পরিবর্তন</h2>
        <p className="text-gray-700">
          আমরা যে কোনো সময় এই গোপনীয়তা নীতি পরিবর্তন করতে পারি। পরিবর্তন হলে
          ব্যবহারকারীদের ওয়েবসাইটে নিয়মিত আপডেট দেখার পরামর্শ দেওয়া হয়।
        </p>
      </section>

      {/* ৯. যোগাযোগ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৯. যোগাযোগ</h2>
        <p className="text-gray-700">
          যদি গোপনীয়তা নীতি সংক্রান্ত কোনো প্রশ্ন থাকে, আমাদের সাথে যোগাযোগ
          করুন:
          <br />
          ইমেইল:{" "}
          <span className="text-blue-600 underline cursor-pointer">
            {" "}
            tsbvisionnews.net@gmail.com
          </span>
          <br />
          ফোন: 01929450836
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
