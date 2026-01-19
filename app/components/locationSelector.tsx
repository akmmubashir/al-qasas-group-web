"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLocationStore } from "@/app/store/locationStore";
import { locationList } from "../utils/data/locations";

const LocationSelector = () => {
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

    // Force full page reload to update all content
    window.location.reload();
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
