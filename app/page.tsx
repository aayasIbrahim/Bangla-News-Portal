
import CommerceSection from "@/components/CommerchSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import HeaderSection from "@/components/HeadlineSection";
import NationalNewsSection from "@/components/NationalNewsSection";
import PoliticsSection from "@/components/PoliticsSection";
import WorldSection from "@/components/WorldSection";


export default function Page() {
  return (
    <>
      <HeaderSection />
      <NationalNewsSection />
      <CommerceSection/>
      <PoliticsSection />
      <EntertainmentSection />
      <WorldSection/>
    </>
  );
}
