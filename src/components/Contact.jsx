import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[120px_1fr] gap-10">
        <p className="font-mono text-sm text-accent">Contact</p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
            Have a project in mind? Let's build it.
          </h2>
          <p className="text-muted mt-4 max-w-md">
            I'm currently open to freelance work and full-time roles. The fastest way to reach me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-block mt-8 px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex items-center gap-5 text-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-text transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
