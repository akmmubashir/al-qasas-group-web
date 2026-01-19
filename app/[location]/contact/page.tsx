import React from "react";
// import ContactInfoSection from "./components/contactInfoSection";
import ContactFormSection from "./components/contactFormSection";
import OfficesSection from "./components/officesSection";
import Header from "@/app/components/header";
import BannerSection from "@/app/components/bannerSection";
import Footer from "@/app/components/footer";
import CallToActionSection from "@/app/home/components/callToActionSection";

// type Props = {}

const page = () => {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title="Contact Us" />
      {/* <ContactInfoSection /> */}
      <ContactFormSection />
      <OfficesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default page;
