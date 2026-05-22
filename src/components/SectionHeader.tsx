import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-5xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-4">
        <span className="deck-chip">{eyebrow}</span>
      </p>
      <h2 className="deck-title text-balance text-3xl font-semibold leading-tight md:text-6xl">{title}</h2>
      <p className="deck-copy mt-6 text-base leading-8 md:text-2xl">{description}</p>
    </div>
  );
}
