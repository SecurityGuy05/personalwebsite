import { Container } from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            About Me
          </h1>
          <p className="text-xl text-foreground/70">
            I am <strong className="text-foreground">Matthew Homeyer</strong>, a Network Engineer based in Springfield, MO.
            I enjoy building reliable systems, tinkering in my homelab, and sharing what I learn.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-medium text-[var(--gradient-primary-from)]">Frontend</h3>
              <ul className="space-y-1 text-sm text-foreground/70">
                <li>Next.js, React, TypeScript</li>
                <li>Tailwind CSS, Responsive Design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-[var(--gradient-primary-to)]">Backend</h3>
              <ul className="space-y-1 text-sm text-foreground/70">
                <li>Docker, Kubernetes, CI/CD</li>
                <li>Linux, Networking, Observability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="btn inline-flex items-center gap-2 rounded-lg border bg-foreground/5 px-4 py-2 font-medium transition-all hover:bg-foreground/10 hover:scale-105"
              style={{ borderColor: 'var(--border)' }}
            >
              GitHub
            </a>
            <a
              href="#"
              className="btn inline-flex items-center gap-2 rounded-lg border bg-foreground/5 px-4 py-2 font-medium transition-all hover:bg-foreground/10 hover:scale-105"
              style={{ borderColor: 'var(--border)' }}
            >
              LinkedIn
            </a>
            <a
              href="/resume"
              className="btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] px-4 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
