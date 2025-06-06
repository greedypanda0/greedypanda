"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Timeline({ items = [] }) {
  let currentYear = new Date().getFullYear();

  return (
    <div className="relative max-w-4xl mx-auto px-6 sm:px-12 py-12">
      {/* Vertical Line */}
      <div className="absolute top-0 left-8 sm:left-14 h-full w-px bg-[var(--border)]" />

      <div className="space-y-20">
        {items.map((item, idx) => {
          const isActive = currentYear >= item.from && currentYear <= item.to;
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
                    "w-4 h-4 rounded-full bg-[var(--popover)] border-2 border-[var(--secondary)]",
                    isActive ? "bg-[var(--primary)] animate-pulse" : ""
                  )}
                />
              </div>

              {/* Icon */}
              <div className="min-w-[48px]">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={48}
                  height={48}
                  className="rounded-full border border-[var(--border)] bg-white/10 ml-5"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {item.title} @{" "}
                  <span className="text-[var(--primary)]">{item.name}</span>
                </h3>
                <p className="text-sm italic text-[var(--muted-foreground)] mt-1">
                  {item.from} – {item.to}
                </p>
                <p className="text-sm mt-2 text-[var(--foreground)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
