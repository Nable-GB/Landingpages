"use client";

import { boiCards, problemPoints, solutionCards, teamCards, treasuryCards } from "@/data/content";
import { CTASection } from "./CTASection";
import {
  CapitalInfrastructureSection,
  CompanyBuilderVisionSection,
  ExchangeListingsSection,
  FinancialProjectionSection,
  InvestorParticipationSection,
  TeamStructureSection,
  TreasuryGoalsSection,
  VipTreasurySection,
} from "./DeckDetails";
import { FeatureCard } from "./FeatureCard";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { PortfolioGrid } from "./PortfolioGrid";
import { ProductShowcase } from "./ProductShowcase";
import { Reveal } from "./Reveal";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { SectionHeader } from "./SectionHeader";
import { TreasuryCard } from "./TreasuryCard";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-white">
      <Navigation />
      <Hero />

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="opportunity">
        <div className="deck-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionHeader
            eyebrow="Problem / Opportunity"
            title="Most Web3 projects struggle before global market entry."
            description="Legal and regulatory setup, technical execution, liquidity access, exchange listing, and global expansion are the core barriers Speednano is built to remove."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point, index) => (
              <div key={point} className="deck-panel p-5">
                <span className="text-sm font-semibold text-cyanline">0{index + 1}</span>
                <p className="mt-3 text-lg font-medium text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="solution">
        <div className="deck-container">
          <SectionHeader
            eyebrow="Core Business"
            title="Accelerating Global Web3 Projects: One-Stop Solution"
            description="The Thailand BOI entity removes the challenges of complex regulations and technology development, providing one-stop support for promising blockchain projects to successfully enter the market and create value."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-px deck-grid-lines md:grid-cols-2">
            {solutionCards.map((card, index) => (
              <FeatureCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="portfolio">
        <div className="deck-container">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Portfolio Overview"
              title="Speednano Full Development Portfolio"
              description="From mainnet to NFT, payments, community, and prediction markets - 19+ projects actually built, operated, and listed."
            />
          </div>
          <PortfolioGrid />
        </div>
      </Reveal>

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="products">
        <div className="deck-container">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeader
              eyebrow="Product Showcase"
              title="Live Product Examples from the Speednano Ecosystem"
              description="Screenshots from the current public product pages are paired with practical analysis so investors can quickly understand what each product does, where it sits in the Web3 stack, and how it supports Speednano's company-builder thesis."
            />
            <div className="border-l-2 border-violetline bg-white/[0.03] px-4 py-3 text-xs leading-6 text-slate-300">
              Public captures are used as product evidence. Some products currently render onboarding or loading states on public access, so the analysis combines visible page capture with the PDF portfolio context.
            </div>
          </div>
          <ProductShowcase />
        </div>
      </Reveal>

      <ExchangeListingsSection />

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="boi">
        <div className="deck-container">
          <SectionHeader
            eyebrow="Chapter 06"
            title="Strategic Advantages of a Thailand BOI Entity"
            description="Speednano, through its Thailand BOI entity and U.S. Wyoming entity, possesses the optimal legal and institutional foundation for global Web3 projects to grow legally and rapidly."
            align="center"
          />
          <div className="mt-10 grid gap-px deck-grid-lines md:grid-cols-2 xl:grid-cols-3">
            {boiCards.map((card, index) => (
              <FeatureCard key={card.title} {...card} index={index} compact />
            ))}
          </div>
        </div>
      </Reveal>

      <CompanyBuilderVisionSection />
      <CapitalInfrastructureSection />

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="treasury">
        <div className="deck-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Ethereum Treasury Strategy"
                title="Ethereum Treasury Operation"
                description="Based on investor capital, we operate an Ethereum Treasury and build a long-term digital asset growth strategy. We operate Ethereum-based treasury strategies using investor capital to create long-term digital asset growth."
              />
              <div className="mt-8 border-l-2 border-cyanline bg-transparent py-2 pl-4 text-xs leading-6 text-slate-300">
                This content is for strategic partnership discussion only and is not a public investment solicitation.
              </div>
            </div>
            <div className="grid gap-px deck-grid-lines sm:grid-cols-2">
              {treasuryCards.map((card, index) => (
                <TreasuryCard key={card.title} {...card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <InvestorParticipationSection />
      <VipTreasurySection />
      <TreasuryGoalsSection />
      <FinancialProjectionSection />

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="roadmap">
        <div className="deck-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Strategic Roadmap"
            title="Mid- to Long-Term Strategic Roadmap"
            description="A 2026-2028+ roadmap to activate the Thailand entity, establish a Dubai-based Web3 development company, launch RWA projects, and achieve treasury leadership across Asia."
          />
          <RoadmapTimeline />
        </div>
      </Reveal>

      <TeamStructureSection />

      <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="team">
        <div className="deck-container">
          <SectionHeader
            eyebrow="Team Building"
            title="Team Expansion: Strengthening Core Capabilities"
            description="To build a successful Web3 project, we expand and strengthen our team through experts and partnerships across diverse fields."
            align="center"
          />
          <div className="mt-10 grid gap-px deck-grid-lines md:grid-cols-2 xl:grid-cols-4">
            {teamCards.map((card, index) => (
              <FeatureCard key={card.title} {...card} index={index} compact />
            ))}
          </div>
        </div>
      </Reveal>

      <CTASection />
      <Footer />
    </main>
  );
}
