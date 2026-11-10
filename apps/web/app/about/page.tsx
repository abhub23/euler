import { Container } from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Heading, Subheading } from "@/components/text";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
          {/* Modern mesh gradient background */}
          <div className="absolute top-0 left-1/2 h-125 w-full max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70 blur-3xl" />

          <Container className="relative z-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary text-sm backdrop-blur-sm">
                ✨ Building the future of AI
              </div>
              <Heading
                as="h1"
                className="mb-6 text-balance font-bold text-5xl tracking-tight md:text-7xl"
              >
                Building the future of{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  AI-powered development
                </span>
              </Heading>
              <p className="mx-auto max-w-2xl text-balance text-muted-foreground text-xl leading-relaxed">
                Euler is on a mission to empower every developer with autonomous AI agents that
                handle the boring stuff — so you can focus on what matters.
              </p>
            </div>
          </Container>
        </section>

        {/* Story Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 border-white/5 border-y bg-white/2" />
          <Container className="relative z-10">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
              <div>
                <Subheading className="mb-4 text-primary">Our Story</Subheading>
                <Heading as="h2" className="mb-6 text-balance text-3xl md:text-4xl">
                  From a simple idea to a platform used by thousands
                </Heading>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Euler started in 2026 with a simple observation: developers spend too much time
                  on repetitive tasks and not enough time building. We set out to create AI agents
                  that could handle the grunt work — testing, deployment, monitoring — so teams
                  could move faster and ship better software.
                </p>
                <p>
                  We're backed by top-tier investors and a community of passionate developers who
                  believe that the future of software development is autonomous, collaborative, and
                  human-centric.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="relative py-32">
          <Container className="relative z-10">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
                <Subheading className="mb-4 text-primary">Our Values</Subheading>
                <Heading as="h2" className="text-3xl md:text-5xl">
                  The principles that guide everything we do
                </Heading>
                <p className="mt-6 max-w-md text-lg text-muted-foreground">
                  Building something worthwhile starts with a clear set of beliefs. Here's what
                  we're stubborn about.
                </p>
              </div>

              <div className="lg:col-span-7">
                <ul className="divide-y divide-border border-border border-y">
                  {[
                    {
                      title: "Craft over quick wins",
                      description:
                        "We sweat the details — clean APIs, thoughtful design, and zero shortcuts.",
                    },
                    {
                      title: "Trust through transparency",
                      description:
                        "Your data stays yours. We are open about how we work, what we store, and why.",
                    },
                    {
                      title: "Build for builders",
                      description:
                        "We make tools we want to use ourselves. If it's not delightful for a developer, it doesn't ship.",
                    },
                    {
                      title: "Own it end to end",
                      description:
                        "From idea to production, we take full responsibility for every line we ship.",
                    },
                  ].map((value, index) => (
                    <li
                      key={value.title}
                      className="group grid gap-3 py-8 transition-colors sm:grid-cols-[64px_1fr_2fr] sm:items-baseline sm:gap-6"
                    >
                      <span className="font-mono text-muted-foreground/50 text-sm tabular-nums transition-colors group-hover:text-primary">
                        /0{index + 1}
                      </span>
                      <h3 className="font-semibold text-foreground text-xl tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {value.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="pb-20">
          <Container>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-12 text-center md:p-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent blur-2xl" />

              <div className="relative z-10">
                <Heading as="h2" className="mb-6 font-bold text-4xl tracking-tight md:text-5xl">
                  Ready to get started?
                </Heading>
                <p className="mx-auto mb-10 max-w-xl text-balance text-lg text-muted-foreground">
                  Join thousands of developers who are already shipping faster with Euler.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/signup"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 font-semibold text-background text-sm transition-all duration-200 hover:scale-105 hover:bg-foreground/90"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 font-medium text-foreground text-sm transition-all duration-200 hover:bg-white/5"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
