import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export type PostFrontmatter = {
  title: string;
  date: string; // ISO string
  description?: string;
  tags?: string[];
  draft?: boolean;
  cover?: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map((f) => f.replace(/\.(mdx|md)$/i, ""));
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts: Post[] = [];
  for (const slug of slugs) {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = await fs.readFile(filePath, "utf8").catch(async () => {
      return fs.readFile(path.join(BLOG_DIR, `${slug}.md`), "utf8");
    });
    const { data } = matter(raw);
    const fm = data as PostFrontmatter;
    if (!fm.draft) posts.push({ slug, frontmatter: fm });
  }
  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function getPostContent(slug: string) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const source = await fs.readFile(mdxPath, "utf8").catch(async () => fs.readFile(mdPath, "utf8"));
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
      },
    },
  });
  return { content, frontmatter };
}
