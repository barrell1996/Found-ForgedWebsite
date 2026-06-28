import type { Metadata } from "next";
import Link from "next/link";
import { BlogSearch } from "@/components/BlogSearch";
import { SectionHeader } from "@/components/SectionHeader";
import { categories } from "@/lib/site-data";
import { getAllPosts, slugify } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Knowledge Center / Blog",
  description: "Found & Forged articles on gravel driveways, property maintenance, DIY projects, decks, equipment, plans, and behind-the-brand updates.",
  openGraph: {
    title: "Found & Forged Knowledge Center",
    description: "Practical property articles, guides, and field notes."
  }
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const popular = posts.filter((post) => post.popular);

  return (
    <section className="section-pad bg-forged-smoke">
      <div className="container-tight">
        <SectionHeader eyebrow="Knowledge Center" title="Practical articles for property work." />
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="mb-8 grid gap-6 border border-forged-black bg-white p-6 shadow-industrial lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex min-h-48 items-end bg-forged-black p-5 text-white fine-grid">
              <span className="text-xs font-black uppercase tracking-[0.22em]">Featured Article</span>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-forged-steel">{featured.category} / {featured.readingTime}</p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight">{featured.title}</h2>
              <p className="mt-4 leading-8 text-forged-steel">{featured.description}</p>
            </div>
          </Link>
        )}
        <div className="mb-8 flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Link key={category} href={`/blog/category/${slugify(category)}`} className="shrink-0 border border-forged-concrete bg-white px-4 py-3 text-[11px] font-black uppercase tracking-[0.14em]">
              {category}
            </Link>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-4 text-xl font-black uppercase">Latest articles</h2>
            <BlogSearch posts={posts} />
          </div>
          <aside className="grid content-start gap-5">
            <div className="panel p-5">
              <h2 className="text-lg font-black uppercase">Popular articles</h2>
              <div className="mt-4 grid gap-3">
                {popular.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm font-bold leading-6 text-forged-charcoal hover:text-forged-black">
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="panel p-5">
              <h2 className="text-lg font-black uppercase">RSS</h2>
              <Link href="/rss.xml" className="mt-3 inline-block text-sm font-black uppercase tracking-[0.14em]">Subscribe</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
