"use client";

import { useState, type CSSProperties } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory, ProjectTheme } from "@/data/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectIconSvg } from "@/lib/projectIcons";

function projectCardStyle(theme: ProjectTheme): CSSProperties {
  const vars: Record<string, string> = { "--project-header-bg": theme.header };
  if (theme.fg) vars["--project-header-fg"] = theme.fg;
  return vars as CSSProperties;
}

const filters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / ML" },
  { id: "enterprise", label: "Enterprise" },
  { id: "fintech", label: "FinTech" },
];

function FeaturedProject({ project }: { project: Project }) {
  const href =
    project.links.demo !== "#"
      ? project.links.demo
      : project.links.github !== "#"
        ? project.links.github
        : null;

  return (
    <article
      className="site-card project-card overflow-hidden mb-10 lg:mb-12"
      style={projectCardStyle(project.theme)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="project-card__header relative min-h-[14rem] lg:min-h-[20rem]">
          <div className="project-card__header-grid" aria-hidden />
          <div className="project-card__header-glow" aria-hidden />
          <div className="relative z-10 flex h-full min-h-[14rem] lg:min-h-[20rem] items-center justify-center">
            <div className="project-card__icon-wrap">
              <ProjectIconSvg
                icon={project.image.icon}
                className="w-14 h-14"
                title={project.title}
              />
            </div>
          </div>
          <span className="project-card__tag absolute top-4 left-4 z-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
            {project.tag.text}
          </p>
          <h3 className="font-display text-3xl text-[var(--ink)] mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="site-card__body mb-6">{project.description}</p>
          {project.outcomes && (
            <ul className="space-y-3 mb-6">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-[var(--muted)] text-[0.9375rem]">
                  <span className="site-bullet" aria-hidden />
                  {outcome}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span key={tech} className="site-tag">
                {tech}
              </span>
            ))}
          </div>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-btn site-btn--primary self-start"
            >
              View project
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasDemo = project.links.demo && project.links.demo !== "#";
  const hasGithub = project.links.github && project.links.github !== "#";

  return (
    <article
      className="site-card project-card overflow-hidden group"
      style={projectCardStyle(project.theme)}
    >
      <div className="project-card__header relative h-48">
        <div className="project-card__header-grid" aria-hidden />
        <div className="project-card__header-glow" aria-hidden />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="project-card__icon-wrap">
            <ProjectIconSvg
              icon={project.image.icon}
              className="w-11 h-11"
              title={project.title}
            />
          </div>
        </div>
        <span className="project-card__tag absolute top-4 right-4 z-10 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          {project.tag.text}
        </span>
      </div>
      <div className="p-6">
        <h3 className="site-card__title text-lg leading-snug mb-3">{project.title}</h3>
        <p className="site-card__body text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="site-tag">
              {tech}
            </span>
          ))}
        </div>
        {(hasDemo || hasGithub) && (
          <div className="flex justify-between items-center pt-4 border-t border-[var(--border)]">
            {hasDemo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--ink)] transition-colors"
              >
                View project
              </a>
            ) : (
              <span />
            )}
            {hasGithub && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const featured = projects.find((p) => p.featured);
  const filtered = projects.filter(
    (p) =>
      !p.featured &&
      (activeFilter === "all" || p.category.includes(activeFilter)),
  );

  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured"
          titleAccent="Projects"
          description="Shipped AI systems and full-stack products: computer vision, LLM stacks, fintech ML, and cloud-native platforms."
        />

        {featured && <FeaturedProject project={featured} />}

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveFilter(f.id)}
              className={`site-filter ${activeFilter === f.id ? "site-filter--active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
