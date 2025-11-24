// app/(public)/layout.tsx
import CommerceSection from "@/components/CommerceSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import HeaderSection from "@/components/HeadlineSection";
import NationalNewsSection from "@/components/NationalNewsSection";
import PoliticsSection from "@/components/PoliticsSection";
import WorldSection from "@/components/WorldSection";
import BangladeshSection from "@/components/BangladeshSection";
import SportsSection from "@/components/SportsSection";
import NewsTicker from "@/components/NewsTicker";
import AdvertisementBanner from "@/components/AdvertisementBanner";
export default function Page() {
  return (
    <>

      <NewsTicker />
      <AdvertisementBanner />
      <HeaderSection />
      <NationalNewsSection />
      <CommerceSection />
      <BangladeshSection />
      <PoliticsSection />
      <EntertainmentSection />
      <WorldSection />
      <SportsSection />
    </>
  );
}