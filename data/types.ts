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
  | "school";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">[];
  image: {
    gradient: { from: string; to: string };
    icon: ProjectIcon;
  };
  tag: { text: string; color: string };
  technologies: string[];
  links: { demo: string; github: string };
}

export type TimelineColor = "purple" | "pink" | "indigo";

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  skills: string[];
  color: TimelineColor;
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
