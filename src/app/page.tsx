import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="relative">
      <div className="gradient-bg-full" />
      <Container>
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center space-y-8 text-center">
          <div className="mb-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] opacity-20 blur-2xl"></div>
              <div className="relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] p-1 shadow-2xl">
                <Image
                  src="/headshot.JPEG"
                  alt="Matthew Homeyer"
                  width={160}
                  height={160}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl md:leading-tight pb-2">
              Hello!
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-foreground/70 md:text-2xl">
              I'm Matthew Homeyer, a <span className="font-semibold text-[var(--gradient-primary-from)]">Network Engineer</span> focused on{" "}
              <span className="font-semibold text-[var(--gradient-primary-to)]">Functional and Reliable Solutions.</span>
            </p>
            <p className="mx-auto max-w-2xl text-lg text-foreground/60">
              Building things, breaking things, learning from it all.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              About Me
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
