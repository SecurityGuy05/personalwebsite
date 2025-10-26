import Link from "next/link";
import { Container } from "@/components/Container";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Notes on projects, homelab, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <Container>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Blog
          </h1>
          <p className="text-lg text-foreground/70">
            Thoughts, tutorials, and notes from my projects.
          </p>
        </div>

        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="glass-card group rounded-xl p-6 transition-all">
              <Link href={`/blog/${p.slug}`} className="block space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold group-hover:text-[var(--gradient-primary-to)] transition-colors">
                    {p.frontmatter.title}
                  </h2>
                  <time
                    dateTime={p.frontmatter.date}
                    className="text-sm text-foreground/50 whitespace-nowrap"
                  >
                    {new Date(p.frontmatter.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                {p.frontmatter.description && (
                  <p className="text-sm text-foreground/70">{p.frontmatter.description}</p>
                )}
                {p.frontmatter.tags && p.frontmatter.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
