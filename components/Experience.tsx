"use client";

import { useState } from "react";
import { timeline } from "@/data/timeline";
import type { TimelineEntry } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

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

export function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="Experience"
          title="Collaborated"
          titleAccent="with"
          description="Contract and full-time engagements across security, AI, fintech, and consumer platforms."
        />

        <ul className="company-strip" aria-label="Companies">
          {timeline.map((item) => (
            <li key={item.id} className="company-logo" aria-label={item.company}>
              <div className="company-logo__mark" aria-hidden>
                <CompanyMark item={item} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
