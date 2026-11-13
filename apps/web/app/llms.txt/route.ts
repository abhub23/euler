import { APP_URL, PAGES, SITE_NAME, SITE_SUMMARY, urlFor } from "@/lib/site";

export const dynamic = "force-static";

const indexable = PAGES.filter((page) => page.indexable);
const account = PAGES.filter((page) => !page.indexable);

export function GET() {
  const content = [
    `# ${SITE_NAME}`,
    "",
    ...SITE_SUMMARY.map((line) => `> ${line}`),
    "",
    "## Pages",
    "",
    ...indexable.map((page) => `- [${page.title}](${urlFor(page.path)}): ${page.summary}`),
    "",
    "## Account",
    "",
    ...account.map((page) => `- [${page.title}](${urlFor(page.path)}): ${page.summary}`),
    "",
    "## Optional",
    "",
    `- [Open Graph image](${APP_URL}/og-image.png): Social preview card for ${SITE_NAME}.`,
    `- [Screenshots](${APP_URL}/screenshots/competitors.png): Product screenshots.`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
