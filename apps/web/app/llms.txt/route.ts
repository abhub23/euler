const App_Url = "https://euler.abdullahtech.dev";

export const dynamic = "force-static";

export function GET() {
  const content = [
    "# Euler",
    "",
    "> Euler is a battle tested AI assistant designed and developed to help devs",
    "> manage and review their PRs efficiently. It uses AI agents to turn complex",
    "> workflows into clear, actionable insights so teams can make better decisions",
    "> faster.",
    "",
    "## Pages",
    "",
    `- [Home](${App_Url}/): Product features, capabilities, and FAQs.`,
    `- [About](${App_Url}/about): The mission behind Euler — empowering developers with autonomous AI agents.`,
    `- [Pricing](${App_Url}/pricing): Plans and pricing.`,
    `- [Privacy Policy](${App_Url}/privacy): How Euler handles your data.`,
    `- [Terms of Service](${App_Url}/terms): Terms of using Euler.`,
    "",
    "## Account",
    "",
    `- [Sign in](${App_Url}/signin): Sign in to an existing account.`,
    `- [Sign up](${App_Url}/signup): Create a new account.`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
