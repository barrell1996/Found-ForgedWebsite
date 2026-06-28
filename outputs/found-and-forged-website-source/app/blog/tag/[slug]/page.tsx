import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, slugify } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Array.from(new Set(getAllPosts().flatMap((post) => post.tags))).map((tag) => ({ slug: slugify(tag) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getAllPosts().flatMap((post) => post.tags).find((item) => slugify(item) === slug) ?? "Tag";
  return { title: `${tag} Articles`, description: `Found & Forged articles tagged ${tag}.` };
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getAllPosts().filter((post) => post.tags.some((tag) => slugify(tag) === slug));
  const tag = posts.flatMap((post) => post.tags).find((item) => slugify(item) === slug) ?? "Tag";
  return (
    <section className="section-pad bg-forged-smoke">
      <div className="container-tight">
        <p className="eyebrow">Tag</p>
        <h1 className="mt-4 text-4xl font-black uppercase">{tag}</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="panel p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-forged-steel">{post.category} / {post.readingTime}</p>
              <h2 className="mt-3 text-xl font-black uppercase">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-forged-steel">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
