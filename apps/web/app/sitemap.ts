import type { MetadataRoute } from "next";
import { SITEMAP_PAGES, urlFor } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PAGES.map((page) => ({
    url: urlFor(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
