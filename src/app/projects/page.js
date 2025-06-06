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
  "Crafted in code,",
  "built with passion,",
  "powered by curiosity.",
  "(coming soon)"
];

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
    </Main>
  );
}
