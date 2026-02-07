"use client";

import { useState } from "react";
import { useLocations } from "@/hooks/useLocations";
import { MapContainer } from "@/components/map/MapContainer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Skeleton } from "@/components/ui/Skeleton";
import { PageTransition } from "@/components/layout/PageTransition";
import { useLanguage } from "@/providers/LanguageProvider";
import { useSession } from "next-auth/react";
import { formatDate } from "@/lib/utils";

export default function MapPage() {
  const { locations, isLoading, mutate } = useLocations();
  const { language } = useLanguage();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newLocation, setNewLocation] = useState({
    name: "",
    lat: "",
    lng: "",
    description: "",
    visitDate: "",
  });
  const [saving, setSaving] = useState(false);

  const handleAddLocation = async () => {
    if (!newLocation.name || !newLocation.lat || !newLocation.lng) return;
    setSaving(true);
    try {
      await fetch("/api/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newLocation.name,
          lat: parseFloat(newLocation.lat),
          lng: parseFloat(newLocation.lng),
          description: newLocation.description || null,
          visitDate: newLocation.visitDate || null,
        }),
      });
      mutate();
      setAddModalOpen(false);
      setNewLocation({ name: "", lat: "", lng: "", description: "", visitDate: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <PageTransition>
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "w-80" : "w-0"
          } transition-all duration-300 overflow-hidden border-r bg-[var(--card)] flex-shrink-0`}
        >
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-semibold">
                {language === "bg" ? "Местата ни" : "Our Places"}
              </h2>
              {isAdmin && (
                <Button size="sm" onClick={() => setAddModalOpen(true)}>
                  +
                </Button>
              )}
            </div>

            {isLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-full rounded-lg" />
                ))}
              </div>
            ) : locations.length === 0 ? (
              <p className="text-sm text-[var(--muted-foreground)]">
                No locations added yet.
              </p>
            ) : (
              <div className="space-y-3">
                {locations.map((loc) => (
                  <Card key={loc.id} className="p-3 cursor-pointer hover:bg-[var(--muted)] transition-colors">
                    <h3 className="font-medium text-sm">{loc.name}</h3>
                    {loc.visitDate && (
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {formatDate(loc.visitDate)}
                      </p>
                    )}
                    {loc.description && (
                      <p className="text-xs text-[var(--muted-foreground)] line-clamp-2 mt-1">
                        {loc.description}
                      </p>
                    )}
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      {loc.photos.length} photo{loc.photos.length !== 1 ? "s" : ""}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute top-4 left-4 z-[1000] bg-[var(--card)] border rounded-lg px-3 py-2 text-sm shadow-md hover:bg-[var(--muted)] transition-colors"
          >
            {sidebarOpen ? "Hide" : "Show"} sidebar
          </button>
          <MapContainer locations={locations} />
        </div>

        {/* Add location modal */}
        <Modal
          isOpen={addModalOpen}
          onClose={() => setAddModalOpen(false)}
          title="Add Location"
        >
          <div className="space-y-4">
            <Input
              id="loc-name"
              label="Name"
              placeholder="e.g., Deva Castle"
              value={newLocation.name}
              onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="loc-lat"
                label="Latitude"
                placeholder="45.8797"
                value={newLocation.lat}
                onChange={(e) => setNewLocation({ ...newLocation, lat: e.target.value })}
              />
              <Input
                id="loc-lng"
                label="Longitude"
                placeholder="22.9008"
                value={newLocation.lng}
                onChange={(e) => setNewLocation({ ...newLocation, lng: e.target.value })}
              />
            </div>
            <Input
              id="loc-desc"
              label="Description"
              placeholder="Our trip to..."
              value={newLocation.description}
              onChange={(e) => setNewLocation({ ...newLocation, description: e.target.value })}
            />
            <Input
              id="loc-date"
              label="Visit Date"
              type="date"
              value={newLocation.visitDate}
              onChange={(e) => setNewLocation({ ...newLocation, visitDate: e.target.value })}
            />
            <Button onClick={handleAddLocation} disabled={saving} className="w-full">
              {saving ? "Saving..." : "Add Location"}
            </Button>
          </div>
        </Modal>
      </div>
    </PageTransition>
  );
}
