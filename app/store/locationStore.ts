import { create } from 'zustand';
import { locationList } from '../utils/data/locations';

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



const DEFAULT_LOCATION = locationList[2]; // UAE fallback

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocation: DEFAULT_LOCATION,
  setSelectedLocation: (location: Location) => set({ selectedLocation: location }),
  initializeLocation: () => {
    if (!navigator.geolocation) {
      set({ selectedLocation: DEFAULT_LOCATION });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let nearestLocation = DEFAULT_LOCATION;
        let minDistance = Infinity;

        locationList.forEach((location) => {
          if (location.lat !== undefined && location.lng !== undefined) {
            const distance = calculateDistance(userLat, userLng, location.lat, location.lng);
            if (distance < minDistance) {
              minDistance = distance;
              nearestLocation = location;
            }
          }
        });

        set({ selectedLocation: nearestLocation });
      },
      () => {
        // Geolocation permission denied or error - use fallback
        set({ selectedLocation: DEFAULT_LOCATION });
      }
    );
  },
}));
