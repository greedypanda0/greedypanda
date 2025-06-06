"use client";

import Image from "next/image";
import Typewriter from "./Typewriter";
import SocialList from "./SocialList";
import StackMarque from "./StackMarque";
import Map from "./Map";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* About me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex flex-col md:flex-row items-center justify-between my-16"
      >
        <div className="flex flex-col gap-2 text-xl font-bold sm:text-3xl w-full md:w-[70%]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            I&apos;m Pratham, a Software Developer
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            building{" "}
            <span className="inline-flex items-center">
              <Typewriter
                texts={[
                  "Amazing",
                  "Loving",
                  "Creative",
                  "Innovative",
                  "Passionate",
                  "Relentless",
                  "Curious",
                  "Focused",
                  "Driven",
                  "Visionary",
                  "Bold",
                  "Meticulous",
                  "Dynamic",
                  "Problem Solver",
                  "Builder",
                ]}
              />
            </span>{" "}
            things
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
          >
            from scratch.
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
          className="w-0 md:w-[30%] h-fit flex justify-center items-center mt-6 md:mt-0"
        >
          <Image
            src="/icon.png"
            alt="icon"
            width={100}
            height={100}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Tools / About Me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-between my-16"
      >
        <h1 className="text-center text-3xl font-semibold">About Me</h1>

        <div className="mt-12 grid w-full gap-4 md:grid-cols-2 rounded-xl">
          <div className="grid w-full gap-4 rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex h-60 w-full flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6 border border-[var(--border)]"
            >
              <Map />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex h-60 w-full flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6 border border-[var(--border)]"
            >
              <StackMarque />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
            className="grid w-full gap-4 rounded-xl"
          >
            <div className="flex w-full flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6 border border-[var(--border)]">
              <SocialList />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
