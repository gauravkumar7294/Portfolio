import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-slate-100">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">Software Developer · Blockchain Developer · NIT Raipur</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
            <MailIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="mono text-xs text-slate-600">© 2026 Gaurav Kumar</p>
      </div>
    </footer>
  );
}
