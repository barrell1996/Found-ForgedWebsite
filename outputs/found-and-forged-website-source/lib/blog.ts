import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: string;
  popular?: boolean;
  featured?: boolean;
  body: string;
  readingTime: string;
  headings: { id: string; text: string }[];
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, "")))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostBySlug(slug: string): BlogPost {
  const file = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf8");
  const { frontmatter, body } = parseFrontmatter(file);
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: frontmatter.title ?? "Untitled",
    description: frontmatter.description ?? "",
    date: frontmatter.date ?? "",
    category: frontmatter.category ?? "Behind Found & Forged",
    tags: parseList(frontmatter.tags),
    author: frontmatter.author ?? "Found & Forged",
    popular: frontmatter.popular === "true",
    featured: frontmatter.featured === "true",
    body,
    readingTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
    headings: extractHeadings(body)
  };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseFrontmatter(file: string) {
  const match = file.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {} as Record<string, string>, body: file };
  const frontmatter = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    })
  );
  return { frontmatter, body: match[2] };
}

function parseList(value = "") {
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((tag) => tag.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

function extractHeadings(body: string) {
  return body
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^## /, "").trim();
      return { id: slugify(text), text };
    });
}
