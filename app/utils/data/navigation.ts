type Props = {
  name: string;
  href: string;
  dropMenu?: Props[];
};

export const navigationData: Props[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropMenu: [
      {
        name: "Movable Partitions & Ironmongeries",
        href: "/services/movable-partitions",
      },
      { name: "Project Support", href: "/services/project-support" },
      { name: "Transportation", href: "/services/transportation" },
      { name: "Corporate Services", href: "/services/corporate-services" },
      { name: "IT Solutions", href: "/services/it-solutions" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];
