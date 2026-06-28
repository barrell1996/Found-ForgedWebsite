import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const base = "https://foundandforged.com";
  const posts = getAllPosts();
  const items = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${base}/blog/${post.slug}</link>
          <guid>${base}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description><![CDATA[${post.description}]]></description>
        </item>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>Found & Forged Knowledge Center</title>
        <link>${base}/blog</link>
        <description>Practical property articles, calculators, and guides.</description>
        ${items}
      </channel>
    </rss>`,
    { headers: { "Content-Type": "application/rss+xml" } }
  );
}
