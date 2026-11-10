import { additionalProjects } from "@/data/portfolio";
import { ProjectsShowcase } from "./ProjectsShowcase";
import { SectionHeading } from "./SectionHeading";
import { ExternalIcon, GitHubIcon } from "./icons";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects across chains, stacks, and systems."
          description="A curated set of software and blockchain builds from my GitHub and resume—including Solana programs, ZK proofs, production-style full-stack apps, Rust services, and real-world internal tools."
        />

        <div className="mt-12">
          <ProjectsShowcase />
        </div>

        <div className="card mt-10 p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.2em] text-violet-300">More builds</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-100">Additional repositories worth exploring.</h3>
            </div>
            <a
              href="https://github.com/gauravkumar7294?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-4 py-2.5 text-sm"
            >
              <GitHubIcon className="h-4 w-4" />
              All Repositories
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <a
                key={project.repo}
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/8 bg-white/[0.025] p-5 transition-all hover:border-indigo-300/30 hover:bg-white/[0.045]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-semibold text-slate-100 transition-colors group-hover:text-cyan-100">{project.title}</h4>
                  <ExternalIcon className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-cyan-200" />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                {project.demo && (
                  <p className="mono mt-4 text-xs text-indigo-300/80">Live: {project.demo}</p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
