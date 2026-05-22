"use client";

import { motion } from "framer-motion";
import { roadmapItems } from "@/data/content";

export function RoadmapTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyanline via-violetline to-mintline md:block" />
      <div className="grid gap-4">
        {roadmapItems.map((item, index) => (
          <motion.article
            key={item.year}
            className="deck-panel relative p-7 pl-7 md:ml-14"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="absolute -left-[3.3rem] top-7 hidden size-10 place-items-center border border-cyanline/45 bg-obsidian text-sm font-semibold text-cyanline shadow-glow md:grid">
              {index + 1}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="border border-violetline/40 bg-violetline/10 px-3 py-1 text-sm font-semibold text-violet-100">
                {item.year}
              </span>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="deck-copy mt-4 text-base leading-8">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
