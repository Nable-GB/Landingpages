"use client";

import { ArrowUpRight, Camera, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { productShowcases } from "@/data/content";

export function ProductShowcase() {
  return (
    <div className="grid gap-px deck-grid-lines lg:grid-cols-2">
      {productShowcases.map((product, index) => (
        <motion.article
          key={product.title}
          className="deck-panel group overflow-hidden rounded-none transition hover:border-cyanline/45 hover:bg-[#303039]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          whileHover={{ y: -5 }}
        >
          <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-black">
            <Image
              src={product.image}
              alt={`${product.title} product screenshot`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-cyanline/35 bg-black/70 px-3 py-1.5 text-[10px] font-semibold uppercase text-cyanline">
              <Camera className="size-3.5" />
              {product.captureNote}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-violetline">{product.category}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{product.title}</h3>
              </div>
              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-cyanline/35 bg-cyanline/10 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyanline/70 hover:bg-cyanline/20"
              >
                Visit
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <p className="deck-copy mt-5 text-base leading-8">{product.summary}</p>

            <div className="mt-6 space-y-3">
              {product.details.map((detail) => (
                <div key={detail} className="deck-copy flex gap-3 text-sm leading-7">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyanline" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.capabilities.map((capability) => (
                <span key={capability} className="bg-black/20 px-2.5 py-1 text-xs text-slate-300">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
