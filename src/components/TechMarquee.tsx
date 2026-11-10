import { skillGroups } from "@/data/portfolio";

const items = Array.from(new Set(skillGroups.flatMap((group) => group.items))).slice(0, 28);

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#050816] to-transparent" />
      <div className="flex w-max animate-marquee gap-3">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
