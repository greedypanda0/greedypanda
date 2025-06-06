"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeChanger from "./ThemeChanger";
import Menu from "./Menu";
import usePages from "../hooks/usePages";

export default function Navbar() {
  const pages = usePages();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      }}
      className="fixed top-4 inset-x-0 z-40 mx-4 md:mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl bg-[var(--background)]/30 backdrop-blur-md px-6 shadow-md border border-[var(--border)]"
    >
      <div className="text-[var(--primary)] font-bold text-lg [font-family:var(--font-pacifico)]">
        <Link href="/">Pratham Rajpoot</Link>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-4">
          {pages.map((page, idx) => (
            <Link
              key={idx}
              href={page.href}
              className="text-sm text-[var(--foreground)] border-b-2 border-transparent hover:border-[var(--primary)] transition-all duration-300 font-semibold"
              title={page.name}
            >
              {page.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-row items-center gap-3">
          <ThemeChanger />
          <Menu />
        </div>
      </div>
    </motion.header>
  );
}
