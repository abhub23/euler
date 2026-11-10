import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Euler - /about",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
