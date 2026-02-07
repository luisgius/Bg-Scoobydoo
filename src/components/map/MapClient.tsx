"use client";

import { MapContainer as LeafletMapContainer, TileLayer } from "react-leaflet";
import { LocationMarker } from "./LocationMarker";
import type { LocationWithPhotos } from "@/types";
import "leaflet/dist/leaflet.css";

interface MapClientProps {
  locations: LocationWithPhotos[];
  center?: [number, number];
  zoom?: number;
  onMapClick?: (lat: number, lng: number) => void;
}

export function MapClient({
  locations,
  center = [43.2141, 27.9147], // Varna, Bulgaria default
  zoom = 5,
}: MapClientProps) {
  return (
    <LeafletMapContainer
      center={center}
      zoom={zoom}
      className="h-full w-full rounded-xl"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <LocationMarker key={location.id} location={location} />
      ))}
    </LeafletMapContainer>
  );
}
