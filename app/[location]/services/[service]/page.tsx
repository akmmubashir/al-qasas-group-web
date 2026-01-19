import React from "react"; 
import { redirect } from "next/navigation";
import ServiceDetailSection from "../components/serviceDetailSection";
import ServiceContextSection from "../components/serviceContextSection";
import ServiceContactForm from "../components/serviceContactForm"; 
import Header from "@/app/components/header";
import BannerSection from "@/app/components/bannerSection";
import Footer from "@/app/components/footer";
import locationConfig from "@/app/utils/data/locationConfig.json";

interface ServicePageProps {
  params: Promise<{
    service: string;
    location: string;
  }>;
}

const page = async ({ params }: ServicePageProps) => {
  const { service, location } = await params;
  const serviceSlug = decodeURIComponent(service);
  const locationCode = location.toUpperCase() as keyof typeof locationConfig;

  // Check if service is available in this location
  const locationData = locationConfig[locationCode as keyof typeof locationConfig];
  
  if (!locationData) {
    redirect(`/${location}/services`);
  }

  const serviceData = locationData.services[serviceSlug as keyof typeof locationData.services];

  // If service not available in this location, redirect to services page
  if (!serviceData) {
    redirect(`/${location}/services`);
  }

  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title={serviceData.title} />
      <ServiceDetailSection
        title={serviceData.title}
        description={serviceData.description}
        icon={serviceData.icon}
        subtitle={serviceData.subtitle}
        image={serviceData.image}
        features={serviceData.features}
        benefits={serviceData.benefits}
      />
      <ServiceContextSection
        title="Why Choose Us for This Service?"
        subtitle="Discover what makes our approach unique and effective for your needs"
        content={serviceData.context}
      />
      <ServiceContactForm serviceName={serviceData.title} />
      <Footer />
    </div>
  );
};

export default page;
