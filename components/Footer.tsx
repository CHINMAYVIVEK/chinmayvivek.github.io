import { ScrollToTop } from "./ScrollToTop";

export function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--paper)] py-12 border-t border-white/10">
      <div className="site-container relative">
        <div className="text-center py-2">
          <p className="font-display text-lg mb-2">
            Chinmay <span className="italic text-[var(--accent-soft)]">Vivek</span>
          </p>
          <p className="text-sm text-white/70">&copy; 2026 Chinmay Vivek. All rights reserved.</p>
          <p className="text-sm text-white/55 mt-3 max-w-xl mx-auto leading-relaxed">
            Applied AI Research Engineer · Full Stack Developer. Building scalable AI products for
            startups.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
