import { create } from "zustand";
import { persist } from "zustand/middleware";
import { locationList } from "../utils/data/locations";

export interface Location {
  name: string;
  code: string;
  flag: string;
  lat?: number;
  lng?: number;
}

interface LocationStore {
  selectedLocation: Location;
  setSelectedLocation: (location: Location) => void;
  initializeLocation: () => void;
}

// Saudi Arabia as default location
const DEFAULT_LOCATION =
  locationList.find((loc) => loc.code === "SA") || locationList[0];

export const useLocationStore = create<LocationStore>()(
  persist(
    (set, get) => ({
      selectedLocation: DEFAULT_LOCATION,
      setSelectedLocation: (location: Location) =>
        set({ selectedLocation: location }),
      initializeLocation: () => {
        // Only set to default if no location is already stored
        const currentLocation = get().selectedLocation;
        if (
          !currentLocation ||
          currentLocation.code === DEFAULT_LOCATION.code
        ) {
          set({ selectedLocation: DEFAULT_LOCATION });
        }
      },
    }),
    {
      name: "location-storage",
    },
  ),
);
