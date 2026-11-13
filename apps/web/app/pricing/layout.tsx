import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Euler - /pricing",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
