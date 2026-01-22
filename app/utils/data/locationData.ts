import locationConfig from "./locationConfig.json";

export const locationServicesData = {
  SA: Object.keys(locationConfig.SA.services).map((slug) => ({
    name: slug,
    href: `/services/${slug}`,
  })),
  QA: Object.keys(locationConfig.QA.services).map((slug) => ({
    name: slug,
    href: `/services/${slug}`,
  })),
  AE: Object.keys(locationConfig.AE.services).map((slug) => ({
    name: slug,
    href: `/services/${slug}`,
  })),
};

export const locationContactData = {
  SA: locationConfig.SA.contact,
  QA: locationConfig.QA.contact,
  AE: locationConfig.AE.contact,
};

export const locationOfficesData = {
  SA: locationConfig.SA.offices,
  QA: locationConfig.QA.offices,
  AE: locationConfig.AE.offices,
};

export default locationConfig;
