import type { MetadataRoute } from "next";

const App_Url = "https://euler.abdullahtech.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: App_Url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${App_Url}/about`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${App_Url}/pricing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${App_Url}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${App_Url}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
