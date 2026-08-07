import { ScrollToTop } from "./ScrollToTop";

export function Footer() {
  return (
    <footer className="relative bg-[var(--footer-bg)] text-[var(--footer-fg)] py-12 border-t border-white/10">
      <div className="site-container relative">
        <div className="text-center py-2">
          <p className="font-display text-lg mb-2">
            Chinmay <span className="italic text-[var(--accent)]">Vivek</span>
          </p>
          <p className="text-sm" style={{ color: "var(--footer-muted)" }}>
            &copy; 2026 Chinmay Vivek. All rights reserved.
          </p>
          <p
            className="text-sm mt-3 max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--footer-subtle)" }}
          >
            Applied AI · Product systems. Building scalable AI products for startups.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
