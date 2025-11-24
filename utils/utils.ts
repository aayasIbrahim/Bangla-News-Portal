import moment from "moment-hijri";

// English/Arabic digits → Bangla digits
function toBanglaDigits(str: string) {
  const bnDigits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];
  const arDigits = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];

  return str
    // English digits → Bangla
    .replace(/[0-9]/g, (d) => bnDigits[parseInt(d)])
    // Arabic digits → Bangla
    .replace(/[٠-٩]/g, (d) => bnDigits[arDigits.indexOf(d)]);
}

// বাংলা মাস (Gregorian)
const banglaMonths = [
  "বৈশাখ",
  "জ্যৈষ্ঠ",
  "আষাঢ়",
  "শ্রাবণ",
  "ভাদ্র",
  "আশ্বিন",
  "কার্তিক",
  "অগ্রহায়ণ",
  "পৌষ",
  "মাঘ",
  "ফাল্গুন",
  "চৈত্র",
];

// হিজরি মাস → বাংলায়
const hijriMonthsBangla = [
  "মুহররম",
  "সফর",
  "রবিউল আউয়াল",
  "রবিউল থানি",
  "জমাদিউল আউয়াল",
  "জমাদিউল থানি",
  "রজব",
  "শাবান",
  "রমজান",
  "শাওয়াল",
  "জিলকদ",
  "জিলহজ",
];

// বাংলা তারিখ (Gregorian)
function getBanglaDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear() - 593;

  return toBanglaDigits(`${day} ${banglaMonths[month]}, ${year} বঙ্গাব্দ`);
}

// বাংলা ইংরেজি তারিখ
function getEnglishDateBangla(date: Date) {
  return date.toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// হিজরি → বাংলায়
function getHijriDateBangla() {
  const h = moment();
  const day = toBanglaDigits(h.format("iD")); // হিজরি দিন
  const monthIndex = h.iMonth(); // 0-11
  const year = toBanglaDigits(h.format("iYYYY"));

  const monthBangla = hijriMonthsBangla[monthIndex];

  return `${day} ${monthBangla}, ${year} হিজরি`;
}

// সব date একসাথে return
export function getAllDates() {
  const now = new Date();

  const englishBangla = getEnglishDateBangla(now); // ইংরেজি → বাংলায়
  const bangla = getBanglaDate(now);               // বাংলা → বাংলায়
  const hijriBangla = getHijriDateBangla();       // হিজরি → বাংলায়

  return `${englishBangla} | ${bangla} | ${hijriBangla}`;
}

///Cloudinary function
export const uploadToCloudinary = async (file: File) => {
  if (!file) throw new Error("No file provided");
  const formData = new FormData();
  formData.append("file", file); // Cloudinary expects 'file' field
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error("Cloudinary error:", error);
    throw new Error(error.error.message || "Upload failed");
  }

  const data = await res.json();
  return data.secure_url;
};
