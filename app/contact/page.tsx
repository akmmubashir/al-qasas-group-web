import React from "react";
import Header from "../components/header";
import BannerSection from "../components/bannerSection";
import Footer from "../components/footer";
// import ContactInfoSection from "./components/contactInfoSection";
import ContactFormSection from "./components/contactFormSection";
import OfficesSection from "./components/officesSection";
import CallToActionSection from "../home/components/callToActionSection";

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
