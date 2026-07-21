import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

type SocialIconType = "github" | "linkedin" | "x" | "medium";

const socialIconPaths: Record<SocialIconType, string> = {
  github:
    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  linkedin:
    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  medium:
    "M4.257 4.602h3.822v14.796H4.257V4.602zm7.198 0h3.59v2.101h.052c.5-.948 1.721-1.87 3.538-1.87 3.77 0 4.466 2.479 4.466 5.707v8.758h-3.76v-8.221c0-2.063-.039-4.713-3.007-4.713-2.91 0-3.356 2.275-3.356 4.622v8.312H11.455V4.602z",
};

const socialLinks: { href: string; label: string; icon: SocialIconType }[] = [
  { href: "https://github.com/chinmayvivek", label: "GitHub", icon: "github" },
  {
    href: "https://linkedin.com/in/chinmayvivek",
    label: "LinkedIn",
    icon: "linkedin",
  },
  { href: "https://twitter.com/chinmayvivek", label: "X", icon: "x" },
  {
    href: "https://chinmayvivek.medium.com/",
    label: "Medium",
    icon: "medium",
  },
];

function formatSocialHref(href: string) {
  const { hostname, pathname } = new URL(href);
  const host = hostname.replace(/^www\./, "");
  const path = pathname.replace(/\/$/, "");
  return path ? `${host}${path}` : host;
}

export function Contact() {
  return (
    <section id="contact" className="site-section site-section--muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Collaborate"
          title="Get in"
          titleAccent="Touch"
          description="Open to building AI products and full-stack systems with startups and product teams. Based in Bangalore."
        />

        <div className="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-start">
          <article className="site-card p-8 lg:p-10">
            <h3 className="site-card__title text-xl mb-2">Find me online</h3>
            <p className="text-sm text-[var(--muted)] mb-6">
              GitHub, LinkedIn, writing, and updates.
            </p>
            <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-[var(--radius)] border border-[var(--border)] px-4 py-3 text-[var(--muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper)] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]">
                        <SocialIcon type={link.icon} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                          {link.label}
                        </span>
                        <span className="block truncate text-xs text-[var(--muted)]">
                          {formatSocialHref(link.href)}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
          </article>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }: { type: SocialIconType }) {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d={socialIconPaths[type]} />
    </svg>
  );
}
