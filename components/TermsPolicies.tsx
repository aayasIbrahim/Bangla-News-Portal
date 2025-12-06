import React from "react";

function TermsPolicies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        শর্তাবলি ও নীতিমালা
      </h1>

      {/* ১. সাইট ব্যবহারের শর্তাবলি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ১. সাইট ব্যবহারের শর্তাবলি
        </h2>
        <p className="text-gray-700">
          স্বাগতম{" "}
          <span className="font-bold text-red-500">TSB Vision News</span>-এ।
          ওয়েবসাইটটি ব্যবহার করার মাধ্যমে আপনি নিম্নলিখিত শর্তাবলীর সঙ্গে সম্মত
          হচ্ছেন:
          <ul className="list-disc list-inside mt-2">
            <li>
              ওয়েবসাইটে প্রকাশিত কন্টেন্ট শুধুমাত্র ব্যক্তিগত ও তথ্যগত উদ্দেশ্যে
              ব্যবহার করা যাবে।
            </li>
            <li>
              অননুমোদিতভাবে কন্টেন্ট কপি করা, পুনঃপ্রকাশ করা বা বাণিজ্যিক
              উদ্দেশ্যে ব্যবহার করা নিষিদ্ধ।
            </li>
            <li>ব্যবহারকারীর অবৈধ কর্মকাণ্ডের দায় একান্তই ব্যবহারকারীর।</li>
          </ul>
        </p>
      </section>

      {/* ২. প্রাইভেসি নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">২. প্রাইভেসি নীতি</h2>
        <p className="text-gray-700">
          আমরা আপনার ব্যক্তিগত তথ্যকে সম্মান করি। এখানে কিছু গুরুত্বপূর্ণ বিষয়:
          <ul className="list-disc list-inside mt-2">
            <li>
              আমরা ব্যবহারকারীর তথ্য সংগ্রহ করি, যেমন নাম, ইমেইল, মন্তব্য
              ইত্যাদি।
            </li>
            <li>
              কুকিজ এবং অন্যান্য ট্র্যাকিং প্রযুক্তি ব্যবহার করা হয় ব্যবহারকারীর
              অভিজ্ঞতা উন্নয়নের জন্য।
            </li>
            <li>
              তৃতীয় পক্ষের সাথে আপনার ব্যক্তিগত তথ্য শেয়ার করা হবে না, সেসময় আইন
              অনুযায়ী আমরা বাধ্য থাকলে তথ্য সরবরাহ করতে পারি।
            </li>
          </ul>
        </p>
      </section>

      {/* ৩. কপিরাইট ও বুদ্ধিমত্তা সংক্রান্ত নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৩. কপিরাইট ও বুদ্ধিমত্তা সংক্রান্ত নীতি
        </h2>
        <p className="text-gray-700">
          ওয়েবসাইটের সমস্ত নিউজ আর্টিকেল, ছবি, ভিডিও ও অন্যান্য কন্টেন্ট কপিরাইট
          দ্বারা সুরক্ষিত। অনুমতি ছাড়া কন্টেন্ট পুনঃপ্রকাশ বা বাণিজ্যিকভাবে
          ব্যবহার করা যাবে না। অনুমতি পেতে{" "}
          <span className="text-blue-600 underline cursor-pointer">
            যোগাযোগ করুন
          </span>
          ।
        </p>
      </section>

      {/* ৪. দায়মুক্তি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৪. দায়মুক্তি</h2>
        <p className="text-gray-700">
          ওয়েবসাইটে প্রকাশিত তথ্যের যথার্থতা নিশ্চিত করার চেষ্টা করা হয়, কিন্তু
          আমরা এর পূর্ণ নিশ্চয়তা দিচ্ছি না। ওয়েবসাইট ব্যবহার করে কোনো ক্ষতি হলে,
          তার দায় [আপনার ওয়েবসাইটের নাম]-এর নয়।
        </p>
      </section>

      {/* ৫. মুক্তির শর্ত */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৫. মুক্তির শর্ত</h2>
        <p className="text-gray-700">
          সাইট ব্যবহারের ফলে প্রাপ্ত কোনো ক্ষতি বা ক্ষতির জন্য আমরা দায়ী নই।
          ব্যবহারকারী স্বতঃস্ফূর্তভাবে ওয়েবসাইট ব্যবহার করবে।
        </p>
      </section>

      {/* ৬. বয়স ও যোগ্যতা */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৬. বয়স ও যোগ্যতা</h2>
        <p className="text-gray-700">
          ওয়েবসাইট ব্যবহারের জন্য ন্যূনতম বয়স ১৮ বছর। ১৮ বছরের কম বয়সী
          ব্যবহারকারীর তথ্য সংগ্রহের আগে অভিভাবকের অনুমতি প্রয়োজন।
        </p>
      </section>

      {/* ৭. লিঙ্ক ও তৃতীয় পক্ষের কন্টেন্ট */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৭. লিঙ্ক ও তৃতীয় পক্ষের কন্টেন্ট
        </h2>
        <p className="text-gray-700">
          আমাদের ওয়েবসাইটে অন্য ওয়েবসাইটের লিঙ্ক থাকতে পারে। আমরা তৃতীয় পক্ষের
          ওয়েবসাইট বা কন্টেন্টের সঠিকতার দায় নই।
        </p>
      </section>

      {/* ৮. সংশোধন ও পরিবর্তন নীতি */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          ৮. সংশোধন ও পরিবর্তন নীতি
        </h2>
        <p className="text-gray-700">
          আমরা যেকোনো সময় শর্তাবলি ও নীতিমালায় পরিবর্তন করতে পারি।
          ব্যবহারকারীদের পরামর্শ দেওয়া হয় নিয়মিত শর্তাবলি পড়ার জন্য।
        </p>
      </section>

      {/* ৯. যোগাযোগের তথ্য */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">৯. যোগাযোগের তথ্য</h2>
        <p className="text-gray-700">
          যদি শর্তাবলি বা নীতিমালা সংক্রান্ত কোনো প্রশ্ন থাকে, আমাদের সাথে
          যোগাযোগ করুন:
          <br />
          ইমেইল:{" "}
          <span className="text-blue-600 underline cursor-pointer">
            {" "}
            tsbvisionnews.net@gmail.com
          </span>
          <br />
          ফোন:01929450836
        </p>
      </section>
    </div>
  );
}

export default TermsPolicies;
