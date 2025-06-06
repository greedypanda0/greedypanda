"use client";

import { useEffect, useState } from "react";
import DottedMap from "dotted-map";
import { motion } from "framer-motion";

export default function DottedIndiaMap() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    const map = new DottedMap({
      height: 60,
      grid: "diagonal",
      countries: ["IND"], // Only India
    });

    const svgData = map.getSVG({
      radius: 0.2,
      color: "#cccccc",
      shape: "circle",
    });

    setSvg(svgData);
  }, []);

  return (
    <div className="relative w-full max-w-3xl h-[300px] mx-auto">
      {/* Render SVG map */}
      <div
        className="absolute inset-0"
        dangerouslySetInnerHTML={{ __html: svg }}
      />

      {/* Flickering dot on India */}
      <motion.div
        className="absolute"
        style={{
          top: "48%", // You can fine-tune these if needed
          left: "22.5%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          opacity: [1, 0.6, 1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#ff2d55] shadow-md" />
      </motion.div>
    </div>
  );
}
