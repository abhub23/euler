"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
// import Image from "next/image";
import Link from "next/link";
import HeroFlame from "@/components/effects/flame/hero-flame";
import { Button as GlazeButton } from "@/components/glaze/ui/button";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-x-clip px-0 pt-32 md:px-6">
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-16 mb-4 w-full space-y-2 px-3 text-[32px] text-foreground leading-tight tracking-tight sm:px-6 sm:text-4xl md:px-0 md:text-5xl lg:text-7xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", filter: "blur(2px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.1,
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                className="block whitespace-nowrap"
              >
                Agents that <span className="text-orange-800">outperform</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%", filter: "blur(2px)" }}
                animate={{ y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.25,
                  ease: "easeInOut",
                  duration: 0.6,
                }}
                className="block whitespace-nowrap"
              >
                your entire roadmap.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.6,
              ease: "easeInOut",
              duration: 0.8,
            }}
            className="mb-6 max-w-xl px-6 text-muted-foreground md:px-0 lg:text-xl"
          >
            Skip the setup. Skip the boilerplate.
            <br />
            Let the agents do the heavy lifting.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.7,
              ease: "easeInOut",
              duration: 0.8,
            }}
            className="relative z-10 flex flex-row items-center gap-4 px-6 sm:w-auto md:px-0 lg:gap-8"
          >
            {/* Previous "Start building" button — uncomment this and comment out the glaze version to switch back:
            <Button
              asChild
              size="lg"
              className="group h-10 cursor-pointer rounded-md px-3 text-[15px] sm:h-12 sm:px-6 sm:text-base"
            >
              <Link href="/signin">
                Start building
                <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:size-5" />
              </Link>
            </Button>
            */}
            <span style={{ display: "contents", fontFamily: "inherit" }} className="glaze">
              <GlazeButton
                className="group h-10! cursor-pointer px-3! text-[15px]! sm:h-12! sm:px-6! sm:text-base!"
                style={{ fontFamily: "inherit" }}
                render={<Link href="/signin" />}
                nativeButton={false}
              >
                Start building
                <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:size-5" />
              </GlazeButton>
            </span>
            <Button
              variant="outline"
              size="lg"
              className="h-10 cursor-pointer rounded-full px-3 text-[15px] sm:h-12 sm:px-6 sm:text-base"
            >
              Read the Docs
            </Button>
          </motion.div>

          <div className="-mt-25 mb-10 lg:mb-24">
            <HeroFlame />
          </div>

          {/* <div className="w-full max-w-[1000px] my-16 rounded-xl overflow-hidden px-6 md:px-0">
            <Image
              src="/scene.jpg"
              alt="Hero"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
