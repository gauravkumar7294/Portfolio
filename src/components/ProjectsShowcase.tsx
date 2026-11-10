"use client";

import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { ArrowRightIcon, ExternalIcon, GitHubIcon } from "./icons";

const filters = ["All", "Blockchain", "Full-Stack", "Systems"] as const;

export function ProjectsShowcase() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`filter-btn ${active === filter ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>
        <p className="mono text-xs text-slate-500">
          {visibleProjects.length} selected {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project: Project) => (
          <article key={project.github} className="card project-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-300/80">{project.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-100">{project.title}</h3>
              </div>
              {project.year && <span className="chip">{project.year}</span>}
            </div>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>

            {project.metrics && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span key={metric} className="chip chip-accent">
                    {metric}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
              {project.tech.length > 5 && <span className="chip">+{project.tech.length - 5}</span>}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-200"
              >
                <GitHubIcon className="h-4 w-4" />
                Source
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-cyan-200"
                >
                  Live Demo
                  <ExternalIcon className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                  Engineering case study
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
