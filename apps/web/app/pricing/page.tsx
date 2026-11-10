import Link from "next/link";
import { Container } from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Heading } from "@/components/text";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with Euler for free.",
    features: ["Core features included", "Community support", "Basic usage limits"],
    cta: "Get Started",
    href: "/signup",
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "For teams that want the full experience.",
    features: ["Everything in Free", "Unlimited usage", "Priority support"],
    cta: "Purchase Plan",
    href: "/signup",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="absolute top-0 left-1/2 h-125 w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary text-sm backdrop-blur-sm">
                ✨ Simple, transparent pricing
              </div>
              <Heading
                as="h1"
                className="mb-6 text-balance font-bold text-5xl tracking-tight md:text-7xl"
              >
                Pricing that scales with you
              </Heading>
              <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-xl leading-relaxed">
                Start free, upgrade when you&apos;re ready. No hidden fees.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-32">
          <Container>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={
                    plan.highlight
                      ? "relative flex flex-col rounded-3xl border border-primary/30 bg-white/2 p-8 shadow-xl"
                      : "relative flex flex-col rounded-3xl border border-border bg-white/2 p-8"
                  }
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground text-xs">
                      Popular
                    </span>
                  )}

                  <h2 className="font-bold text-2xl text-foreground tracking-tight">{plan.name}</h2>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-bold text-5xl text-foreground tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlight ? "default" : "outline"}
                    className="mt-10 h-11 w-full rounded-md text-sm"
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
