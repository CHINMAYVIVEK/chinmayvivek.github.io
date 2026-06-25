import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "sentinel-vision",
    title: "SentinelVision",
    description:
      "A high-performance real-time person and object tracking system built in Rust.",
    category: ["enterprise", "ai"],
    image: { icon: "sentinel-vision" },
    tag: { text: "Enterprise AI" },
    theme: { header: "#3d4a5c", fg: "#f2f4f7", inlineBg: "#e9edf2" },
    technologies: ["Rust", "OpenCV", "ONNX", "SORT"],
    links: {
      demo: "https://github.com/CHINMAYVIVEK/SentinelVision",
      github: "https://github.com/CHINMAYVIVEK/SentinelVision",
    },
  },
  {
    id: "trading-platform",
    title: "AI-Powered Trading Platform",
    description:
      "Algorithmic trading platform with machine learning market signals, Python, TensorFlow, FastAPI, and Redis for fintech automation.",
    category: ["fintech", "ai"],
    image: { icon: "trading" },
    tag: { text: "FinTech AI" },
    theme: { header: "#1c4d5c" },
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "risk-assessment",
    title: "ML Risk Assessment System",
    description:
      "Credit scoring and fraud detection ML service built with Rust, scikit-learn, PostgreSQL, and Docker for banking workflows.",
    category: ["fintech", "enterprise"],
    image: { icon: "risk" },
    tag: { text: "FinTech" },
    theme: { header: "#3d4f3a", fg: "#f4f6f0", inlineBg: "#e8efe4" },
    technologies: ["Rust", "scikit-learn", "PostgreSQL", "Docker"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "mobile-suite",
    title: "Enterprise Mobile Suite",
    description:
      "Cross-platform enterprise mobile app for field data capture and analytics using Flutter, Firebase, and GraphQL.",
    category: ["enterprise"],
    image: { icon: "mobile" },
    tag: { text: "Enterprise" },
    theme: { header: "var(--ink)" },
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "llm-system",
    title: "Advanced LLM System",
    description:
      "Custom LLM training and serving stack with PyTorch, CUDA, and AWS for enterprise NLP and generative AI workloads.",
    category: ["ai"],
    image: { icon: "llm" },
    tag: { text: "AI/ML" },
    theme: { header: "#2a3f6e", fg: "#f0f2f8", inlineBg: "#e8ecf5" },
    technologies: ["Python", "PyTorch", "CUDA", "AWS"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "ml-platform",
    title: "Cloud-Native ML Platform",
    description:
      "Kubernetes ML platform with Go, MLflow, and Terraform for automated model training, deployment, and monitoring.",
    category: ["enterprise"],
    image: { icon: "cloudMl" },
    tag: { text: "Enterprise" },
    theme: { header: "#1a4d5c" },
    technologies: ["Go", "Kubernetes", "MLflow", "Terraform"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "crypto-trading-bot",
    title: "Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot in Go with real-time market analysis, PostgreSQL, and Redis.",
    category: ["fintech"],
    image: { icon: "crypto" },
    tag: { text: "FinTech" },
    theme: { header: "#5c3d2e", fg: "#faf3ee", inlineBg: "#f5ebe4" },
    technologies: ["Go", "Docker", "PostgreSQL", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "real-time-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    description:
      "Real-time analytics dashboard in Rust and Next.js with PostgreSQL and Redis for streaming data visualization.",
    category: ["enterprise"],
    image: { icon: "analytics" },
    tag: { text: "Enterprise" },
    theme: { header: "#3d4a5c", fg: "#f2f4f7", inlineBg: "#e9edf2" },
    technologies: ["Rust", "Docker", "PostgreSQL", "Redis", "Next.Js"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "live-class",
    title: "Live Class",
    description:
      "Open source learning management system (LMS) for live online classes. Go, PostgreSQL, Docker, and HTMX for courses and attendance.",
    category: ["enterprise"],
    image: { icon: "lms" },
    tag: { text: "Enterprise" },
    theme: { header: "#2d5a68" },
    technologies: ["Go", "Docker", "PostgreSQL", "HTMX"],
    links: {
      demo: "https://github.com/CHINMAYVIVEK/liveClass",
      github: "https://github.com/CHINMAYVIVEK/liveClass",
    },
  },
  {
    id: "swift-school",
    title: "Swift School",
    description:
      "School administration system in Go and PostgreSQL for admissions, academics, fees, and reporting.",
    category: ["enterprise"],
    image: { icon: "school" },
    tag: { text: "Enterprise" },
    theme: { header: "#4a4458", fg: "#f5f3f8", inlineBg: "#edeaf2" },
    technologies: ["Go", "Docker", "PostgreSQL"],
    links: {
      demo: "https://github.com/CHINMAYVIVEK/SwiftSchool",
      github: "https://github.com/CHINMAYVIVEK/SwiftSchool",
    },
  },
];
