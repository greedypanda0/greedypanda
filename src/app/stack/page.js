"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import stack from "@/app/assets/stack.json";
import Main from "../components/Main";

const badgeColor = {
  known: "bg-green-500/10 text-green-400 border-green-400",
  learning: "bg-yellow-500/10 text-yellow-400 border-yellow-400",
};

const lines = [
  "Tools of the trade",
  "my trusted powers forged",
  "in code and creativity."
]

export default function Stack() {
  return (
    <Main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        className="max-w-4xl my-16"
      >
        {lines.map((line, idx) => (
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light italic text-[var(--primary)]"
          >
            {line}
          </motion.h1>
        ))}
      </motion.div>

      {stack.map(({ type, list }, idx) => (
        <section key={type} className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.4 }}
            className="text-xl text-center font-semibold capitalize text-[var(--foreground)]"
          >
            {type}
          </motion.h2>

          <div className="mt-2 mb-10 w-20 h-1 bg-[var(--primary)] mx-auto rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {list.map(({ name, icon, status }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-lg border border-[var(--border)] hover:bg-[var(--accent)]/10 transition-colors"
              >
                <Image src={icon} alt={name} width={40} height={40} />
                <p className="mt-2 text-sm font-medium text-[var(--foreground)]">
                  {name}
                </p>
                {status && (
                  <span
                    className={`mt-1 text-xs px-2 py-0.5 border rounded-full shadow-sm font-semibold ${badgeColor[status]}`}
                  >
                    {status}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>
      ))}
    </Main>
  );
}
