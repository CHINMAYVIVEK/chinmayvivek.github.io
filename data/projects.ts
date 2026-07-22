import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "sentinel-vision",
    title: "SentinelVision",
    description:
      "Real-time person and object tracking for production vision pipelines, built for speed and reliability in Rust.",
    outcomes: [
      "Low-latency multi-object tracking with OpenCV and ONNX",
      "SORT-based association for stable identity across frames",
      "Deployable core for enterprise surveillance and analytics",
    ],
    featured: true,
    category: ["enterprise", "ai"],
    image: {
      icon: "sentinel-vision",
      src: "https://github.com/CHINMAYVIVEK/SentinelVision/raw/main/screenshots/test_detection_result_letterbox.jpg",
    },
    tag: { text: "Computer Vision" },
    theme: { header: "#3d4a5c", fg: "#f2f4f7" },
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
      "Algorithmic trading stack with ML market signals, FastAPI services, and Redis for fintech automation.",
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
      "Credit scoring and fraud detection service for banking workflows, from model inference to containerized delivery.",
    category: ["fintech", "enterprise"],
    image: { icon: "risk" },
    tag: { text: "FinTech" },
    theme: { header: "#3d4f3a", fg: "#f4f6f0" },
    technologies: ["Rust", "scikit-learn", "PostgreSQL", "Docker"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "mobile-suite",
    title: "Enterprise Mobile Suite",
    description:
      "Cross-platform field app for data capture and analytics with Flutter, Firebase, and GraphQL.",
    category: ["enterprise"],
    image: { icon: "mobile" },
    tag: { text: "Full Stack" },
    theme: { header: "var(--ink)" },
    technologies: ["Flutter", "Dart", "Firebase", "GraphQL"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "llm-system",
    title: "Advanced LLM System",
    description:
      "Custom LLM training and serving stack for enterprise NLP and generative AI workloads on AWS.",
    category: ["ai"],
    image: {
      icon: "llm",
      src: "https://myoceane.fr/wp-content/uploads/2026/04/vllm.png",
    },
    tag: { text: "Generative AI" },
    theme: { header: "#2a3f6e", fg: "#f0f2f8" },
    technologies: ["Python", "PyTorch", "CUDA", "AWS"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "ml-platform",
    title: "Cloud-Native ML Platform",
    description:
      "Kubernetes ML platform for automated training, deployment, and monitoring with Go, MLflow, and Terraform.",
    category: ["enterprise"],
    image: { icon: "cloudMl" },
    tag: { text: "MLOps" },
    theme: { header: "#1a4d5c" },
    technologies: ["Go", "Kubernetes", "MLflow", "Terraform"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "crypto-trading-bot",
    title: "Crypto Trading Bot",
    description:
      "Automated crypto trading bot in Go with real-time market analysis, PostgreSQL, and Redis.",
    category: ["fintech"],
    image: { icon: "crypto" },
    tag: { text: "FinTech" },
    theme: { header: "#5c3d2e", fg: "#faf3ee" },
    technologies: ["Go", "Docker", "PostgreSQL", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "real-time-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    description:
      "Streaming analytics dashboard in Rust and Next.js for live operational visibility.",
    category: ["enterprise"],
    image: {
      icon: "analytics",
      src: "https://cdn.boldbi.com/wp/blogs/real-time-analytics/financial.webp",
    },
    tag: { text: "Full Stack" },
    theme: { header: "#3d4a5c", fg: "#f2f4f7" },
    technologies: ["Rust", "Next.js", "PostgreSQL", "Redis"],
    links: { demo: "#", github: "#" },
  },
  {
    id: "live-class",
    title: "Live Class",
    description:
      "Open source LMS for live online classes: courses, attendance, and real-time sessions with Go and HTMX.",
    category: ["enterprise"],
    image: {
      icon: "lms",
      src: "https://github.com/CHINMAYVIVEK/liveClass/raw/main/screenshots/Screenshot-1.png",
    },
    tag: { text: "Full Stack" },
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
      "School administration system for admissions, academics, fees, and reporting on Go and PostgreSQL.",
    category: ["enterprise"],
    image: { icon: "school" },
    tag: { text: "Full Stack" },
    theme: { header: "#4a4458", fg: "#f5f3f8" },
    technologies: ["Go", "Docker", "PostgreSQL"],
    links: {
      demo: "https://github.com/CHINMAYVIVEK/SwiftSchool",
      github: "https://github.com/CHINMAYVIVEK/SwiftSchool",
    },
  },
];
