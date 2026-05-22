"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";
import { heroStats } from "@/data/content";
import { StatsBar } from "./StatsBar";

export function Hero() {
  return (
    <section id="top" className="deck-section relative min-h-screen overflow-hidden px-5 pb-16 pt-24 md:px-8 md:pt-28">
      <div className="absolute inset-0 z-0 bg-obsidian" />
      <div className="absolute inset-0 z-0 bg-world-network bg-[length:115%_auto] bg-center bg-no-repeat opacity-95" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(3,3,8,.18),rgba(3,3,8,.72)_58%,rgba(3,3,8,.98)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-56 bg-gradient-to-t from-obsidian to-transparent" />

      <div className="deck-container relative z-10">
        <div className="relative text-center">
          <motion.div
            className="mb-10 flex flex-wrap justify-center gap-3 xl:absolute xl:left-0 xl:top-0 xl:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="deck-chip">DLTRACK Record</span>
            <span className="deck-chip">19+ Projects</span>
            <span className="deck-chip">Global Execution</span>
          </motion.div>
          <motion.p
            className="mb-8 pt-4 text-lg font-medium text-slate-300 md:pt-24 md:text-2xl xl:pt-28"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Speednano BOI Thailand Corporation
          </motion.p>
          <motion.h1
            className="deck-title mx-auto max-w-5xl text-balance text-5xl font-semibold leading-tight md:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Proven Global Web3 Blockchain Company Builder
          </motion.h1>
          <motion.div
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-cyanline/65 bg-cyanline/12 px-5 py-3 font-semibold text-cyan-100 transition hover:bg-cyanline hover:text-obsidian"
            >
              Request Investor Deck
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 border border-violetline/60 bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-violetline/15"
            >
              Discuss Partnership
              <CalendarClock className="size-4" />
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl md:mt-20">
          <StatsBar stats={heroStats} />
        </div>
      </div>
    </section>
  );
}
