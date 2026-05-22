"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/88 backdrop-blur-xl">
      <nav className="deck-container flex items-center justify-between px-5 py-4 md:px-8" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3 text-white">
          <span className="grid size-9 place-items-center border border-cyanline/45 bg-cyanline/10 text-sm font-semibold text-cyanline">
            SN
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">Speednano</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-cyanline/40 bg-cyanline/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyanline hover:bg-cyanline/20 lg:inline-flex"
        >
          Request Deck
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div className={cn("grid transition-all lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="mx-5 mb-5 border border-white/10 bg-graphite/95 p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-2 block bg-cyanline px-3 py-3 text-center text-sm font-semibold text-obsidian" onClick={() => setOpen(false)}>
              Request Investor Deck
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
