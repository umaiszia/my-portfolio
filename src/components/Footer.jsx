import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <a href="#top" className="hover:text-text transition-colors">Back to top ↑</a>
      </div>
    </footer>
  );
}
