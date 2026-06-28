"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SearchPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readingTime: string;
};

export function BlogSearch({ posts }: { posts: SearchPost[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const needle = query.toLowerCase().trim();
    if (!needle) return posts;
    return posts.filter((post) =>
      [post.title, post.description, post.category, ...post.tags].join(" ").toLowerCase().includes(needle)
    );
  }, [posts, query]);

  return (
    <div>
      <label className="grid gap-2 text-xs font-black uppercase tracking-[0.16em]">
        Search articles
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search gravel, equipment, decks..."
          className="min-h-12 border border-forged-concrete bg-white px-4 text-base font-bold outline-none focus:border-forged-black"
        />
      </label>
      <div className="mt-5 grid gap-4">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="border border-forged-concrete bg-white p-5 transition hover:border-forged-black">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-forged-steel">{post.category} / {post.readingTime}</p>
            <h2 className="mt-3 text-xl font-black uppercase leading-tight">{post.title}</h2>
            <p className="mt-2 text-sm leading-7 text-forged-steel">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
