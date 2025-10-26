import { Container } from "@/components/Container";
import { getAllPosts, getPostContent } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { frontmatter } = await getPostContent(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { content, frontmatter } = await getPostContent(slug);
  return (
    <Container>
      <article className="mx-auto max-w-3xl">
        <div className="mb-8 space-y-4 border-b pb-8" style={{ borderColor: 'var(--border)' }}>
          <h1 className="bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gradient-to-r from-[var(--gradient-primary-from)]/10 to-[var(--gradient-primary-to)]/10 px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="prose prose-lg dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-purple-600 dark:prose-code:text-purple-400">
          {content}
        </div>
      </article>
    </Container>
  );
}
