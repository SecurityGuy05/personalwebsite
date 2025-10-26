import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-xl transition-all duration-300 shadow-md" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-2 font-semibold tracking-tight transition-all hover:scale-105">
          <span className="text-gray-900 dark:text-white">
            Matthew Homeyer
          </span>
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="btn rounded-lg border bg-white px-3 py-2 font-medium text-gray-900 transition-all hover:bg-gray-50 hover:scale-105 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              style={{ borderColor: 'var(--border)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
