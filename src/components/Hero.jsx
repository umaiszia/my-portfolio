import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/portfolio";

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: `name: "${profile.name}",` },
  { indent: 1, text: `role: "${profile.role}",` },
  { indent: 1, text: "stack: ['React', 'JavaScript', 'Tailwind'].sort()," },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];

function useTypewriter(lines, speed = 22, startDelay = 400) {
  const [renderedLines, setRenderedLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    const acc = [];

    const tick = () => {
      if (cancelled) return;
      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }
      const current = lines[lineIndex];
      charIndex++;
      acc[lineIndex] = current.text.slice(0, charIndex);
      setRenderedLines([...acc]);

      if (charIndex >= current.text.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, 120);
      } else {
        setTimeout(tick, speed);
      }
    };

    const starter = setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(starter);
    };
  }, [lines, speed, startDelay]);

  return { renderedLines, done };
}

export default function Hero() {
  const { renderedLines, done } = useTypewriter(codeLines);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-24 pb-16"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-accent mb-4">{"// frontend developer"}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            Hi, I'm {profile.name.split(" ")[0]}.
            <br />
            I build for <span className="text-accent">the web</span>.
          </h1>
          <p className="mt-6 text-muted text-lg max-w-md">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-5 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              See my work
            </a>
            <a
              href={profile.resumeUrl}
              className="px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Download résumé
            </a>
          </div>

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

        {/* signature element: a fake code editor "typing" the developer's own object */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 font-mono text-xs text-muted">about-me.js</span>
          </div>
          <pre className="font-mono text-sm leading-7 p-6 overflow-x-auto min-h-[220px]">
            {renderedLines.map((line, i) => (
              <div key={i}>
                <span className="text-muted/50 select-none mr-4">{String(i + 1).padStart(2, "0")}</span>
                <span style={{ paddingLeft: `${codeLines[i]?.indent * 16}px` }} className="text-text/90">
                  {line}
                  {i === renderedLines.length - 1 && !done && (
                    <span className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle animate-pulse" />
                  )}
                </span>
              </div>
            ))}
          </pre>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-text transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
