export type ProjectCategory = "all" | "ai" | "enterprise" | "fintech";

export type ProjectIcon =
  | "trading"
  | "risk"
  | "mobile"
  | "llm"
  | "cloudMl"
  | "crypto"
  | "analytics"
  | "lms"
  | "school"
  | "sentinel-vision";

export interface ProjectTheme {
  header: string;
  fg?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  outcomes?: string[];
  featured?: boolean;
  category: Exclude<ProjectCategory, "all">[];
  image: {
    icon: ProjectIcon;
    /** Public path to cover image; omit to show icon */
    src?: string;
  };
  tag: { text: string };
  theme: ProjectTheme;
  technologies: string[];
  links: { demo: string; github: string };
}

export interface TimelineEntry {
  id: string;
  company: string;
  /** Optional logo under public/; falls back to monogram */
  logo?: string;
}

export interface SkillGroup {
  title: string;
  tags: string[];
}

export interface ExpertisePanel {
  title: string;
  groups: SkillGroup[];
}
