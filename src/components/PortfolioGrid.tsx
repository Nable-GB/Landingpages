"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { portfolioCategories, portfolioProjects, type PortfolioCategory, type PortfolioProject } from "@/data/content";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "./PortfolioCard";

type ActiveCategory = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [active, setActive] = useState<ActiveCategory>("All");
  const [selected, setSelected] = useState<PortfolioProject | null>(null);

  const visibleProjects = useMemo(
    () => (active === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filters">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "border px-3 py-2 text-xs transition",
              active === category
                ? "border-cyanline/70 bg-cyanline/15 text-white"
                : "border-white/12 bg-transparent text-slate-300 hover:border-cyanline/35 hover:bg-white/[0.05]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-px deck-grid-lines md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} onOpen={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-obsidian/82 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-dialog-title"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl border border-cyanline/30 bg-[#24242a] p-8 shadow-glow"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid size-9 place-items-center border border-white/10 text-slate-300 transition hover:text-white"
                aria-label="Close case study details"
              >
                <X className="size-4" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyanline">{selected.category}</p>
              <h3 id="portfolio-dialog-title" className="mt-4 pr-10 text-3xl font-semibold text-white">
                {selected.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{selected.details}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {selected.metrics.map((metric) => (
                  <div key={metric} className="border border-white/10 bg-black/20 p-4 text-sm font-medium text-white">
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
