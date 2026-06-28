import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug, slugify } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: ["/brand/found-forged-logo.jpeg"]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const related = getAllPosts().filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Found & Forged" }
  };

  return (
    <article className="section-pad bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container-tight grid gap-10 lg:grid-cols-[240px_1fr_260px]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 border-l border-forged-concrete pl-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-forged-steel">Table of contents</p>
            <div className="mt-4 grid gap-3">
              {post.headings.map((heading) => (
                <a key={heading.id} href={`#${heading.id}`} className="text-sm font-bold text-forged-charcoal">{heading.text}</a>
              ))}
            </div>
          </div>
        </aside>
        <div>
          <p className="eyebrow">{post.category} / {post.readingTime}</p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-forged-steel">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${slugify(tag)}`} className="border border-forged-concrete px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em]">
                {tag}
              </Link>
            ))}
          </div>
          <div className="prose-industrial mt-10">
            <MarkdownContent body={post.body} />
          </div>
        </div>
        <aside className="grid content-start gap-5">
          <div className="panel p-5">
            <h2 className="text-lg font-black uppercase">Author</h2>
            <p className="mt-3 text-sm leading-7 text-forged-steel">
              {post.author} publishes field notes, calculators, and practical planning resources for durable property work.
            </p>
          </div>
          <div className="panel p-5">
            <h2 className="text-lg font-black uppercase">Related posts</h2>
            <div className="mt-4 grid gap-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="text-sm font-bold leading-6">{item.title}</Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

function MarkdownContent({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/);

  return (
    <>
      {blocks.map((block, index) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          const text = trimmed.replace(/^## /, "");
          return <h2 key={index} id={slugify(text)}>{text}</h2>;
        }
        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{trimmed.replace(/^### /, "")}</h3>;
        }
        if (trimmed.startsWith("- ")) {
          return (
            <ul key={index}>
              {trimmed.split("\n").map((item) => (
                <li key={item}>{item.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{trimmed}</p>;
      })}
    </>
  );
}
