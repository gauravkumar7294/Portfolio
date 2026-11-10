import { profile, stats } from "@/data/portfolio";
import { ArrowRightIcon, CodeIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, ServerIcon, ShieldIcon } from "./icons";

const codeLines = [
  { text: "const builder = {", className: "text-slate-500" },
  { text: "  role: [\"Software Developer\", \"Blockchain Developer\"],", className: "text-cyan-200" },
  { text: "  stack: [\"Rust\", \"TypeScript\", \"Solana\", \"Next.js\"],", className: "text-indigo-200" },
  { text: "  focus: \"secure, scalable, on-chain systems\",", className: "text-violet-200" },
  { text: "};", className: "text-slate-500" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-indigo-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse-ring" />
            Open to software & blockchain engineering roles
          </div>

          <h1 className="mt-7 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-slate-50">
            Building software
            <span className="block gradient-text">& decentralized systems.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m <span className="font-semibold text-slate-200">{profile.name}</span> — a Software Developer and Blockchain Developer
            crafting Next.js products, Rust services, Solana programs, Ethereum contracts, and zero-knowledge proofs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary px-6 py-3.5 text-sm">
              Explore Projects
              <ArrowRightIcon />
            </a>
            <a href={profile.resume} download className="btn-secondary px-6 py-3.5 text-sm">
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
              <MailIcon />
            </a>
            <span className="chip chip-accent ml-1">{profile.location}</span>
          </div>
        </div>

        <div className="relative">
          <div className="card animate-float-slow p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>
              <span className="mono text-xs text-slate-500">portfolio.tsx</span>
            </div>

            <div className="mono mt-6 space-y-3 text-sm leading-7">
              {codeLines.map((line) => (
                <p key={line.text} className={line.className}>
                  {line.text}
                </p>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { icon: CodeIcon, label: "Full-stack", value: "Next.js / React" },
                { icon: ShieldIcon, label: "Blockchain", value: "Solana / EVM" },
                { icon: ServerIcon, label: "Systems", value: "Rust / APIs" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
                  <item.icon className="h-4 w-4 text-cyan-300" />
                  <p className="mt-3 text-xs text-slate-500">{item.label}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-5 top-10 hidden rounded-2xl border border-white/10 bg-[#0b1226]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Focus</p>
            <p className="mt-1 text-sm font-semibold text-cyan-100">ZK + on-chain apps</p>
          </div>
          <div className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/10 bg-[#0b1226]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Currently</p>
            <p className="mt-1 text-sm font-semibold text-indigo-100">Nxtwave · Instructor</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card px-5 py-5">
              <p className="font-display text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
