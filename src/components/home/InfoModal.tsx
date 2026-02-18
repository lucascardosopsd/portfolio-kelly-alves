"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  badge?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export default function InfoModal({
  open,
  onOpenChange,
  badge,
  title,
  description,
  imageUrl,
}: InfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          {badge ? (
            <Badge variant="secondary" className="mb-2 w-fit rounded-full bg-muted px-3 text-muted-foreground">
              {badge}
            </Badge>
          ) : null}
          <DialogTitle className="text-2xl text-foreground">{title}</DialogTitle>
          {imageUrl ? (
            <div className="relative mt-2 h-56 w-full overflow-hidden rounded-xl border border-border">
              <Image
                alt={title}
                src={imageUrl}
                fill
                sizes="(max-width: 1040px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
