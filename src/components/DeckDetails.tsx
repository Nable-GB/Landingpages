"use client";

import { motion } from "framer-motion";
import {
  capitalInfrastructure,
  companyBuilderPillars,
  ethTreasuryGoals,
  exchangeListings,
  financialProjection,
  investorModel,
  teamStructure,
  vipTreasuryCards,
  type DetailItem,
  type TimelineMetric,
} from "@/data/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function DetailCard({ item, index }: { item: DetailItem; index: number }) {
  return (
    <motion.article
      className="deck-panel relative min-h-[170px] p-7"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.035 }}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="deck-chip">{item.label}</span>
        {item.metric ? <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">{item.metric}</span> : null}
      </div>
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      <p className="deck-copy mt-4 text-base leading-8">{item.description}</p>
    </motion.article>
  );
}

function MetricCard({ item, index }: { item: TimelineMetric; index: number }) {
  return (
    <motion.article
      className="deck-panel p-8 text-center"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <p className="text-4xl font-semibold text-white md:text-6xl">{item.value}</p>
      <p className="mt-4 text-sm font-semibold uppercase text-cyanline">{item.label}</p>
      <p className="deck-copy mt-4 text-base leading-8">{item.description}</p>
    </motion.article>
  );
}

function DetailGridSection({
  id,
  eyebrow,
  title,
  description,
  items,
  columns = "xl:grid-cols-4",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: DetailItem[];
  columns?: string;
}) {
  return (
    <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id={id}>
      <div className="deck-container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" />
        <div className={`mt-10 grid gap-px deck-grid-lines md:grid-cols-2 ${columns}`}>
          {items.map((item, index) => (
            <DetailCard key={`${item.title}-${item.label}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function ExchangeListingsSection() {
  return (
    <DetailGridSection
      id="exchange"
      eyebrow="Chapter 02"
      title="Exchange Listings & Global Expansion"
      description="We accelerated the project's market entry through global exchange listing support, including ProBit, Bittrex, and Inocyx, as well as OTC liquidity supply partnerships."
      items={exchangeListings}
    />
  );
}

export function CompanyBuilderVisionSection() {
  return (
    <DetailGridSection
      id="vision"
      eyebrow="Vision 2025+"
      title="Blockchain Company Builder & Treasury Strategy"
      description="Speednano evolves beyond a simple development company into a blockchain company builder. Based on BOI entities, FBL, and Thailand/U.S. licenses, we make in-kind investments to help more projects grow together."
      items={companyBuilderPillars}
      columns="xl:grid-cols-3"
    />
  );
}

export function CapitalInfrastructureSection() {
  return (
    <DetailGridSection
      id="capital"
      eyebrow="Chapter 07"
      title="Ethereum Treasury & Strategic Capital Infrastructure"
      description="Based on the Thailand BOI entity structure, we build a digital asset treasury system for the strategic management of investor capital and long-term enterprise value growth."
      items={capitalInfrastructure}
    />
  );
}

export function InvestorParticipationSection() {
  return (
    <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="investor-model">
      <div className="deck-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Investor Model"
            title="Investor Participation & Treasury Distribution"
            description="We build an investor participation model based on the revenue and asset growth generated through treasury operations. Investor participation models are built around treasury operations, digital asset growth, and long-term portfolio expansion."
          />
          <p className="mt-6 border-l-2 border-cyanline py-2 pl-4 text-xs leading-6 text-slate-300">
            This is presented for strategic partnership discussion only and is not a public investment solicitation.
          </p>
        </div>
        <div className="grid gap-px deck-grid-lines">
          {investorModel.map((item, index) => (
            <DetailCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function VipTreasurySection() {
  return (
    <DetailGridSection
      id="vip-treasury"
      eyebrow="VIP Service"
      title="Private Ethereum Treasury Service"
      description="Private Ethereum Treasury management services for high-net-worth individuals and strategic partners. We provide VIP clients with Ethereum-based digital asset management, treasury structure design, RWA-linked strategies, stablecoin operations, and revenue strategy development services."
      items={vipTreasuryCards}
      columns="xl:grid-cols-3"
    />
  );
}

export function TreasuryGoalsSection() {
  return (
    <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="eth-goal">
      <div className="deck-container">
        <SectionHeader
          eyebrow="ETH Treasury Goal"
          title="Treasury Accumulation Goal: Ethereum Holdings"
          description="Accumulated Ethereum (ETH) generates additional compounding returns through network validator nodes (staking) and advanced DeFi operations, dramatically increasing the treasury's intrinsic value over time."
          align="center"
        />
        <div className="mt-10 grid gap-px deck-grid-lines md:grid-cols-3">
          {ethTreasuryGoals.map((item, index) => (
            <MetricCard key={item.value} item={item} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function FinancialProjectionSection() {
  return (
    <Reveal className="deck-section px-5 py-24 md:px-8 xl:py-32" id="financial-model">
      <div className="deck-container">
        <SectionHeader
          eyebrow="Financial Projection"
          title="Estimated Financial Model: 3-Year Infrastructure Growth"
          description="Revenue Segment and Metrics (USD): solution packages and infrastructure rental revenue, estimated equity value of held building projects, target cumulative Ethereum accumulation, and estimated total asset value (NAV)."
          align="center"
        />
        <div className="mt-10 grid gap-px deck-grid-lines md:grid-cols-3">
          {financialProjection.map((item, index) => (
            <MetricCard key={item.value} item={item} index={index} />
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-slate-500">
          This model is an estimate and may vary depending on market conditions and project progress.
        </p>
      </div>
    </Reveal>
  );
}

export function TeamStructureSection() {
  return (
    <DetailGridSection
      id="team-structure"
      eyebrow="Team Structure"
      title="Team Expansion: Strengthening Core Capabilities - Coming Soon"
      description="We strengthen our team and capabilities through diverse experts and partnerships for successful Web3 projects."
      items={teamStructure}
    />
  );
}
