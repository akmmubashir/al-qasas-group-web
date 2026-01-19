import { locationServicesData } from "./locationData";

type Props = {
  name: string;
  href: string;
  dropMenu?: Props[];
  useLocation?: boolean; // Flag to indicate if location should be included in URL
};

// Helper function to build location-aware URLs
export const buildLocationUrl = (
  path: string,
  location: string,
  useLocation: boolean = true,
): string => {
  if (!useLocation) {
    return path;
  }

  const locationCode = location.toLowerCase();
  if (path === "" || path === "/") {
    return `/${locationCode}`;
  }
  return `/${locationCode}${path}`;
};

// Get navigation data based on location
export const getNavigationData = (locationCode: string = "AE"): Props[] => {
  const services =
    locationServicesData[locationCode as keyof typeof locationServicesData] ||
    locationServicesData.AE;

  return [
    { name: "Home", href: "/", useLocation: false },
    { name: "About", href: "/about", useLocation: false },
    {
      name: "Services",
      href: "/services",
      useLocation: true,
      dropMenu: services.map((service) => ({
        name: service.name,
        href: service.href,
        useLocation: true,
      })),
    },
    { name: "Contact Us", href: "/contact", useLocation: true },
  ];
};
