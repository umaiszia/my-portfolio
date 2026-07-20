import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[120px_1fr] gap-10">
        <p className="font-mono text-sm text-accent">Skills</p>

        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-display font-medium text-text mb-3">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
