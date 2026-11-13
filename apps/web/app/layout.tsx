import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { fd } from "@/lib/font";
import { APP_URL, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import "./globals.css";
import "@/components/glaze/styles.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "@/lib/react-query-provider";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: SITE_NAME,
  icons: {
    icon: "/app/logo-dark.svg",
  },
  description: SITE_DESCRIPTION,

  keywords: [
    "AI Product",
    "Github AI",
    "AI SAAS",
    "Github AI Reviewer",
    "Github Agent",
    "Github SAAS",
    "Review github pull requests",
    "Abdullah Technology",
    "Abdullah Developer",
    "Abdullah Fullstack Engineer",
    "Software Engineer",
    "Software Developer",
    "Fullstack Engineer",
    "Fullstack Developer",
    "Portfolio Website",
    "Javascript",
    "Typescript",
    "React js",
    "Node js",
    "Next js",
  ],
  authors: [
    { url: "https://github.com/abhub23", name: "Abdullah Mukri" },
    { url: "https://abdullahtech.dev", name: "Abdullah Mukri" },
  ],

  publisher: "Abdullah Mukri",

  openGraph: {
    title: "Euler",
    description:
      "Euler is a battle tested AI assistant designed and developed to help devs manage and review their PRs efficiently",
    siteName: SITE_NAME,

    images: [
      {
        url: `${APP_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    site: APP_URL,
    creator: "@abdullah_twt23",
    title: "Euler",
    description:
      "Euler is a battle tested AI assistant designed and developed to help devs manage and review their PRs efficiently",
    images: {
      url: `${APP_URL}/og-image.png`,
    },
  },

  appLinks: {
    web: {
      url: new URL(APP_URL),
    },
  },
  category: "AI Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${robotoMono.variable}`}>
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static inline theme script with no user input, required to set the theme class before paint and prevent flash
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme");
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else if (theme === "system" || !theme) {
                    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                      document.documentElement.classList.add("dark");
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${fd} bg-background text-foreground`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
