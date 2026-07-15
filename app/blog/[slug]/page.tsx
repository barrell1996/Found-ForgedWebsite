import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, breadcrumbJsonLd, canonicalUrl } from "@/components/JsonLd";
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
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: "/brand/found-forged-logo.jpeg",
          width: 1200,
          height: 1200,
          alt: "Found & Forged logo"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
    "@id": `${canonicalUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: canonicalUrl(`/blog/${post.slug}`),
    image: canonicalUrl("/brand/found-forged-logo.jpeg"),
    author: { "@type": "Organization", name: post.author, url: canonicalUrl() },
    publisher: { "@id": `${canonicalUrl()}#business` },
    articleSection: post.category,
    keywords: post.tags.join(", ")
  };
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  return (
    <article className="section-pad bg-white">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
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
          return <h2 key={index} id={slugify(text)}>{renderInlineLinks(text)}</h2>;
        }
        if (trimmed.startsWith("### ")) {
          return <h3 key={index}>{renderInlineLinks(trimmed.replace(/^### /, ""))}</h3>;
        }
        if (trimmed.startsWith("- ")) {
          return (
            <ul key={index}>
              {trimmed.split("\n").map((item) => {
                const text = item.replace(/^- /, "");
                return <li key={item}>{renderInlineLinks(text)}</li>;
              })}
            </ul>
          );
        }
        return <p key={index}>{renderInlineLinks(trimmed)}</p>;
      })}
    </>
  );
}

function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;

    const [, label, href] = match;
    if (href.startsWith("/")) {
      return <Link key={`${href}-${index}`} href={href}>{label}</Link>;
    }

    return (
      <a key={`${href}-${index}`} href={href} rel="noopener noreferrer" target="_blank">
        {label}
      </a>
    );
  });
}
