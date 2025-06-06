"use client";

import { Sun } from "lucide-react";
import { useThemeContext } from "../context/Theme";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeChanger() {
  const { theme, setTheme, list } = useThemeContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-50">
      <button
        title="Themes"
        onClick={() => setOpen((o) => !o)}
        className="p-2 rounded-full hover:bg-[var(--accent)]/30 transition-colors"
      >
        <Sun className="w-5 h-5 text-[var(--foreground)] hover:animate-spin" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute mt-2 w-40 right-0 bg-[var(--popover)] border border-[var(--border)] rounded-md shadow-lg origin-top"
          >
            <div className="py-1 flex flex-col">
              {list.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTheme(item);
                    setOpen(false);
                  }}
                  className={`px-4 py-2 text-left text-sm text-[var(--foreground)] hover:bg-[var(--accent)]/40 transition-colors ${
                    item === theme
                      ? "font-semibold text-[var(--accent-foreground)] bg-[var(--accent)]/20"
                      : ""
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
