export function Footer() {
  return (
    <footer className="border-t py-12 text-center transition-all" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-4 flex items-center justify-center gap-4">
          <a href="#" className="text-2xl transition-all hover:scale-125" aria-label="GitHub">
            💻
          </a>
          <a href="#" className="text-2xl transition-all hover:scale-125" aria-label="LinkedIn">
            👔
          </a>
          <a href="#" className="text-2xl transition-all hover:scale-125" aria-label="Email">
            📧
          </a>
        </div>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • <span className="font-semibold">Your Name</span> — Crafted with Next.js & ❤️
        </p>
      </div>
    </footer>
  );
}
