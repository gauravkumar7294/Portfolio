import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A practical stack for product and protocol work."
          description="My toolkit spans modern web development, backend systems, databases, DevOps, smart contracts, and zero-knowledge engineering."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`card p-6 ${index === skillGroups.length - 1 ? "md:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-slate-100">{group.title}</h3>
                <span className="mono text-xs text-slate-500">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="card border-cyan-300/20 p-6 md:col-span-2 xl:col-span-2">
            <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-300">Engineering mindset</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                "Write tested smart contracts and backend services.",
                "Design secure auth, sessions, and role-based permissions.",
                "Build polished interfaces that make complex systems understandable.",
                "Use Docker, CI-friendly workflows, and clear repository structure.",
                "Balance performance, maintainability, and decentralization trade-offs.",
                "Learn fast across Rust, TypeScript, Solidity, and infrastructure.",
              ].map((item) => (
                <p key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-slate-400">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
