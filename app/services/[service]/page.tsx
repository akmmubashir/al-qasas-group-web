import React from "react";
import Header from "../../components/header";
import BannerSection from "../../components/bannerSection";
// import ServiceDetailSection from "../components/serviceDetailSection";
// import ServiceContextSection from "../components/serviceContextSection";
import ServiceContactForm from "../components/serviceContactForm";
import Footer from "../../components/footer";

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

// Service data mapping
const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    icon: string;
    features: string[];
    benefits: string[];
    context: Array<{
      heading: string;
      description: string;
      icon?: string;
    }>;
  }
> = {
  "movable-partitions": {
    title: "Movable Partitions & Ironmongeries",
    description:
      "High-quality movable partition systems and ironmongery solutions for flexible workspace design and modern office environments.",
    icon: "🏗️",
    features: [
      "Modular partition systems for flexible office layouts",
      "Customizable designs to match your brand aesthetic",
      "Soundproof options for improved privacy",
      "Easy installation and reconfiguration",
      "Durable materials built for long-term use",
    ],
    benefits: [
      "Maximize space utilization and efficiency",
      "Create flexible work environments that adapt to your needs",
      "Reduce overall office setup and renovation costs",
      "Improve acoustics and employee comfort",
      "Professional appearance with premium finish options",
    ],
    context: [
      {
        heading: "Modern Design",
        description:
          "Contemporary partition systems that blend functionality with aesthetics for professional work environments.",
        icon: "🎨",
      },
      {
        heading: "Easy Installation",
        description:
          "Quick and hassle-free installation process with minimal disruption to your business operations.",
        icon: "⚙️",
      },
      {
        heading: "Cost Effective",
        description:
          "Affordable solutions that provide excellent value without compromising on quality and durability.",
        icon: "💰",
      },
    ],
  },
  "project-support": {
    title: "Project Support",
    description:
      "Comprehensive project management and support services to ensure timely delivery and optimal resource utilization.",
    icon: "📋",
    features: [
      "End-to-end project management services",
      "Resource planning and optimization",
      "Timeline and budget tracking",
      "Quality assurance and control",
      "Risk management and mitigation strategies",
    ],
    benefits: [
      "On-time and within-budget project delivery",
      "Reduced project risks and complications",
      "Improved team coordination and communication",
      "Better resource allocation and utilization",
      "Enhanced project transparency and reporting",
    ],
    context: [
      {
        heading: "Expert Management",
        description:
          "Experienced project managers with proven track records in delivering complex projects on schedule.",
        icon: "👥",
      },
      {
        heading: "Real-time Tracking",
        description:
          "Complete visibility into project progress with transparent reporting and status updates.",
        icon: "📊",
      },
      {
        heading: "Risk Mitigation",
        description:
          "Proactive identification and management of risks to ensure smooth project execution.",
        icon: "🛡️",
      },
    ],
  },
  transportation: {
    title: "Transportation",
    description:
      "Reliable and efficient transportation solutions for goods and logistics management across the region.",
    icon: "🚚",
    features: [
      "Full fleet of modern vehicles",
      "Real-time tracking and monitoring",
      "Professional and trained drivers",
      "Flexible scheduling options",
      "Secure and insured shipments",
    ],
    benefits: [
      "Reliable delivery with minimal delays",
      "Cost-effective logistics solutions",
      "Real-time visibility of shipments",
      "Safe and secure handling of goods",
      "Expanded market reach across regions",
    ],
    context: [
      {
        heading: "Modern Fleet",
        description:
          "Well-maintained vehicles equipped with GPS tracking for safe and efficient transportation.",
        icon: "🚛",
      },
      {
        heading: "Professional Drivers",
        description:
          "Trained and certified drivers committed to safe and timely delivery of your cargo.",
        icon: "🚗",
      },
      {
        heading: "Wide Coverage",
        description:
          "Extensive network covering major cities and regions for comprehensive logistics support.",
        icon: "🗺️",
      },
    ],
  },
  "corporate-services": {
    title: "Corporate Services",
    description:
      "Professional corporate solutions including administrative support, consulting, and strategic business services.",
    icon: "🏢",
    features: [
      "Business consulting and strategy development",
      "Administrative support and management",
      "HR and talent management services",
      "Financial planning and analysis",
      "Regulatory compliance assistance",
    ],
    benefits: [
      "Strategic guidance for business growth",
      "Reduced operational overhead",
      "Improved HR and talent management",
      "Enhanced financial decision-making",
      "Ensured regulatory compliance",
    ],
    context: [
      {
        heading: "Strategic Consulting",
        description:
          "Expert advisors helping you develop and execute business strategies for sustainable growth.",
        icon: "💼",
      },
      {
        heading: "Talent Management",
        description:
          "Comprehensive HR solutions to attract, develop, and retain top talent in your organization.",
        icon: "👔",
      },
      {
        heading: "Compliance Support",
        description:
          "Ensure your business meets all regulatory requirements and industry standards.",
        icon: "✅",
      },
    ],
  },
  "it-solutions": {
    title: "IT Solutions",
    description:
      "Cutting-edge information technology solutions to streamline operations and enhance digital transformation.",
    icon: "💻",
    features: [
      "Cloud infrastructure and migration",
      "Cybersecurity and data protection",
      "Network design and optimization",
      "Custom software development",
      "IT support and maintenance services",
    ],
    benefits: [
      "Enhanced security and data protection",
      "Scalable and flexible IT infrastructure",
      "Reduced IT operational costs",
      "Improved business continuity",
      "Accelerated digital transformation",
    ],
    context: [
      {
        heading: "Cloud Solutions",
        description:
          "Secure and scalable cloud infrastructure supporting your business growth and flexibility.",
        icon: "☁️",
      },
      {
        heading: "Cybersecurity",
        description:
          "Advanced security measures protecting your data and systems from evolving threats.",
        icon: "🔒",
      },
      {
        heading: "24/7 Support",
        description:
          "Round-the-clock technical support ensuring minimal downtime and maximum productivity.",
        icon: "🔧",
      },
    ],
  },
};

const page = async ({ params }: ServicePageProps) => {
  const { service } = await params;
  const serviceSlug = decodeURIComponent(service);
  const serviceData =
    servicesData[serviceSlug] || servicesData["movable-partitions"];

  return (
    <div className="min-h-dvh overflow-hidden">
      <Header />
      <BannerSection title={serviceData.title} />
      {/* <ServiceDetailSection
        title={serviceData.title}
        description={serviceData.description}
        icon={serviceData.icon}
        features={serviceData.features}
        benefits={serviceData.benefits}
      />
      <ServiceContextSection
        title="Why Choose Us for This Service?"
        subtitle="Discover what makes our approach unique and effective for your needs"
        content={serviceData.context}
      /> */}
      <ServiceContactForm serviceName={serviceData.title} />
      <Footer />
    </div>
  );
};

export default page;
