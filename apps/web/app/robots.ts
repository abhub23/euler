import type { MetadataRoute } from "next";

const App_Url = "https://euler.abdullahtech.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${App_Url}/sitemap.xml`,
  };
}
