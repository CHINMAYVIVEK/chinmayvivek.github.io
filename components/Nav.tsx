"use client";

import Link from "next/link";
import { useState } from "react";
import { sectionIdFromHref, useActiveSection } from "@/hooks/useActiveSection";
import { siteConfig } from "@/lib/seo";

/** Scroll order matches nav: who → where → work → skills → research → contact */
const navSections = [
  "about",
  "experience",
  "projects",
  "expertise",
  "research",
  "contact",
] as const;

/** Plain labels — standard portfolio hierarchy, no coined synonyms */
const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
  { href: "https://chinmayvivek.medium.com/", label: "Blog", external: true },
];

function navLinkClass(isActive: boolean, mobile = false) {
  const base = mobile
    ? "block px-2 py-3 text-sm font-medium tracking-wide transition-colors"
    : "nav-link text-sm font-medium tracking-wide";

  return `${base} ${isActive ? "nav-link--active" : "text-[var(--muted)] hover:text-[var(--ink)]"}`;
}

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(navSections);

  return (
    <nav className="site-nav fixed w-full z-50" aria-label="Main navigation">
      <div className="site-container">
        <div className="flex justify-between h-16 items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group min-w-0"
            aria-label={`${siteConfig.name}, ${siteConfig.jobTitle}`}
          >
            <img
              src="/assets/icons/icon-32x32.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 shrink-0 rounded-full ring-1 ring-[var(--border)] group-hover:ring-[var(--accent)]/40 transition-all"
              decoding="async"
            />
            <span className="site-nav__lockup">
              <span className="site-nav__brand">
                Chinmay <span className="site-nav__brand-accent">Vivek</span>
              </span>
              <span className="site-nav__tagline">{siteConfig.jobTitle}</span>
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-6">
            {navLinks.map((link) => {
              const sectionId = sectionIdFromHref(link.href);
              const isActive = sectionId !== null && activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={navLinkClass(isActive)}
                  aria-current={isActive ? "true" : undefined}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta"
            >
              Book a call
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__cta site-nav__cta--compact"
            >
              Book a call
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-muted)]"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-[var(--border)]">
            <p className="px-2 pt-3 pb-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Navigate
            </p>
            {navLinks.map((link) => {
              const sectionId = sectionIdFromHref(link.href);
              const isActive = sectionId !== null && activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={navLinkClass(isActive, true)}
                  aria-current={isActive ? "true" : undefined}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
