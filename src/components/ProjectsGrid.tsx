"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQ = !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q as any));
      const matchesTag = active.length === 0 || active.every((t) => p.tags.includes(t as any));
      return matchesQ && matchesTag;
    });
  }, [projects, query, active]);

  function toggleTag(tag: string) {
    setActive((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  }

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search projects..."
          className="flex-1 rounded-xl border bg-background px-4 py-3 text-sm shadow-sm outline-none transition-all focus:ring-2 focus:ring-[var(--gradient-primary-to)] focus:border-transparent"
          style={{ borderColor: 'var(--border)' }}
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => toggleTag(t)}
            className={`btn rounded-full border px-4 py-2 text-xs font-medium transition-all hover:scale-105 ${
              active.includes(t)
                ? "bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] text-white border-transparent shadow-lg"
                : "bg-transparent hover:bg-foreground/5"
            }`}
            style={{ borderColor: active.includes(t) ? 'transparent' : 'var(--border)' }}
          >
            {t}
          </button>
        ))}
        {active.length > 0 && (
          <button
            onClick={() => setActive([])}
            className="btn rounded-full border px-4 py-2 text-xs font-medium opacity-70 transition-all hover:scale-105 hover:opacity-100"
            style={{ borderColor: 'var(--border)' }}
          >
            ✕ Clear
          </button>
        )}
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <li
            key={p.slug}
            className="glass-card group relative overflow-hidden rounded-2xl p-6 shadow-lg"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[var(--gradient-primary-from)]/20 to-[var(--gradient-primary-to)]/20 blur-2xl transition-all group-hover:scale-150"></div>
            
            <div className="relative space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-medium">
                  {p.year}
                </span>
              </div>
              
              <p className="text-sm text-foreground/70 leading-relaxed">{p.summary}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-[var(--gradient-primary-from)]/10 to-[var(--gradient-primary-to)]/10 px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {p.links && p.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn inline-flex items-center gap-1 rounded-lg border bg-foreground/5 px-3 py-1.5 text-xs font-medium transition-all hover:bg-foreground/10 hover:scale-105"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-foreground/50">No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
}
