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
  inlineBg?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  outcomes?: string[];
  featured?: boolean;
  category: Exclude<ProjectCategory, "all">[];
  image: { icon: ProjectIcon };
  tag: { text: string };
  theme: ProjectTheme;
  technologies: string[];
  links: { demo: string; github: string };
}

export interface TimelineTheme {
  accent: string;
  skillBg?: string;
  icon?: string;
}

export interface TimelineEntry {
  id: string;
  company: string;
  role: string;
  /** One-line outcome shown under the company mark */
  impact: string;
  /** Optional logo under public/; falls back to monogram */
  logo?: string;
  theme: TimelineTheme;
}

export interface SkillGroup {
  title: string;
  gradient: string;
  tags: { label: string; className: string }[];
}

export interface ExpertisePanel {
  title: string;
  icon?: "code" | "devops" | "skills";
  borderColor?: string;
  accentColor?: string;
  groups: SkillGroup[];
}
