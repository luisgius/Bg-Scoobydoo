"use client";

import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MiniGallery } from "./MiniGallery";
import { formatDate } from "@/lib/utils";
import type { LocationWithPhotos } from "@/types";

// Fix Leaflet default marker icon
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface LocationMarkerProps {
  location: LocationWithPhotos;
}

export function LocationMarker({ location }: LocationMarkerProps) {
  return (
    <Marker position={[location.lat, location.lng]} icon={icon}>
      <Popup maxWidth={300} className="custom-popup">
        <div className="p-1">
          <h3 className="font-semibold text-base mb-1">{location.name}</h3>
          {location.visitDate && (
            <p className="text-xs text-gray-500 mb-1">
              {formatDate(location.visitDate)}
            </p>
          )}
          {location.description && (
            <p className="text-sm text-gray-600 mb-2">{location.description}</p>
          )}
          <MiniGallery photos={location.photos} />
        </div>
      </Popup>
    </Marker>
  );
}
