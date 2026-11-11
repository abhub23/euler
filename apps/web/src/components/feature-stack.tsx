"use client";

import { Check } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "cn";
import { DataFlowVisual } from "./data-flow-visual";

const steps = [
  {
    eyebrow: "Lead intelligence",
    title: "Every lead, fully understood.",
    description:
      "The moment a contact lands in your pipeline, agents enrich it with role, budget, history, and intent. No manual research, no stale records.",
    points: [
      "Enriched from 40+ data sources automatically",
      "Summaries written the way your team reads",
      "Updates synced back to your CRM in real time",
    ],
  },
  {
    eyebrow: "Competitive intel",
    title: "Know what your rivals are charging.",
    description:
      "Agents keep a live record of every competitor in your market — pricing, deal stage, next meeting, and notes — so you walk into calls already ahead.",
    points: [
      "Real-time pricing and positioning",
      "Deal-risk flags before renewal",
      "Every head-to-head on one screen",
    ],
  },
  {
    eyebrow: "Autonomous execution",
    title: "Agents that actually do the work.",
    description:
      "Research, outreach, and follow-up run in the background while you review the output instead of the process. You stay in control of every action.",
    points: [
      "Runs on your stack, with your rules",
      "Review-ready drafts in seconds",
      "Full audit trail for every step",
    ],
  },
] as const;

function AgentRunsVisual() {
  const runs = [
    {
      name: "Enrich new leads",
      meta: "142 records · 2m ago",
      status: "Completed",
      dot: "bg-emerald-500",
      badge: "bg-emerald-500/12 text-emerald-700",
    },
    {
      name: "Draft Q3 outreach",
      meta: "24 emails · running now",
      status: "In progress",
      dot: "bg-orange-500",
      badge: "bg-orange-500/12 text-orange-700",
    },
    {
      name: "Competitor price sweep",
      meta: "Scheduled · 9:00 AM",
      status: "Queued",
      dot: "bg-black/30",
      badge: "bg-black/5 text-black/50",
    },
  ];

  return (
    <div className="relative size-full overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-r from-[#fdf1e3] via-[#f9e8f3] to-[#fde4ee]" />
      <div className="absolute -top-20 -right-12 size-56 rounded-full bg-[#f7d7e6] blur-3xl" />

      <div className="relative flex size-full flex-col p-4 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-medium text-[11px] text-black/45 uppercase tracking-[0.18em]">
            Agents
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[11px] text-black/60 ring-1 ring-black/5">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <p className="mt-2 font-semibold text-gray-950 text-lg tracking-tight sm:mt-4 sm:text-2xl">
          Today&apos;s runs
        </p>
        <p className="mt-1 hidden text-black/45 text-xs sm:block sm:text-sm">
          Autonomous work, ready for review.
        </p>

        <ul className="mt-4 divide-y divide-black/5 overflow-hidden rounded-lg bg-white/70 ring-1 ring-black/5 backdrop-blur sm:mt-5">
          {runs.map((run) => (
            <li key={run.name} className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className={cn("size-1.5 shrink-0 rounded-full", run.dot)} />
                <div className="min-w-0">
                  <p className="truncate font-medium text-gray-950 text-xs sm:text-sm">
                    {run.name}
                  </p>
                  <p className="truncate text-[10px] text-black/45 sm:text-xs">{run.meta}</p>
                </div>
              </div>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 font-medium text-[10px] sm:text-[11px]",
                  run.badge
                )}
              >
                {run.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const visuals = [
  <div key="flow" className="size-full">
    <DataFlowVisual />
  </div>,
  <Image
    key="competitors"
    src="/screenshots/competitors.png"
    alt="Euler competitor tracker listing pricing, deal stages, and next meetings"
    fill
    sizes="(min-width: 1024px) 48vw, 92vw"
    className="object-cover object-top dark:hue-rotate-180 dark:invert"
  />,
  <div key="agents" className="size-full dark:hue-rotate-180 dark:invert">
    <AgentRunsVisual />
  </div>,
];

export default function FeatureStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(value * steps.length)));
    setActive((current) => (current === next ? current : next));
  });

  return (
    <section aria-label="How Euler works" className="relative">
      <div ref={ref} className="relative h-[180vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 pt-8 pb-0 lg:grid-cols-2 lg:gap-12 lg:px-8">
            {/* Copy */}
            <div>
              <div className="grid">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    aria-hidden={index !== active}
                    className={cn(
                      "col-start-1 row-start-1 transition-all duration-500 ease-out motion-reduce:transition-none",
                      index === active
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    )}
                  >
                    <p className="font-mono font-semibold text-[#9a3412] text-xs uppercase tracking-widest dark:text-orange-500">
                      {step.eyebrow}
                    </p>
                    <h2 className="mt-4 text-balance font-medium text-3xl text-foreground tracking-tighter sm:text-4xl lg:text-5xl">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-md text-muted-foreground leading-6">{step.description}</p>
                    <ul className="mt-6 hidden space-y-2.5 sm:block">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#9a3412]/10 text-[#9a3412] dark:bg-orange-500/15 dark:text-orange-400">
                            <Check className="size-3" strokeWidth={2.5} />
                          </span>
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-1.5">
                  {steps.map((step, index) => (
                    <span
                      key={step.title}
                      className={cn(
                        "h-1 w-10 rounded-full transition-colors duration-500",
                        index <= active
                          ? "bg-[#9a3412] dark:bg-orange-500"
                          : "bg-border"
                      )}
                    />
                  ))}
                </div>
                <span className="font-mono text-muted-foreground text-xs tabular-nums">
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Stacked visuals */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-[#9a3412]/5 blur-2xl dark:hidden" />
              <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                {visuals.map((visual, index) => {
                  const depth = index - active;
                  return (
                    <div
                      key={String(index)}
                      aria-hidden={index !== active}
                      className={cn(
                        "absolute inset-0 overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/20 transition-all duration-700 ease-out motion-reduce:transition-none dark:border-white/10 dark:bg-[#0b0a07] dark:shadow-black/60",
                        depth === 0 && "z-30 translate-y-0 scale-100 opacity-100",
                        depth === 1 && "z-20 translate-y-5 scale-[0.965] opacity-90",
                        depth === 2 && "z-10 translate-y-10 scale-[0.93] opacity-70",
                        depth < 0 && "z-0 -translate-y-8 scale-[0.92] opacity-0",
                        depth > 2 && "z-0 translate-y-12 scale-[0.9] opacity-0"
                      )}
                    >
                      {visual}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
