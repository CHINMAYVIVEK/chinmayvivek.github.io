import type { ExpertisePanel, SkillGroup } from "./types";

export const expertisePanels: ExpertisePanel[] = [
  {
    title: "Expert Skills & Technologies",
    groups: [
      {
        title: "Backend & Systems",
        tags: ["Go", "Rust", "Python", "Microservices"],
      },
      {
        title: "Enterprise Solutions",
        tags: [
          "ERP Systems",
          "FinTech Solutions",
          "Payment Systems",
          "Banking APIs",
          "Odoo",
        ],
      },
      {
        title: "Frontend & Mobile",
        tags: ["Next.js", "Flutter", "React", "HTMX"],
      },
      {
        title: "AI & ML",
        tags: [
          "PyTorch",
          "TensorFlow",
          "LLMs",
          "RAG",
          "LangChain",
          "LlamaIndex",
          "FastAPI",
          "MLOps",
        ],
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    groups: [
      {
        title: "Cloud Platforms",
        tags: ["AWS", "GCP", "Lambda", "GKE", "Cloud Run"],
      },
      {
        title: "Infrastructure & Orchestration",
        tags: ["Kubernetes", "Docker", "Terraform", "IaC"],
      },
      {
        title: "Architecture Patterns",
        tags: ["Microservices", "Event-Driven Architecture"],
      },
    ],
  },
];

export const aiHubGroups: SkillGroup[] = [
  {
    title: "LLM & Model Architecture",
    tags: ["PEFT", "LoRA", "QLoRA", "Transformers"],
  },
  {
    title: "RAG & Knowledge Processing",
    tags: ["Vector Stores", "Semantic Search", "Knowledge Graphs"],
  },
  {
    title: "Agent Architecture",
    tags: ["Multi-Agent Systems", "LangChain", "Tool Use"],
  },
  {
    title: "Model Operations",
    tags: ["Model Serving", "A/B Testing", "Monitoring"],
  },
  {
    title: "Generative AI",
    tags: ["RAG", "Vector DB", "AI Agents"],
  },
  {
    title: "MLOps & Deployment",
    tags: ["CI/CD", "Kubernetes", "Docker"],
  },
  {
    title: "Cloud Native",
    tags: ["Kubernetes", "Docker", "GitOps"],
  },
  {
    title: "Distributed Systems",
    tags: ["Microservices", "gRPC", "GraphQL"],
  },
];

export const coreTechnologies = [
  "Python",
  "Golang",
  "Rust",
  "PyTorch",
  "TensorFlow",
  "Docker",
  "Kubernetes",
  "AWS",
];
