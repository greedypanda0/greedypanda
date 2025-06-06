"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Timeline({ items = [] }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative max-w-4xl mx-auto px-6 sm:px-12 py-16">
      {/* Vertical line */}
      <div className="absolute top-0 left-8 sm:left-14 h-full w-px bg-[var(--border)]" />

      <div className="space-y-20">
        {items.map((item, idx) => {
          const isActive =
            currentYear >= item.from &&
            (item.to === "Present" || currentYear <= item.to);
          const toDisplay =
            item.to === "Present" ? "Present" : item.to || currentYear;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-6 sm:gap-8 items-start"
            >
              {/* Dot */}
              <div className="absolute top-1 left-0 sm:left-0">
                <div
                  className={clsx(
                    "w-4 h-4 rounded-full border-2 transition-all duration-300",
                    isActive
                      ? "bg-[var(--primary)] border-[var(--primary)] animate-pulse"
                      : "bg-[var(--popover)] border-[var(--secondary)]"
                  )}
                />
              </div>

              {/* Optional Icon */}
              {item.icon && (
                <div className="min-w-[48px] ml-5">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={48}
                    height={48}
                    className="rounded-full border border-[var(--border)] bg-white/10"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title}{" "}
                  <span className="text-[var(--primary)] font-normal">
                    @ {item.company || item.name}
                  </span>
                </h3>
                <p className="text-sm italic text-[var(--muted-foreground)] mt-1">
                  {item.from} – {toDisplay}
                </p>

                {/* Tech Stack */}
                {item.technologies && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                {item.description && (
                  <ul className="text-sm mt-4 list-disc list-inside space-y-1 text-[var(--foreground)]">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}

                {/* Highlights */}
                {item.highlights && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[var(--primary)] mb-1">
                      Highlights
                    </h4>
                    <ul className="text-sm list-disc list-inside space-y-1 text-[var(--foreground)]">
                      {item.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
