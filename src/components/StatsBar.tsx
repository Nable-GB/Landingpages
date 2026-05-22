"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/data/content";

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState(value.match(/^\d+/) ? "0" : value);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match || !isInView) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const duration = 900;
    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(`${Math.round(target * progress)}${suffix}`);
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 16);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-transparent p-2 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
        >
          <p className="text-5xl font-semibold leading-none text-white md:text-7xl xl:text-8xl">
            <AnimatedValue value={stat.value} />
          </p>
          <p className="mt-5 text-lg font-semibold text-slate-100 md:text-2xl">{stat.label}</p>
          {stat.detail ? <p className="sr-only">{stat.detail}</p> : null}
        </motion.div>
      ))}
    </div>
  );
}
