import React from "react";
import ServicesSection from "./components/servicesSection";
import Header from "@/app/components/header";
import BannerSection from "@/app/components/bannerSection";
import Footer from "@/app/components/footer";
// type Props = {}

const page = () => {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title="Services" />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default page;
