import type { ExpertisePanel } from "./types";

const tag = (label: string, className: string) => ({ label, className });

export const expertisePanels: ExpertisePanel[] = [
  {
    title: "Expert Skills & Technologies",
    icon: "skills",
    borderColor: "border-purple-50",
    groups: [
      {
        title: "Backend & Systems",
        gradient: "from-purple-50 to-indigo-50",
        tags: [
          tag("Go", "bg-indigo-100 text-indigo-700"),
          tag("Rust", "bg-purple-100 text-purple-700"),
          tag("Python", "bg-blue-100 text-blue-700"),
          tag("Microservices", "bg-indigo-100 text-indigo-700"),
        ],
      },
      {
        title: "Enterprise Solutions",
        gradient: "from-purple-50 to-indigo-50",
        tags: [
          tag("ERP Systems", "bg-indigo-100 text-indigo-700"),
          tag("FinTech Solutions", "bg-purple-100 text-purple-700"),
          tag("Payment Systems", "bg-blue-100 text-blue-700"),
          tag("Banking APIs", "bg-indigo-100 text-indigo-700"),
          tag("Odoo", "bg-indigo-100 text-indigo-700"),
        ],
      },
      {
        title: "Frontend & Mobile",
        gradient: "from-purple-50 to-indigo-50",
        tags: [
          tag("Next.js", "bg-indigo-100 text-indigo-700"),
          tag("Flutter", "bg-purple-100 text-purple-700"),
          tag("React", "bg-blue-100 text-blue-700"),
          tag("HTMX", "bg-indigo-100 text-indigo-700"),
        ],
      },
      {
        title: "AI & ML",
        gradient: "from-purple-50 to-indigo-50",
        tags: [
          tag("PyTorch", "bg-indigo-100 text-indigo-700"),
          tag("TensorFlow", "bg-purple-100 text-purple-700"),
          tag("LLMs", "bg-blue-100 text-blue-700"),
          tag("RAG", "bg-indigo-100 text-indigo-700"),
          tag("LangChain", "bg-purple-100 text-purple-700"),
          tag("LlamaIndex", "bg-blue-100 text-blue-700"),
          tag("FastAPI", "bg-indigo-100 text-indigo-700"),
          tag("MLOps", "bg-purple-100 text-purple-700"),
        ],
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "devops",
    borderColor: "border-green-50",
    accentColor: "text-green-600",
    groups: [
      {
        title: "Cloud Platforms",
        gradient: "from-green-50 to-cyan-50",
        tags: [
          tag("AWS", "bg-indigo-100 text-indigo-700"),
          tag("GCP", "bg-purple-100 text-purple-700"),
          tag("Lambda", "bg-blue-100 text-blue-700"),
          tag("GKE", "bg-blue-100 text-blue-700"),
          tag("Cloud Run", "bg-indigo-100 text-indigo-700"),
        ],
      },
      {
        title: "Infrastructure & Orchestration",
        gradient: "from-green-50 to-cyan-50",
        tags: [
          tag("Kubernetes", "bg-indigo-100 text-indigo-700"),
          tag("Docker", "bg-purple-100 text-purple-700"),
          tag("Terraform", "bg-blue-100 text-blue-700"),
          tag("IaC", "bg-indigo-100 text-indigo-700"),
        ],
      },
      {
        title: "Architecture Patterns",
        gradient: "from-green-50 to-cyan-50",
        tags: [
          tag("Microservices", "bg-indigo-100 text-indigo-700"),
          tag("Event-Driven Architecture", "bg-purple-100 text-purple-700"),
        ],
      },
    ],
  },
];

export const aiHubGroups: ExpertisePanel["groups"] = [
  {
    title: "LLM & Model Architecture",
    gradient: "from-indigo-50 to-purple-50",
    tags: [tag("PEFT", "bg-indigo-100 text-indigo-700"), tag("LoRA", "bg-purple-100 text-purple-700"), tag("QLoRA", "bg-blue-100 text-blue-700"), tag("Transformers", "bg-purple-100 text-purple-700")],
  },
  {
    title: "RAG & Knowledge Processing",
    gradient: "from-indigo-50 to-purple-50",
    tags: [tag("Vector Stores", "bg-indigo-100 text-indigo-700"), tag("Semantic Search", "bg-purple-100 text-purple-700"), tag("Knowledge Graphs", "bg-blue-100 text-blue-700")],
  },
  {
    title: "Agent Architecture",
    gradient: "from-pink-50 to-purple-50",
    tags: [tag("Multi-Agent Systems", "bg-indigo-100 text-indigo-700"), tag("LangChain", "bg-purple-100 text-purple-700"), tag("Tool Use", "bg-blue-100 text-blue-700")],
  },
  {
    title: "Model Operations",
    gradient: "from-indigo-50 to-purple-50",
    tags: [tag("Model Serving", "bg-indigo-100 text-indigo-700"), tag("A/B Testing", "bg-purple-100 text-purple-700"), tag("Monitoring", "bg-blue-100 text-blue-700")],
  },
  {
    title: "Generative AI",
    gradient: "from-purple-50 to-pink-50",
    tags: [tag("RAG", "bg-purple-100 text-purple-700"), tag("Vector DB", "bg-pink-100 text-pink-700"), tag("AI Agents", "bg-indigo-100 text-indigo-700")],
  },
  {
    title: "MLOps & Deployment",
    gradient: "from-rose-50 to-orange-50",
    tags: [tag("CI/CD", "bg-orange-100 text-orange-700"), tag("Kubernetes", "bg-rose-100 text-rose-700"), tag("Docker", "bg-yellow-100 text-yellow-700")],
  },
  {
    title: "Cloud Native",
    gradient: "from-blue-50 to-indigo-50",
    tags: [tag("Kubernetes", "bg-blue-100 text-blue-700"), tag("Docker", "bg-indigo-100 text-indigo-700"), tag("GitOps", "bg-purple-100 text-purple-700")],
  },
  {
    title: "Distributed Systems",
    gradient: "from-cyan-50 to-blue-50",
    tags: [tag("Microservices", "bg-cyan-100 text-cyan-700"), tag("gRPC", "bg-sky-100 text-sky-700"), tag("GraphQL", "bg-indigo-100 text-indigo-700")],
  },
];

export const coreTechnologies = [
  { label: "Python", className: "from-indigo-50 to-indigo-100 text-indigo-700" },
  { label: "Golang", className: "from-purple-50 to-purple-100 text-purple-700" },
  { label: "Rust", className: "from-pink-50 to-pink-100 text-pink-700" },
  { label: "PyTorch", className: "from-blue-50 to-blue-100 text-blue-700" },
  { label: "TensorFlow", className: "from-cyan-50 to-cyan-100 text-cyan-700" },
  { label: "Docker", className: "from-teal-50 to-teal-100 text-teal-700" },
  { label: "Kubernetes", className: "from-emerald-50 to-emerald-100 text-emerald-700" },
  { label: "AWS", className: "from-orange-50 to-orange-100 text-orange-700" },
];
