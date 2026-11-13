export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://euler.abdullahtech.dev";

export const SITE_NAME = "Euler";

export const SITE_DESCRIPTION =
  "Euler is a battle tested AI assistant designed and developed to help devs manage and review their PRs efficiently";

/**
 * Line-wrapped marketing summary, used for the llms.txt blockquote so it stays
 * readable as plain text. Joined with spaces for regular metadata.
 */
export const SITE_SUMMARY = [
  "Euler is a battle tested AI assistant designed and developed to help devs",
  "manage and review their PRs efficiently. It uses AI agents to turn complex",
  "workflows into clear, actionable insights so teams can make better decisions",
  "faster.",
] as const;

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export type SitePage = {
  path: string;
  title: string;
  summary: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Indexable pages are listed in the sitemap; auth pages are not. */
  indexable: boolean;
};

export const PAGES: SitePage[] = [
  {
    path: "",
    title: "Home",
    summary: "Product features, capabilities, and FAQs.",
    changeFrequency: "monthly",
    priority: 1,
    indexable: true,
  },
  {
    path: "/about",
    title: "About",
    summary: "The mission behind Euler — empowering developers with autonomous AI agents.",
    changeFrequency: "yearly",
    priority: 0.8,
    indexable: true,
  },
  {
    path: "/pricing",
    title: "Pricing",
    summary: "Plans and pricing.",
    changeFrequency: "monthly",
    priority: 0.9,
    indexable: true,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    summary: "How Euler handles your data.",
    changeFrequency: "yearly",
    priority: 0.3,
    indexable: true,
  },
  {
    path: "/terms",
    title: "Terms of Service",
    summary: "Terms of using Euler.",
    changeFrequency: "yearly",
    priority: 0.3,
    indexable: true,
  },
  {
    path: "/signin",
    title: "Sign in",
    summary: "Sign in to an existing account.",
    changeFrequency: "yearly",
    priority: 0.5,
    indexable: false,
  },
  {
    path: "/signup",
    title: "Sign up",
    summary: "Create a new account.",
    changeFrequency: "yearly",
    priority: 0.5,
    indexable: false,
  },
];

export const SITEMAP_PAGES = PAGES.filter((page) => page.indexable);

/** Resolves a site path into an absolute URL, without a trailing slash. */
export function urlFor(path: string): string {
  return path ? `${APP_URL}${path}` : APP_URL;
}
