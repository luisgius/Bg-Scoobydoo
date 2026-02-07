"use client";

import Link from "next/link";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import { useLanguage } from "@/providers/LanguageProvider";
import type { CalendarDay } from "@/types";

interface DateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CalendarDay | null;
}

export function DateModal({ isOpen, onClose, data }: DateModalProps) {
  const { language } = useLanguage();

  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={formatDate(data.date, "MMMM d, yyyy")}>
      <div className="space-y-6">
        {data.posts.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
              {language === "bg" ? "Дневник" : "Diary Entries"}
            </h3>
            <div className="space-y-2">
              {data.posts.map((post) => {
                const cat = CATEGORIES.find((c) => c.value === post.category);
                return (
                  <Link
                    key={post.id}
                    href={`/diary/${post.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--muted)] transition-colors"
                  >
                    <Badge variant="accent" className="text-xs">
                      {language === "bg" ? cat?.labelBg : cat?.label}
                    </Badge>
                    <span className="font-medium text-sm">{post.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {data.photos.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
              {language === "bg" ? "Снимки" : "Photos"}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {data.photos.map((photo) => (
                <div key={photo.id} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.caption || "Photo"}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
