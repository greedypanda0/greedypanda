"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Main from "../components/Main";
import projects from "@/app/assets/projects.json";
import { ExternalLink, Github } from "lucide-react";

const lines = [
  "Crafted in code,",
  "built with passion,",
  "powered by curiosity.",
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => {
      itemRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const active = projects[activeIndex];

  return (
    <Main>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="max-w-4xl my-16"
      >
        {lines.map((line, idx) => (
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light italic text-[var(--primary)]"
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMobile ? "auto" : 350, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
        className="my-16 flex flex-col md:flex-row w-full h-[70vh] md:h-88 gap-2"
      >
        {/* Left Pane */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto snap-y snap-mandatory space-y-2 pr-2">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              ref={(el) => (itemRefs.current[idx] = el)}
              data-index={idx}
              initial={false}
              animate={
                isMobile
                  ? { opacity: 1, scale: 1 }
                  : activeIndex === idx
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0.6, scale: 0.95 }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`snap-center px-6 py-4 rounded-xl border ${
                isMobile
                  ? "border-transparent"
                  : activeIndex === idx
                  ? "bg-[var(--card)] border-[var(--accent)]"
                  : "border-transparent"
              }`}
            >
              <h2 className="text-xl mb-1 font-light text-[var(--primary)]">
                {item.name}
              </h2>
              <p className="text-sm text-gray-200 mb-2">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Link
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                )}
              </div>

              {item.stack?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="flex items-center gap-1 text-xs px-2 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent-foreground)] rounded-full"
                    >
                      <span className="text-[10px] leading-none opacity-80">
                        ⟡
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Pane */}
        <div className="hidden md:flex w-1/2 h-full bg-[var(--card)] rounded-xl p-4 items-center justify-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full rounded overflow-hidden border border-zinc-800"
            >
              {active.url ? (
                <iframe
                  title={`${active.name} Preview`}
                  src={active.url}
                  className="w-full h-full"
                  loading="lazy"
                />
              ) : active.github ? (
                <img
                  src={`https://opengraph.githubassets.com/1${
                    new URL(active.github).pathname
                  }`}
                  alt="GitHub Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                  No preview available
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </Main>
  );
}
