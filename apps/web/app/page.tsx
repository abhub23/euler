import type { Metadata } from "next";
import { BentoCard } from "@/components/bento-card";
import { Container } from "@/components/container";
import CTA from "@/components/cta";
import FAQs from "@/components/faqs";
import FeatureStack from "@/components/feature-stack";
import Footer from "@/components/footer";
import { Keyboard } from "@/components/keyboard";
import { LogoCluster } from "@/components/logo-cluster";
import { SiteMap } from "@/components/map";
import Navbar from "@/components/navbar";
import { Heading } from "@/components/text";
import { APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: APP_URL,
  },
};

function BentoSection() {
  return (
    <Container className="pb-10">
      <Heading as="h3" className="mt-2 max-w-3xl text-foreground!">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="AI agents turn complex workflows into clear, actionable insights, so your team can make better decisions faster."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-position-[left_-109px_top_-112px] bg-size-[1000px_560px] bg-no-repeat dark:hue-rotate-180 dark:invert" />
          }
          fade={["bottom"]}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-position-[left_-38px_top_-73px] bg-size-[1100px_650px] bg-no-repeat dark:hue-rotate-180 dark:invert" />
          }
          fade={["bottom"]}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={["LeftCommand", "LeftShift", "D"]} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Scale your agents globally with reliable infrastructure built for every market."
          graphic={<SiteMap />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <CTA />
      <div className="overflow-hidden">
        <BentoSection />
      </div>
      <FeatureStack />
      <FAQs />
      <Footer />
    </>
  );
}
