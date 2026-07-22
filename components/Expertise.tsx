import type { ExpertisePanel, SkillGroup } from "@/data/types";
import { aiHubGroups, coreTechnologies, expertisePanels } from "@/data/expertiseData";
import { SectionHeader } from "@/components/ui/SectionHeader";

function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="site-skill-group">
      <p className="site-skill-group__title">{group.title}</p>
      <div className="flex flex-wrap gap-2">
        {group.tags.map((t) => (
          <span key={t} className="site-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PanelCard({ panel }: { panel: ExpertisePanel }) {
  return (
    <article className="site-card p-8 h-full">
      <div className="text-[var(--accent)] mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
      <h3 className="site-card__title text-xl mb-6">{panel.title}</h3>
      <div className="space-y-4">
        {panel.groups.map((g) => (
          <SkillGroupCard key={g.title} group={g} />
        ))}
      </div>
    </article>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="site-section site-section--muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Skills"
          title="Professional"
          titleAccent="Expertise"
          description="Skills of Chinmay Vivek as an AI systems architect: generative AI development, LLM engineering, RAG, AI agents, MLOps, and distributed ML on AWS, GCP, and Kubernetes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {expertisePanels.map((panel) => (
            <PanelCard key={panel.title} panel={panel} />
          ))}
        </div>

        <article className="site-card p-8 lg:p-10">
          <h3 className="font-display text-2xl text-[var(--ink)] mb-2">
            Enterprise AI and <span className="text-[var(--accent)] italic">research</span>
          </h3>
          <p className="text-[var(--muted)] mb-6">Deep learning, LLMs, and knowledge systems</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {aiHubGroups.map((g) => (
              <SkillGroupCard key={g.title} group={g} />
            ))}
          </div>
          <div className="pt-6 border-t border-[var(--border)]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Core technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {coreTechnologies.map((tech) => (
                <span key={tech} className="site-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-14 text-center">
          <p className="text-[var(--muted)] mb-5">Need an AI engineer for LLM or MLOps work? Book a short intro call.</p>
          <a href="#contact" className="site-btn site-btn--primary">
            Book a call
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
