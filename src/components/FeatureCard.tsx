"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const accentClasses = {
  cyan: "from-cyanline/20 to-cyanline/0 text-cyanline shadow-glow",
  violet: "from-violetline/20 to-violetline/0 text-violetline shadow-violet",
  mint: "from-mintline/20 to-mintline/0 text-mintline shadow-[0_0_44px_rgba(47,240,180,0.18)]",
  gold: "from-amber-300/20 to-amber-300/0 text-amber-200 shadow-[0_0_44px_rgba(251,191,36,0.16)]",
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: keyof typeof accentClasses;
  index?: number;
  compact?: boolean;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  accent = "cyan",
  index = 0,
  compact = false,
}: FeatureCardProps) {
  return (
    <motion.article
      className="deck-panel group relative h-full overflow-hidden rounded-none p-7 transition hover:border-cyanline/45 hover:bg-[#303039]"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-75", accentClasses[accent])} />
      <div className={cn("mb-5 inline-grid size-12 place-items-center border border-white/12 bg-black/20", accentClasses[accent])}>
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className={cn("font-semibold text-slate-100", compact ? "text-xl" : "text-2xl")}>{title}</h3>
      <p className="deck-copy mt-4 text-base leading-8">{description}</p>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}
