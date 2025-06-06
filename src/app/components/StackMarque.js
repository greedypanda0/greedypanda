"use client";
import stack from "@/app/assets/stack.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StackMarque() {
  const languages = stack.find((c) => c.type === "languages")?.list || [];
  const tools = stack.find((c) => c.type === "tools")?.list || [];

  const langDuration = 20;
  const toolDuration = 25;

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"], // Move by half because we duplicate content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: langDuration,
          ease: "linear",
        },
      },
    },
  };

  const marqueeReverseVariants = {
    animate: {
      x: ["-50%", "0%"], // Reverse direction
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: toolDuration,
          ease: "linear",
        },
      },
    },
  };

  // Helper to render marquee items twice for seamless scroll
  function MarqueeRow({ items, variants }) {
    return (
      <div className="overflow-hidden whitespace-nowrap relative">
        <motion.div
          className="inline-flex gap-8 w-[200%]" // 2x width for double content
          variants={variants}
          animate="animate"
        >
          {[...items, ...items].map(({ name, icon }, idx) => (
            <div
              key={name + "-" + idx}
              className="flex flex-col items-center w-20 flex-shrink-0"
            >
              <Image src={icon} alt={name} width={40} height={40} />
              <span className="mt-1 text-sm text-center">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-evenly">
       {/* Languages */}
      <MarqueeRow items={languages} variants={marqueeVariants} />

      {/* Tools */}
      <MarqueeRow items={tools} variants={marqueeReverseVariants} />
    </div>
  );
}
