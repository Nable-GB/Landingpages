"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/data/content";

type PortfolioCardProps = {
  project: PortfolioProject;
  index: number;
  onOpen: (project: PortfolioProject) => void;
};

export function PortfolioCard({ project, index, onOpen }: PortfolioCardProps) {
  return (
    <motion.article
      layout
      className="deck-panel group relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-none p-6 transition hover:border-cyanline/45 hover:bg-[#303039]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyanline/80 via-violetline/60 to-transparent opacity-50" />
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="border border-cyanline/30 bg-cyanline/10 px-2.5 py-1 text-[10px] font-semibold uppercase text-cyanline">
            {project.tag}
          </span>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="grid size-9 shrink-0 place-items-center border border-white/10 text-slate-300 transition group-hover:border-cyanline/50 group-hover:text-white"
            aria-label={`Open details for ${project.title}`}
          >
            <ArrowUpRight className="size-4" />
          </button>
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="deck-copy mt-4 text-sm leading-7">{project.summary}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.metrics.map((metric) => (
          <span key={metric} className="bg-black/20 px-2.5 py-1 text-xs text-slate-300">
            {metric}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
