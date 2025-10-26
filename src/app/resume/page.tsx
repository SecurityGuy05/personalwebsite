import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] px-4 py-2 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Open PDF →
          </a>
        </div>
        
        <div className="relative w-full overflow-hidden rounded-xl border shadow-lg" style={{ borderColor: 'var(--border)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background blur-3xl" />
          <Image
            src="/resume.jpg?v=2"
            alt="Resume"
            width={1000}
            height={1294}
            className="relative w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </div>
    </Container>
  );
}
