import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

export function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful on-chain or off-chain."
                description="I’m focused on software development and blockchain engineering opportunities where I can contribute to secure products, modern interfaces, and decentralized systems."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3.5 text-sm">
                  <MailIcon />
                  Send Email
                </a>
                <a href={profile.resume} download className="btn-secondary px-6 py-3.5 text-sm">
                  <DownloadIcon />
                  Resume PDF
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: GitHubIcon, label: "GitHub", value: "@gauravkumar7294", href: profile.github },
                { icon: LinkedInIcon, label: "LinkedIn", value: "Gaurav Kumar", href: profile.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all hover:border-cyan-300/30 hover:bg-white/[0.05]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-slate-100 transition-colors group-hover:text-cyan-100">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
