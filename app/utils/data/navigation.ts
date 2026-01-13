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
    href: "#",
    dropMenu: [
      {
        name: "Movable Partitions & Ironmongeries",
        href: "#",
      },
      { name: "Project Support", href: "#" },
      { name: "Transportation", href: "#" },
      { name: "Corporate Services", href: "#" },
      { name: "IT Solutions", href: "#" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];
