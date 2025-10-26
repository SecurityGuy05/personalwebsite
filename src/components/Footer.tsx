export function Footer() {
  return (
    <footer className="border-t py-12 text-center transition-all" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-4 flex items-center justify-center gap-6 text-sm text-foreground/70">
          <a href="tel:417-763-4623" className="transition-all hover:text-foreground hover:underline">
            417-763-4623
          </a>
          <a href="mailto:matthew@homeyers.com" className="transition-all hover:text-foreground hover:underline">
            matthew@homeyers.com
          </a>
          <a href="https://www.linkedin.com/in/matthew-homeyer-350305317/" target="_blank" rel="noopener noreferrer" className="transition-all hover:text-foreground hover:underline">
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} • <span className="font-semibold">Matthew Homeyer</span>
        </p>
      </div>
    </footer>
  );
}
