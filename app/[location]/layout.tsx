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
          : params.location[0].toUpperCase();

      const location = locationList.find(
        (loc) => loc.code.toLowerCase() === locationCode.toLowerCase()
      );

      if (location) {
        setSelectedLocation(location);
      }
    }
  }, [params.location, setSelectedLocation]);

  return <>{children}</>;
}
