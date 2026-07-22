import { SectionHeader } from "@/components/ui/SectionHeader";

const researchAreas = [
  {
    title: "AI and machine learning",
    badge: "15+ projects",
    items: [
      "Deep learning model design",
      "Natural language processing (NLP)",
      "Computer vision for production apps",
    ],
    impactLabel: "Research impact",
    impact: "15+ shipped projects",
  },
  {
    title: "Generative AI and LLMs",
    badge: "10+ projects",
    items: [
      "Large language model (LLM) fine-tuning",
      "Text-to-image and multimodal pipelines",
      "Prompt engineering and evaluation",
    ],
    impactLabel: "Industry impact",
    impact: "12 enterprise LLM deployments",
  },
  {
    title: "Enterprise and cloud AI",
    badge: "20+ deployments",
    items: [
      { label: "Distributed systems on Kubernetes", stat: "99.9% uptime" },
      { label: "Multi-cloud AI infrastructure", stat: "AWS and GCP" },
      { label: "Microservices for ML APIs", stat: "1M+ API calls" },
    ],
    impactLabel: "Business impact",
    impact: "50+ client engagements",
  },
];

export function Research() {
  return (
    <section id="research" className="site-section site-section--alt">
      <div className="site-container">
        <SectionHeader
          eyebrow="Research"
          title="Research"
          titleAccent="Interests"
          description="Applied AI research by Chinmay Vivek: generative AI, LLM application development, RAG, AI agent systems, and production machine learning for fintech and enterprise."
        />

        <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <article key={area.title} className="site-card p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="font-display text-xl text-[var(--ink)] leading-snug">{area.title}</h3>
                <span className="site-tag shrink-0">{area.badge}</span>
              </div>
              <p className="text-sm font-semibold text-[var(--ink)] mb-4">Core focus areas</p>
              <ul className="space-y-3 mb-6">
                {area.items.map((item) =>
                  typeof item === "string" ? (
                    <li key={item} className="flex gap-3 text-[var(--muted)] text-sm">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ) : (
                    <li key={item.label} className="flex gap-3 text-[var(--muted)] text-sm">
                      <CheckIcon />
                      <span className="flex-1">{item.label}</span>
                      <span className="font-medium text-[var(--accent)] shrink-0">{item.stat}</span>
                    </li>
                  ),
                )}
              </ul>
              <div className="pt-4 border-t border-[var(--border)] flex justify-between gap-4 text-sm">
                <span className="text-[var(--muted)]">{area.impactLabel}</span>
                <span className="font-semibold text-[var(--accent)] text-right">{area.impact}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[var(--accent)] mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
