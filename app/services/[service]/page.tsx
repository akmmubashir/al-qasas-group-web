import React from "react";
import Header from "../../components/header";
import BannerSection from "../../components/bannerSection";
import ServiceDetailSection from "../components/serviceDetailSection";
import ServiceContextSection from "../components/serviceContextSection";
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
    subtitle: string;
    description: string;
    icon: string;
    image: string;
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
    subtitle: "Flexible Architectural Solutions for Modern Workspaces",
    description:
      "Our Movable Partitions & Ironmongeries service provides a comprehensive range of modular partition systems designed to transform any workspace into a flexible, scalable, and aesthetically balanced environment. Whether you're building modern office layouts, collaborative zones, private meeting rooms, or multi-purpose spaces, our solutions ensure both functional adaptability and visual elegance. We focus on creating structures that are easy to install, reconfigure, and maintain, making them ideal for organizations aiming to optimize their physical environments without undertaking large-scale construction. With durable materials, customizable finishes, and soundproofing options, our partition systems enhance productivity, privacy, and overall workflow efficiency.",
    icon: "🏗️",
    image: "/assets/images/movablePartition.webp",
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
    subtitle: "End-to-End Project Management for Smooth Execution",
    description:
      "Our Project Support service delivers a full spectrum of management, planning, monitoring, and coordination solutions to ensure seamless project execution from start to finish. We work closely with teams, stakeholders, and vendors to align timelines, budgeting, resource allocation, and scope management. Whether it's a construction project, corporate initiative, or operational setup, we ensure every stage is executed with precision and efficiency. With real-time tracking, detailed reporting, and proactive risk mitigation, our service enhances communication, reduces errors, and supports overall project success.",
    icon: "📋",
    image: "/assets/images/project.webp",
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
    subtitle: "Reliable Logistics and Secure Goods Movement",
    description:
      "Our Transportation service delivers dependable, secure, and efficient logistics solutions designed to support businesses of all sizes. With a fleet of modern, well-maintained vehicles equipped with GPS tracking, we ensure timely pickup, safe handling, and reliable delivery of goods across regional and remote locations. Our trained drivers and logistics team coordinate every step, from scheduling to route optimization, ensuring maximum efficiency and minimal delay. Whether you're managing daily shipments, bulk deliveries, or specialized cargo, our transportation network provides the scalability and safety your business needs.",
    icon: "🚚",
    image: "/assets/images/transportation.webp",
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
    subtitle: "Professional Administrative & Business Support Solutions",
    description:
      "Our Corporate Services division offers a diverse range of administrative, operational, and strategic solutions designed to support businesses in their day-to-day functions as well as long-term planning. From HR management and compliance support to financial consulting and workflow optimization, we help organizations streamline operations and build strong foundations for growth. Our team of experts ensures HR processes, documentation, licensing, and compliance are handled with precision, allowing businesses to focus on core activities while improving efficiency and reducing overhead costs.",
    icon: "🏢",
    image: "/assets/images/corporate.webp",
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
    subtitle: "Innovative Digital & Technology Infrastructure Services",
    description:
      "Our IT Solutions service empowers organizations with modern technological systems designed to accelerate digital transformation, enhance security, and improve operational efficiency. From cloud migration and cybersecurity to custom software development and IT infrastructure optimization, we deliver scalable solutions that support both current needs and future growth. We help businesses transition into secure, digitally enabled environments where operations run smoothly, data remains protected, and technology becomes an asset rather than a challenge. With 24/7 support and ongoing maintenance, we ensure your systems stay updated, reliable, and efficient.",
    icon: "💻",
    image: "/assets/images/it-solution.webp",
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
