"use client";

import type { LucideIcon } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

type TreasuryCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "violet" | "mint" | "gold";
  index?: number;
};

export function TreasuryCard(props: TreasuryCardProps) {
  return <FeatureCard {...props} compact />;
}
