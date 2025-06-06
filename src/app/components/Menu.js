"use client";

import { useState } from "react";
import { AlignCenter } from "lucide-react";
import Link from "next/link";
import usePages from "../hooks/usePages";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu() {
  const pages = usePages();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-50 md:hidden">
      <button
        title="Menu"
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-full hover:bg-[var(--accent)]/30 transition-colors"
      >
        <AlignCenter className="w-5 h-5 text-[var(--foreground)] hover:animate-pulse" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute mt-2 right-0 bg-[var(--popover)] border border-[var(--border)] rounded-md shadow-lg origin-top-right"
          >
            <div className="flex flex-col gap-3 py-2">
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  className="px-4 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/40 transition-colors"
                  title={page.name}
                  onClick={() => setOpen(false)}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
