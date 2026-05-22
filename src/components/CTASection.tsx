"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ctaCards } from "@/data/content";

export function CTASection() {
  return (
    <section id="contact" className="deck-section relative overflow-hidden px-5 py-20 md:px-8 xl:py-28">
      <div className="deck-container grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-stretch">
        <div className="py-4">
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="deck-chip">Contact Us</span>
            <span className="deck-chip">Partnership</span>
            <span className="deck-chip">Treasury</span>
          </div>
          <h2 className="deck-title max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-7xl">
            Build Companies. Operate Treasury. Scale Global Value.
          </h2>
          <p className="deck-copy mt-8 max-w-5xl text-base leading-8 md:text-xl">
            Company Building, Ethereum Treasury, and global blockchain infrastructure to build long-term enterprise value.
            We build long-term enterprise value through Company Building, Ethereum Treasury, and Global Blockchain Infrastructure.
          </p>
          <div className="mt-8 grid gap-px deck-grid-lines">
            {ctaCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href="mailto:partnerships@speednano.com"
                  className="group deck-panel flex min-h-[128px] items-center gap-5 rounded-none p-6 transition hover:border-cyanline/45 hover:bg-[#303039]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violetline to-cyanline text-obsidian">
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3 text-2xl font-semibold text-white">
                      {card.title}
                      <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition group-hover:text-white" />
                    </span>
                    <span className="deck-copy mt-3 block text-base leading-6">{card.description}</span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-hero-generated bg-cover bg-center lg:min-h-[760px]">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-800/12 via-violetline/10 to-obsidian/40" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,8,.2),transparent_45%),linear-gradient(180deg,transparent_45%,rgba(3,3,8,.72)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-obsidian/82 to-transparent" />
          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 items-end gap-5">
            {[92, 120, 150, 118, 96].map((height, index) => (
              <div
                key={height + index}
                className="w-12 rounded-t-full bg-obsidian/72 shadow-[24px_50px_55px_rgba(0,0,0,.55)]"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
