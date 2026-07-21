"use client";

import { useState, type CSSProperties } from "react";
import { timeline } from "@/data/timeline";
import type { TimelineEntry, TimelineTheme } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

function companyStyle(theme: TimelineTheme): CSSProperties {
  return { "--company-accent": theme.accent } as CSSProperties;
}

function CompanyMark({ item }: { item: TimelineEntry }) {
  const [failed, setFailed] = useState(false);
  const initials = item.company
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!item.logo || failed) {
    return (
      <span className="company-logo__monogram" aria-hidden>
        {initials}
      </span>
    );
  }

  return (
    <img
      src={item.logo}
      alt=""
      className="company-logo__img"
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
    />
  );
}

function CompanyLogo({ item }: { item: TimelineEntry }) {
  return (
    <li
      className="company-logo"
      style={companyStyle(item.theme)}
      aria-label={item.company}
      tabIndex={0}
    >
      <div className="company-logo__mark" aria-hidden>
        <CompanyMark item={item} />
      </div>
      <span className="company-logo__name" aria-hidden>
        {item.company}
      </span>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="Experience"
          title="Collaborated"
          titleAccent="with"
          description="Contract and full-time engagements across security, AI, fintech, and consumer platforms."
          align="center"
        />

        <ul className="company-strip" aria-label="Companies">
          {timeline.map((item) => (
            <CompanyLogo key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
