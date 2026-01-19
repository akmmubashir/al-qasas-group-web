"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocationStore } from "@/app/store/locationStore";
import { locationList } from "../utils/data/locations";

const LocationSelector = () => {
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
    setSelectedLocation(location);

    // Update URL with new location only if we're on a location-based page
    const currentPath = pathname || "/";
    const pathParts = currentPath.split("/").filter(Boolean);

    // Check if first part is a location code
    const isLocationInPath = locationList.some(
      (loc) => loc.code.toLowerCase() === pathParts[0]?.toLowerCase()
    );

    // Only update URL if we're on a location-based route (contact or services)
    if (isLocationInPath) {
      // Replace existing location
      pathParts[0] = location.code.toLowerCase();
      const newPath = "/" + pathParts.join("/");
      router.push(newPath);
    }
    // If we're not on a location-based page (home, about), just update the store
  };

  return (
    <div className="flex gap-2 bg-blue-100 p-2 max-md:p-1">
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
