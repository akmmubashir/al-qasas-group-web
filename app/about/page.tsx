import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BannerSection from "../components/bannerSection";
import CompanyOverviewSection from "./components/companyOverviewSection";
import MissionVisionSection from "./components/missionVisionSection";
import TeamSection from "./components/teamSection";
// import CertificationsSection from "./components/certificationsSection";
import TestimonialsSection from "../home/components/testimonialsSection";

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
