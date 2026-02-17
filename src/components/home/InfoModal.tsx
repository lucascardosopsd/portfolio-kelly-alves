"use client";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  badge?: string;
  title: string;
  description: string;
}

export default function InfoModal({
  open,
  onOpenChange,
  badge,
  title,
  description,
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
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
