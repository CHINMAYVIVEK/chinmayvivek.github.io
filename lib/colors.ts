import type { TimelineColor } from "@/data/types";

/** Editorial palette: teal ink variants for timeline variety */
export const timelineColorClasses: Record<
  TimelineColor,
  {
    dot: string;
    line: string;
    border: string;
    title: string;
    badge: string;
    skill: string;
    icon: string;
  }
> = {
  purple: {
    dot: "bg-[#2d5a68]",
    line: "bg-[#2d5a68]/25",
    border: "border-[#2d5a68]",
    title: "text-[#2d5a68]",
    badge: "bg-[#2d5a68]",
    skill: "bg-[var(--accent-soft)] text-[#2d5a68]",
    icon: "text-[#2d5a68]",
  },
  pink: {
    dot: "bg-[#3d6b7a]",
    line: "bg-[#3d6b7a]/25",
    border: "border-[#3d6b7a]",
    title: "text-[#3d6b7a]",
    badge: "bg-[#3d6b7a]",
    skill: "bg-[var(--accent-soft)] text-[#3d6b7a]",
    icon: "text-[#3d6b7a]",
  },
  indigo: {
    dot: "bg-[var(--ink)]",
    line: "bg-[var(--ink)]/15",
    border: "border-[var(--ink)]",
    title: "text-[var(--ink)]",
    badge: "bg-[var(--ink)]",
    skill: "bg-[var(--paper-muted)] text-[var(--ink)]",
    icon: "text-[var(--muted)]",
  },
};

