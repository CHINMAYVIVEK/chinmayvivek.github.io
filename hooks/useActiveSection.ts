import { useEffect, useState } from "react";

const NAV_OFFSET = 88;

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;

      if (nearBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      let current: string | null = null;

      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        if (top <= NAV_OFFSET) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}

export function sectionIdFromHref(href: string): string | null {
  return href.startsWith("#") ? href.slice(1) : null;
}
