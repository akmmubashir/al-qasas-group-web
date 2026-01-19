import React from "react";
import CompanyOverviewSection from "./components/companyOverviewSection";
import MissionVisionSection from "./components/missionVisionSection";
import TeamSection from "./components/teamSection";
// import CertificationsSection from "./components/certificationsSection";
import TestimonialsSection from "../home/components/testimonialsSection";
import Header from "@/app/components/header";
import BannerSection from "@/app/components/bannerSection";
import Footer from "@/app/components/footer";

// type Props = {}

const page = () => {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title="About Us" />
      <CompanyOverviewSection />
      <MissionVisionSection />
      <TeamSection />
      {/* <CertificationsSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default page;
