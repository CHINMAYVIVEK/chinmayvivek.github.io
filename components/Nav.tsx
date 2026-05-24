"use client";

import Link from "next/link";
import { useState } from "react";
import { sectionIdFromHref, useActiveSection } from "@/hooks/useActiveSection";

const navSections = [
  "about",
  "projects",
  "expertise",
  "research",
  "experience",
  "contact",
] as const;

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "https://chinmayvivek.medium.com/", label: "Medium", external: true },
];

function navLinkClass(isActive: boolean, mobile = false) {
  const base = mobile
    ? "block px-2 py-3 text-sm font-medium transition-colors"
    : "nav-link text-sm font-medium";

  return `${base} ${isActive ? "nav-link--active" : "text-[var(--muted)] hover:text-[var(--ink)]"}`;
}

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(navSections);

  return (
    <nav className="site-nav fixed w-full z-50" aria-label="Main navigation">
      <div className="site-container">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/assets/icons/icon-32x32.png"
              alt=""
              width={32}
              height={32}
              className="w-8 h-8 rounded-full ring-1 ring-[var(--border)] group-hover:ring-[var(--accent)]/40 transition-all"
              decoding="async"
            />
            <span className="site-nav__brand">
              Chinmay <span className="site-nav__brand-accent">Vivek</span>
            </span>
          </Link>

          <div className="hidden sm:flex sm:gap-7">
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
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper-muted)]"
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

        {isMenuOpen && (
          <div className="sm:hidden pb-4 border-t border-[var(--border)]">
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
