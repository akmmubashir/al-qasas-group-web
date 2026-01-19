type Location = {
  name: string;
  code: string;
  flag: string;
  lat: number;
  lng: number;
};

export const locationList: Location[] = [
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "/assets/flags/sa.png",
    lat: 23.8859,
    lng: 45.0792,
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "/assets/flags/qa.png",
    lat: 25.3548,
    lng: 51.1839,
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "/assets/flags/ae.png",
    lat: 23.4241,
    lng: 53.8478,
  },
];
