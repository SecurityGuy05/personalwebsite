import { Container } from "@/components/Container";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Portfolio",
  description: "Selected work and homelab projects.",
};

export default function PortfolioPage() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Portfolio
          </h1>
          <p className="text-lg text-foreground/70">
            A collection of projects I've worked on — from production systems to homelab experiments.
          </p>
        </div>
        <ProjectsGrid projects={projects} />
      </div>
    </Container>
  );
}
