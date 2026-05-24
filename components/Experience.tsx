"use client";

import { useEffect, useRef, useState } from "react";
import { timeline } from "@/data/timeline";
import type { TimelineEntry } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { timelineColorClasses } from "@/lib/colors";

function TimelineCard({ item, index, total }: { item: TimelineEntry; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const colors = timelineColorClasses[item.color ?? "indigo"];
  const sideClass = index % 2 === 0 ? "mr-auto md:w-[58%]" : "ml-auto md:w-[58%]";
  const fromX = index % 2 === 0 ? "-translate-x-8" : "translate-x-8";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0" : `opacity-0 ${fromX}`
      }`}
    >
      <div
        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 ${colors.dot} rounded-full border-[3px] border-[var(--paper-elevated)] shadow-md z-10`}
        style={{ top: -2 }}
      />
      {index !== total - 1 && (
        <div className={`absolute left-1/2 w-px ${colors.line} top-4 bottom-[-100%] -translate-x-1/2 z-0`} />
      )}
      <article
        className={`${sideClass} site-card overflow-hidden border-l-[3px] ${colors.border} relative`}
      >
        <div className="p-6 lg:p-8">
          <div
            className={`absolute top-4 right-4 w-14 h-14 ${colors.badge} rounded-full hidden sm:flex items-center justify-center`}
          >
            <span className="text-white font-display text-sm">{item.year}</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2 sm:hidden">
            {item.year}
          </p>
          <h3 className={`font-display text-2xl mb-1 ${colors.title}`}>{item.role}</h3>
          <p className="text-lg text-[var(--muted)] flex items-center gap-2 mb-4">
            <svg className={`h-4 w-4 shrink-0 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {item.company}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)] mb-5">
            <span className="flex items-center gap-2">
              <svg className={`h-4 w-4 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.period}
            </span>
            <span className="flex items-center gap-2">
              <svg className={`h-4 w-4 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {item.location}
            </span>
          </div>
          <ul className="space-y-3 text-[var(--muted)] text-[0.9375rem] mb-5">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="site-bullet" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span key={skill} className={`text-xs font-medium px-3 py-1 rounded-full ${colors.skill}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="site-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="Career"
          title="Professional"
          titleAccent="Experience"
          description="Work history of Chinmay Vivek: AI research engineering, fintech platforms, and government ERP systems across Bangalore and remote teams."
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-[var(--border)] h-full" />
          <div className="space-y-16 lg:space-y-20">
            {timeline.map((item, index) => (
              <TimelineCard key={`${item.company}-${item.period}`} item={item} index={index} total={timeline.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
