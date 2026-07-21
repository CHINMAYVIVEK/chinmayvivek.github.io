import type { TimelineEntry, TimelineTheme } from "./types";

const teal: TimelineTheme = { accent: "#2d5a68" };
const tealMid: TimelineTheme = { accent: "#3d6b7a" };
const ink: TimelineTheme = { accent: "var(--ink)" };

/** Company engagements — expert portfolio, not a chronological CV */
export const timeline: TimelineEntry[] = [
  {
    id: "ravanai",
    company: "Ravan AI",
    logo: "/assets/companies/ravan-ai.png",
    theme: ink,
  },
  {
    id: "kaseya",
    company: "Kaseya",
    logo: "/assets/companies/kaseya.jpg",
    theme: teal,
  },
  {
    id: "wissen",
    company: "Wissen Technology",
    logo: "/assets/companies/wissen.png",
    theme: ink,
  },
  {
    id: "blackbuck",
    company: "BlackBuck Insight",
    logo: "/assets/companies/blackbuck-insights.jpg",
    theme: tealMid,
  },
  {
    id: "freecharge",
    company: "Freecharge",
    logo: "/assets/companies/freecharge.png",
    theme: teal,
  },
  {
    id: "justdial",
    company: "JustDial",
    logo: "/assets/companies/justdial.png",
    theme: ink,
  },
  {
    id: "tattvafoundation",
    company: "Tattva Foundation",
    logo: "/assets/companies/tattva-foundation.png",
    theme: ink,
  },
  {
    id: "apexvisas",
    company: "Apex Visa",
    logo: "/assets/companies/apex-visas.png",
    theme: ink,
  },
];
