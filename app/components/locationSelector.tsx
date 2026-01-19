"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocationStore } from "@/app/store/locationStore";
import { locationList } from "../utils/data/locations";

const LocationSelector = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const pathname = usePathname();
  const { selectedLocation, setSelectedLocation, initializeLocation } =
    useLocationStore();

  useEffect(() => {
    // Only initialize on first mount, don't re-initialize on navigation
    const hasInitialized = sessionStorage.getItem("location-initialized");
    if (!hasInitialized) {
      initializeLocation();
      sessionStorage.setItem("location-initialized", "true");
    }
  }, [initializeLocation]);

  const handleLocationToggle = (location: (typeof locationList)[0]) => {
    // Update store
    setSelectedLocation(location);

    // Check if we're on a location-based page
    const currentPath = pathname || "/";
    const pathParts = currentPath.split("/").filter(Boolean);

    // Check if first part is a location code
    const isLocationInPath = locationList.some(
      (loc) => loc.code.toLowerCase() === pathParts[0]?.toLowerCase(),
    );

    // Add a small delay to ensure Zustand persists the change
    setTimeout(() => {
      if (isLocationInPath) {
        // Update URL with new location on location-based pages
        pathParts[0] = location.code.toLowerCase();
        const newPath = "/" + pathParts.join("/");
        // Use window.location to navigate with the new URL
        window.location.href = newPath;
      } else {
        // On home/about pages, just reload with new location from store
        window.location.reload();
      }
    }, 100);
  };

  return (
    <div className={`flex gap-2 p-2 bg-blue-100 justify-between`}>
      {locationList.map((location) => (
        <button
          key={location.code}
          onClick={() => handleLocationToggle(location)}
          className={`cursor-pointer flex items-center p-1 transition-all border-b-2 ${
            selectedLocation.code === location.code
              ? "border-blue-600 scale-110"
              : "hover:bg-blue-200 border-transparent"
          }`}
          aria-label={`Select ${location.name}`}
        >
          <div className="max-md:w-8">
            <Image
              src={location.flag}
              alt={location.name}
              width={32}
              height={32}
              className="w-full"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default LocationSelector;
