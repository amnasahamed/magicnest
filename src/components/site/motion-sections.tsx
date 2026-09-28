"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const learningTrail =
  "M24 0 C42 520 18 910 36 1390 C48 1850 28 2320 22 2820 C16 3300 44 3750 32 4280 C24 4620 22 4820 26 4980 M974 5100 C982 6000 964 6420 976 6900 C986 7390 964 7860 978 8350 C986 8770 968 9320 980 10000";

export function HeroMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .from("[data-hero-item]", {
            y: 36,
            opacity: 0,
            duration: 0.85,
            stagger: 0.1,
            clearProps: "transform,opacity",
          })
          .from(
            "[data-hero-visual]",
            {
              clipPath: "inset(12% 10% 12% 10% round 36px)",
              scale: 0.92,
              opacity: 0,
              duration: 1.15,
              clearProps: "clipPath,transform,opacity",
            },
            0.08,
          )
          .from(
            "[data-hero-orbit]",
            {
              scale: 0.5,
              opacity: 0,
              duration: 0.8,
              stagger: 0.12,
              clearProps: "transform,opacity",
            },
            0.3,
          );

        gsap.to("[data-hero-visual] img", {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} className="storybook-hero relative overflow-hidden px-4 sm:px-5">
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export function StorybookJourney({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const path = scope.current?.querySelector<SVGPathElement>("[data-learning-trail]");
        if (!path) return;

        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <main ref={scope} className="storybook-world relative isolate overflow-hidden">
      <svg
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full opacity-25 md:opacity-45"
        viewBox="0 0 1000 10000"
        preserveAspectRatio="none"
        aria-hidden="true"
        data-story-path
      >
        <path
          d={learningTrail}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="10 16"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-brand-teal opacity-50"
        />
        <path
          d={learningTrail}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="text-brand-purple"
          data-learning-trail
        />
        {[1320, 2800, 4320, 5480, 6900, 8360].map((y, index) => (
          <g key={y} className="text-brand-yellow">
            <circle
              cx={index < 3 ? (index === 1 ? 22 : 32) : index % 2 === 0 ? 978 : 974}
              cy={y}
              r="16"
              fill="currentColor"
            />
            <circle
              cx={index < 3 ? (index === 1 ? 22 : 32) : index % 2 === 0 ? 978 : 974}
              cy={y}
              r="6"
              fill="white"
            />
          </g>
        ))}
      </svg>
      <div className="relative">{children}</div>
    </main>
  );
}

export function ScrollImage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: scope.current,
              start: "top 88%",
              end: "bottom 12%",
              scrub: 1,
            },
          })
          .fromTo(
            "[data-scroll-image]",
            { scale: 0.86, opacity: 0.45, filter: "saturate(0.75)" },
            { scale: 1, opacity: 1, filter: "saturate(1)", duration: 0.56, ease: "none" },
          )
          .to("[data-scroll-image]", {
            scale: 0.96,
            opacity: 0.28,
            filter: "saturate(0.7)",
            duration: 0.44,
            ease: "none",
          });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      <div data-scroll-image className="relative">
        {children}
      </div>
    </div>
  );
}

export function SyllabusJourneyMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-journey-line]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 72%",
              end: "bottom 58%",
              scrub: 0.8,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-term-card]").forEach((card, index) => {
          gsap.from(card, {
            y: 52,
            rotate: index % 2 === 0 ? -1.2 : 1.2,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 84%", once: true },
          });
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}

export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const scope = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 82%",
              end: "bottom 42%",
              scrub: 0.7,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <p ref={scope} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} data-word className="inline-block">
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </p>
  );
}

export function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const target = useRef<HTMLDivElement>(null);
  const moveX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const moveY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useGSAP(
    () => {
      if (!target.current) return;
      moveX.current = gsap.quickTo(target.current, "x", { duration: 0.35, ease: "power3.out" });
      moveY.current = gsap.quickTo(target.current, "y", { duration: 0.35, ease: "power3.out" });
    },
    { scope: target },
  );

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !target.current) return;
    const bounds = target.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.16;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.2;
    moveX.current?.(x);
    moveY.current?.(y);
  }

  function handleLeave() {
    if (!target.current) return;
    gsap.to(target.current, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.45)" });
  }

  return (
    <div
      ref={target}
      className={`inline-flex ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </div>
  );
}

const rhythm = [
  ["Hello", "A cheerful welcome song helps your child settle in."],
  ["Move", "Actions, rhythm, and quick body breaks."],
  ["Discover", "Letters, numbers, stories, and objects from home."],
  ["Create", "A small activity and a happy recap."],
] as const;

const panelColors = [
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-brand-green text-[oklch(0.28_0.10_298)]",
  "bg-[oklch(0.47_0.16_249.8)] text-white",
];

export function LearningAccordion() {
  const scope = useRef<HTMLDivElement>(null);

  function activate(index: number) {
    if (!scope.current || window.matchMedia("(max-width: 767px)").matches) return;
    const panels = Array.from(scope.current.querySelectorAll<HTMLElement>("[data-learning-panel]"));
    gsap.to(panels, {
      flexGrow: (panelIndex) => (panelIndex === index ? 2.7 : 0.72),
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
    gsap.to(panels, {
      opacity: (panelIndex) => (panelIndex === index ? 1 : 0.78),
      duration: 0.45,
      overwrite: "auto",
    });
  }

  function reset() {
    if (!scope.current || window.matchMedia("(max-width: 767px)").matches) return;
    const panels = scope.current.querySelectorAll<HTMLElement>("[data-learning-panel]");
    gsap.to(panels, { flexGrow: 1, opacity: 1, duration: 0.65, ease: "power3.out" });
  }

  return (
    <div
      ref={scope}
      className="-mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-12 md:mx-0 md:h-[430px] md:overflow-visible md:px-0 md:pb-0"
      onPointerLeave={reset}
    >
      {rhythm.map(([title, copy], index) => (
        <button
          key={title}
          type="button"
          data-learning-panel
          onPointerEnter={() => activate(index)}
          onFocus={() => activate(index)}
          onBlur={reset}
          className={`group min-h-64 w-[82vw] max-w-[310px] shrink-0 snap-start overflow-hidden rounded-[28px] p-6 text-left transition-[filter] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:min-h-52 md:w-auto md:max-w-none md:min-w-0 md:flex-1 ${panelColors[index]}`}
        >
          <span className="font-display text-5xl font-semibold opacity-70">{index + 1}</span>
          <span className="mt-12 block font-display text-2xl font-semibold md:mt-40">{title}</span>
          <span className="mt-2 block max-w-[28ch] text-sm leading-relaxed opacity-80">{copy}</span>
        </button>
      ))}
    </div>
  );
}
