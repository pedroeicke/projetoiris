import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { editorialArticles } from "@/content/editorial";
import { generoPage } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${generoPage.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...editorialArticles.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: new Date(article.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
