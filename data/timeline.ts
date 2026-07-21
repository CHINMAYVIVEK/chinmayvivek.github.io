import type { TimelineEntry, TimelineTheme } from "./types";

const teal: TimelineTheme = { accent: "#2d5a68" };
const tealMid: TimelineTheme = { accent: "#3d6b7a" };
const ink: TimelineTheme = { accent: "var(--ink)" };

/** Company engagements — expert portfolio, not a chronological CV */
export const timeline: TimelineEntry[] = [
  {
    id: "ravanai",
    company: "Ravan AI",
    role: "Consultant",
    impact: "Helped build an AI-based system for Customer Support.",
    logo: "/assets/companies/ravan-ai.png",
    theme: ink,
  },
  {
    id: "kaseya",
    company: "Kaseya",
    role: "Staff Software Engineer, Security R&D",
    impact:
      "Hardened EDR systems and led ML-backed backend delivery for security at scale.",
    logo: "/assets/companies/kaseya.jpg",
    theme: teal,
  },
  {
    id: "wissen",
    company: "Wissen Technology",
    role: "Senior Software Engineer",
    impact:
      "Shipped RAG and LLM products for unstructured data, lifting QA accuracy by ~20%.",
    logo: "/assets/companies/wissen.png",
    theme: ink,
  },
  {
    id: "blackbuck",
    company: "BlackBuck Insight",
    role: "Lead Software Engineer",
    impact:
      "Brought ML into production microservices—higher scale, lower latency.",
    logo: "/assets/companies/blackbuck-insights.jpg",
    theme: tealMid,
  },
  {
    id: "freecharge",
    company: "Freecharge",
    role: "Senior Software Engineer",
    impact: "Scaled FinTech payments and cut ML risk evaluation time by ~35%.",
    logo: "/assets/companies/freecharge.png",
    theme: teal,
  },
  {
    id: "justdial",
    company: "JustDial",
    role: "Senior Software Engineer",
    impact:
      "Led design and delivery of production systems with a team of seven.",
    logo: "/assets/companies/justdial.png",
    theme: ink,
  },
  {
    id: "tattvafoundation",
    company: "Tattva Foundation",
    role: "Senior Software Engineer",
    impact:
      "Led design and delivery of production systems with a team of seven.",
    logo: "/assets/companies/tattva-foundation.png",
    theme: ink,
  },
  {
    id: "apexvisas",
    company: "Apex Visa",
    role: "Senior Software Engineer",
    impact:
      "Led design and delivery of production systems with a team of seven.",
    logo: "/assets/companies/apex-visas.png",
    theme: ink,
  },
];
