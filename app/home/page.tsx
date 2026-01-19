import React from "react"; 
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import ServicesSection from "./components/servicesSection";
import WhyChooseUsSection from "./components/whyChooseUsSection";
import IndustriesSection from "./components/industriesSection";
import TestimonialsSection from "./components/testimonialsSection";
import PartnersSection from "./components/partnersSection";
import FAQSection from "./components/faqSection";
import CallToActionSection from "./components/callToActionSection"; 
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
// import ProjectsSection from "./components/projectsSection";

// type Props = {}

const HomePage = () => {
  return (
    <div className="min-h-dvh overflow-hidden bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <IndustriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
