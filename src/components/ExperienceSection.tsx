import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Production work, teaching, and real users."
          description="I have built internal platforms used by hundreds of students and instructors, plus full-stack IoT systems that process real-time sensor data."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {experience.map((job) => (
            <article key={job.company} className="card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-300">{job.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-100">{job.role}</h3>
                  <p className="mt-1 text-slate-400">{job.company}</p>
                </div>
                <span className="chip chip-accent">{job.location}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {job.points.map((point) => (
                  <li key={point} className="timeline-item text-sm leading-6 text-slate-400">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
