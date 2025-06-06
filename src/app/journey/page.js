"use client";

import { motion } from "framer-motion";
import Main from "../components/Main";
import Timeline from "../components/Timeline";
import items from "@/app/assets/journey.json";

const lines = [
  "Every step, every challenge,",
  "every triumph—this is my journey,",
  "told one chapter at a time.",
];

export default function Journey() {
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

      <Timeline items={items} />
    </Main>
  );
}
