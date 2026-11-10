import { education, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  const item = education[0];

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="About" title="Engineer by foundation, builder by obsession." />
          <div className="card mt-8 p-6">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/25 via-indigo-500/25 to-violet-500/25 font-display text-xl font-bold text-cyan-50">
                {profile.initials}
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-slate-100">{profile.name}</p>
                <p className="text-sm text-slate-400">{profile.role}</p>
              </div>
            </div>
            <p className="mt-6 leading-7 text-slate-400">{profile.shortBio}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Base</p>
                <p className="mt-2 text-sm font-semibold text-slate-200">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Email</p>
                <a href={`mailto:${profile.email}`} className="mt-2 block truncate text-sm font-semibold text-cyan-100 hover:text-cyan-200">
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="card p-6">
            <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-300">Education</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-slate-100">{item.school}</h3>
            <p className="mt-2 text-slate-400">{item.degree}</p>
            <p className="mt-1 text-sm text-slate-500">{item.period} · {item.location}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.courses.map((course) => (
                <span key={course} className="chip">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <p className="mono text-xs uppercase tracking-[0.2em] text-violet-300">How I work</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                { title: "Product-minded", text: "I translate ambiguous product needs into clean interfaces, reliable APIs, and maintainable systems." },
                { title: "Security-first", text: "Auth, RBAC, validation, testing, and on-chain account safety are treated as core requirements." },
                { title: "Full-stack range", text: "I move comfortably between React/Next.js frontends, Node/Rust backends, databases, and blockchain programs." },
              ].map((point) => (
                <div key={point.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <h4 className="font-semibold text-slate-100">{point.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
