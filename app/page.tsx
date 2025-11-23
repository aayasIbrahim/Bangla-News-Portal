
import CommerceSection from "@/components/CommerceSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import HeaderSection from "@/components/HeadlineSection";
import NationalNewsSection from "@/components/NationalNewsSection";
import PoliticsSection from "@/components/PoliticsSection";
import WorldSection from "@/components/WorldSection";
import BangladeshSection from "@/components/BangladeshSection";
export default function Page() {
  return (
    <>
      <HeaderSection />
      <NationalNewsSection />
      <CommerceSection/>
      <BangladeshSection/>
      <PoliticsSection />
      <EntertainmentSection />
      <WorldSection/>
    </>
  );
}
