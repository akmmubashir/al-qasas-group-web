"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useLocationStore } from "../store/locationStore";
import { locationList } from "../utils/data/locations";

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const { setSelectedLocation } = useLocationStore();

  useEffect(() => {
    if (params.location) {
      const locationCode =
        typeof params.location === "string"
          ? params.location.toUpperCase()
          : Array.isArray(params.location) && params.location[0]
            ? params.location[0].toUpperCase()
            : "SA";

      const location = locationList.find(
        (loc) => loc.code.toLowerCase() === locationCode.toLowerCase(),
      );

      // Always set a valid location, fallback to Saudi Arabia
      if (location) {
        setSelectedLocation(location);
      } else {
        const defaultLocation = locationList.find((loc) => loc.code === "SA");
        if (defaultLocation) {
          setSelectedLocation(defaultLocation);
        }
      }
    }
  }, [params.location, setSelectedLocation]);

  return <>{children}</>;
}
