"use client";

import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { CloseIcon, GitHubIcon, MenuIcon } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050816]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-violet-500/20 font-display text-sm font-bold text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,0.18)]">
            {profile.initials}
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold tracking-wide text-slate-100">Gaurav Kumar</span>
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-slate-500">Software × Blockchain</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn hidden sm:inline-flex" aria-label="GitHub profile">
            <GitHubIcon className="h-4.5 w-4.5" />
          </a>
          <a href="#contact" className="btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex">
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="icon-btn inline-flex lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#050816]/95 px-5 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-100"
            >
              <GitHubIcon className="h-4 w-4" />
              View GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
