import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, slugify } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Array.from(new Set(getAllPosts().map((post) => post.category))).map((category) => ({ slug: slugify(category) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getAllPosts().find((post) => slugify(post.category) === slug)?.category ?? "Category";
  return { title: `${category} Articles`, description: `Found & Forged articles in ${category}.` };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getAllPosts().filter((post) => slugify(post.category) === slug);
  const category = posts[0]?.category ?? "Category";
  return <Archive title={category} posts={posts} />;
}

function Archive({ title, posts }: { title: string; posts: ReturnType<typeof getAllPosts> }) {
  return (
    <section className="section-pad bg-forged-smoke">
      <div className="container-tight">
        <p className="eyebrow">Category</p>
        <h1 className="mt-4 text-4xl font-black uppercase">{title}</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="panel p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-forged-steel">{post.readingTime}</p>
              <h2 className="mt-3 text-xl font-black uppercase">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-forged-steel">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
