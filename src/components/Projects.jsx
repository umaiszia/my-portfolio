import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="py-28 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[120px_1fr] gap-10 mb-12">
          <p className="font-mono text-sm text-accent">Work</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
            Selected projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video bg-surface-2 overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="font-display font-medium text-lg mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-surface-2 text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-text hover:text-accent transition-colors"
                    >
                      Live site <ExternalLink size={14} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
                    >
                      Code <GithubIcon size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
