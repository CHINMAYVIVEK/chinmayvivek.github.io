"use client";

import type { ReactNode } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver";

export function HomeClient({ children }: { children: ReactNode }) {
  useSectionObserver();
  return <>{children}</>;
}
