import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "trading-platform",
    title: "AI-Powered Trading Platform",
    description:
      "Algorithmic trading platform with machine learning market signals, Python, TensorFlow, FastAPI, and Redis for fintech automation.",
    category: ["fintech", "ai"],
    image: {
      gradient: { from: "green-500", to: "emerald-500" },
      icon: "trading",
    },
    tag: { text: "FinTech AI", color: "green-600" },
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "risk-assessment",
    title: "ML Risk Assessment System",
    description:
      "Credit scoring and fraud detection ML service built with Rust, scikit-learn, PostgreSQL, and Docker for banking workflows.",
    category: ["fintech", "enterprise"],
    image: {
      gradient: { from: "amber-500", to: "orange-500" },
      icon: "risk",
    },
    tag: { text: "FinTech", color: "amber-600" },
    technologies: ["Rust", "scikit-learn", "PostgreSQL", "Docker"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "mobile-suite",
    title: "Enterprise Mobile Suite",
    description:
      "Cross-platform enterprise mobile app for field data capture and analytics using Flutter, Firebase, and GraphQL.",
    category: ["enterprise"],
    image: {
      gradient: { from: "violet-500", to: "purple-500" },
      icon: "mobile",
    },
    tag: { text: "Enterprise", color: "violet-600" },
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "llm-system",
    title: "Advanced LLM System",
    description:
      "Custom LLM training and serving stack with PyTorch, CUDA, and AWS for enterprise NLP and generative AI workloads.",
    category: ["ai"],
    image: {
      gradient: { from: "indigo-500", to: "purple-500" },
      icon: "llm",
    },
    tag: { text: "AI/ML", color: "indigo-600" },
    technologies: ["Python", "PyTorch", "CUDA", "AWS"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "ml-platform",
    title: "Cloud-Native ML Platform",
    description:
      "Kubernetes ML platform with Go, MLflow, and Terraform for automated model training, deployment, and monitoring.",
    category: ["enterprise"],
    image: {
      gradient: { from: "blue-500", to: "cyan-500" },
      icon: "cloudMl",
    },
    tag: { text: "Enterprise", color: "blue-600" },
    technologies: ["Go", "Kubernetes", "MLflow", "Terraform"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "crypto-trading-bot",
    title: "Crypto Trading Bot",
    description:
      "Automated cryptocurrency trading bot in Go with real-time market analysis, PostgreSQL, and Redis.",
    category: ["fintech"],
    image: {
      gradient: { from: "pink-500", to: "rose-500" },
      icon: "crypto",
    },
    tag: { text: "FinTech", color: "pink-600" },
    technologies: ["Go", "Docker", "PostgreSQL", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "real-time-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    description:
      "Real-time analytics dashboard in Rust and Next.js with PostgreSQL and Redis for streaming data visualization.",
    category: ["enterprise"],
    image: {
      gradient: { from: "blue-500", to: "cyan-500" },
      icon: "analytics",
    },
    tag: { text: "Enterprise", color: "blue-700" },
    technologies: ["Rust", "Docker", "PostgreSQL", "Redis", "Next.Js"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "live-class",
    title: "Live Class",
    description:
      "Open source learning management system (LMS) for live online classes. Go, PostgreSQL, Docker, and HTMX for courses and attendance.",
    category: ["enterprise"],
    image: {
      gradient: { from: "blue-500", to: "cyan-500" },
      icon: "lms",
    },
    tag: { text: "Enterprise", color: "blue-700" },
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
    image: {
      gradient: { from: "blue-500", to: "cyan-500" },
      icon: "school",
    },
    tag: { text: "Enterprise", color: "blue-700" },
    technologies: ["Go", "Docker", "PostgreSQL"],
    links: {
      demo: "https://github.com/CHINMAYVIVEK/SwiftSchool",
      github: "https://github.com/CHINMAYVIVEK/SwiftSchool",
    },
  },
];
