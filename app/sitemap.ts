import type { MetadataRoute } from "next";
import { getAllPosts, slugify } from "@/lib/blog";
import { categories } from "@/lib/site-data";

const base = "https://foundandforged.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/digital-products",
    "/curated-goods",
    "/custom-goods",
    "/gravel-driveway-rehabilitation",
    "/gravel-driveway-repair",
    "/driveway-grading",
    "/gravel-driveway-grading",
    "/gravel-spreading",
    "/gravel-redistribution",
    "/gravel-delivery",
    "/pothole-repair",
    "/culvert-repair",
    "/finish-grading",
    "/light-tractor-services",
    "/property-maintenance-plans",
    "/blog",
    "/learning",
    "/calculators",
    "/about",
    "/contact"
  ];
  const posts = getAllPosts();
  const tagUrls = Array.from(new Set(posts.flatMap((post) => post.tags))).map((tag) => `${base}/blog/tag/${slugify(tag)}`);

  return [
    ...staticPages.map((page) => ({ url: `${base}${page}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) })),
    ...categories.map((category) => ({ url: `${base}/blog/category/${slugify(category)}`, lastModified: new Date() })),
    ...tagUrls.map((url) => ({ url, lastModified: new Date() }))
  ];
}
