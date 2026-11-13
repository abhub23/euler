import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Euler - /sign-in",
  alternates: {
    canonical: "/signin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
