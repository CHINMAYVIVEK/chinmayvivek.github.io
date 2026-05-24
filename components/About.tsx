import { SectionHeader } from "@/components/ui/SectionHeader";

const whatIDo = [
  "Ship MVPs and full-stack products for early-stage startups",
  "Design cloud-native backends in Go, Rust, and Python",
  "Integrate LLMs, generative AI, and computer vision into live products",
  "Move ML prototypes from proof of concept to production on Kubernetes",
];

const skillBars = [
  { label: "AI and machine learning", percent: 82 },
  { label: "System architecture", percent: 85 },
  { label: "Programming", percent: 88 },
];

const skillChips = ["Python", "Golang", "PyTorch", "FastAPI", "Kubernetes", "AWS"];

export function About() {
  return (
    <section id="about" className="site-section site-section--alt">
      <div className="site-container">
        <SectionHeader
          eyebrow="Background"
          title="About"
          titleAccent="Me"
          description="Chinmay Vivek is an Applied AI Research Engineer in Bangalore. He builds scalable AI products for startups: LLM apps, RAG pipelines, and cloud ML backends."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <article className="site-card p-8 lg:p-10">
            <h3 className="site-card__title text-xl mb-5">My journey</h3>
            <p className="site-card__body mb-6">
              I am <strong className="text-[var(--ink)] font-medium">Chinmay Vivek</strong>, an Applied AI
              Research Engineer focused on startup products. My work spans generative AI, LLM applications,
              retrieval augmented generation (RAG), multi-agent systems, and AI infrastructure, including
              model tuning, FastAPI services, and Kubernetes-based MLOps on AWS and GCP.
            </p>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              What I do
            </p>
            <ul className="space-y-3">
              {whatIDo.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--muted)] text-[0.9375rem] leading-relaxed">
                  <span className="site-bullet" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="site-card p-8 lg:p-10">
            <h3 className="font-display text-2xl text-[var(--ink)] mb-8">
              Core <span className="text-[var(--accent)] italic">skills</span>
            </h3>
            <div className="space-y-6 mb-8">
              {skillBars.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium text-[var(--ink)]">{skill.label}</span>
                    <span className="font-semibold text-[var(--accent)]">{skill.percent}%</span>
                  </div>
                  <div className="site-progress">
                    <div className="site-progress__fill" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {skillChips.map((chip) => (
                <span key={chip} className="site-chip">
                  {chip}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
