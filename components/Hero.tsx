"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/lib/images";
import { siteConfig } from "@/lib/seo";

const roles = [
  "Generative AI Engineer",
  "LLM Systems Architect",
  "AI Infrastructure Lead",
  "Production ML Engineer",
];

const focusAreas = [
  "LLM Systems",
  "RAG Pipelines",
  "AI Agents",
  "MLOps",
  "FastAPI",
  "Kubernetes",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setRoleVisible(false);
      timeout = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setRoleVisible(true);
      }, 280);
    }, 3800);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-premium pt-16"
      aria-label={`Chinmay Vivek, ${siteConfig.jobTitle}`}
    >
      <div className="hero-premium__grid">
        <div className="hero-premium__portrait">
          <div className="hero-premium__portrait-frame">
            <Image
              src={heroImage.webp}
              alt={`Chinmay Vivek, ${siteConfig.jobTitle} in Bangalore`}
              fill
              priority
              fetchPriority="high"
              className="hero-premium__photo"
              sizes="(max-width: 1024px) 100vw, 52vw"
              quality={92}
            />
            <div className="hero-premium__portrait-shade lg:hidden" aria-hidden />
            <div className="hero-premium__portrait-edge hidden lg:block" aria-hidden />
          </div>
        </div>

        <div className="hero-premium__panel">
          <div className="hero-premium__panel-inner">
            <div className="hero-premium__eyebrow">
              <span className="hero-premium__eyebrow-line" aria-hidden />
              <span>{siteConfig.jobTitle}</span>
            </div>

            <h1 className="hero-premium__title font-display">
              Chinmay
              <br />
              <span className="hero-premium__title-accent">Vivek</span>
            </h1>

            <p className="hero-premium__lead">{siteConfig.tagline}</p>

            <p className="hero-premium__role" aria-live="polite">
              <span className={roleVisible ? "hero-premium__role-text--in" : "hero-premium__role-text--out"}>
                {roles[roleIndex]}
              </span>
            </p>

            <div className="hero-premium__actions">
              <Link href="#projects" className="hero-premium__btn hero-premium__btn--primary">
                View work
              </Link>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-premium__btn hero-premium__btn--ghost"
              >
                Book a call
              </a>
            </div>

            <ul className="hero-premium__tags" aria-label="Technical focus areas">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>

            <footer className="hero-premium__meta">
              <span>IIT Jodhpur</span>
              <span className="hero-premium__meta-dot" aria-hidden />
              <span>Startup and fintech AI</span>
              <span className="hero-premium__meta-dot" aria-hidden />
              <span>Bangalore, India</span>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
