export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: ("work" | "homelab" | "infra" | "app" | "network" | "cloud")[];
  year: number;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "homelab-network",
    title: "Homelab Network Overhaul",
    summary: "Refactored home network with VLANs, Docker stack, and monitoring.",
    tags: ["homelab", "network", "infra"],
    year: 2025,
  },
  {
    slug: "portfolio-site",
    title: "This Portfolio Website",
    summary: "Next.js 16 App Router with MDX blog and dark mode.",
    tags: ["app"],
    year: 2025,
    links: [{ label: "Source", href: "#" }],
  },
  {
    slug: "work-observability",
    title: "Work: Observability Stack",
    summary: "Implemented tracing + metrics with OpenTelemetry and Grafana.",
    tags: ["work", "infra"],
    year: 2024,
  },
];

export const allTags = Array.from(
  projects.reduce((set, p) => {
    p.tags.forEach((t) => set.add(t));
    return set;
  }, new Set<string>())
).sort();
