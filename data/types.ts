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
  year: string;
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  skills: string[];
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
