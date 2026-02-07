"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/Skeleton";
import type { LocationWithPhotos } from "@/types";

const MapClient = dynamic(
  () => import("./MapClient").then((mod) => mod.MapClient),
  {
    ssr: false,
    loading: () => (
      <Skeleton className="h-full w-full rounded-xl" />
    ),
  }
);

interface MapContainerProps {
  locations: LocationWithPhotos[];
  center?: [number, number];
  zoom?: number;
}

export function MapContainer({ locations, center, zoom }: MapContainerProps) {
  return <MapClient locations={locations} center={center} zoom={zoom} />;
}
