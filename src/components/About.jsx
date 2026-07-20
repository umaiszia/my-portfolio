import { motion } from "framer-motion";
import { about, profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[120px_1fr] gap-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent"
        >
          About
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            A developer who cares about the last 10%.
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <p className="text-sm text-muted mt-6">
            Based in {profile.location} · Open to remote work
          </p>
        </motion.div>
      </div>
    </section>
  );
}
