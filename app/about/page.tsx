import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BannerSection from "./bannerSection";

// type Props = {}

const page = () => {
  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title="About" />
      <Footer />
    </div>
  );
};

export default page;
