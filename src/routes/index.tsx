import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  Heart,
  Layers,
  Menu,
  MessageCircle,
  Move,
  Palette,
  PhoneCall,
  ShieldCheck,
  Star,
  Type,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PrimaryButton, Section, WhatsAppButton } from "@/components/site/ui-bits";
import {
  HeroMotion,
  Magnetic,
  ScrubText,
  StorybookJourney,
} from "@/components/site/motion-sections";
import homeHero from "@/assets/home-hero-v2.webp";
import relationshipHome from "@/assets/relationship-home-v2.webp";
import trialCta from "@/assets/trial-cta-v2.webp";
import officialLogo from "@/assets/magic-nest-official-logo.webp";
import preKgHero from "@/assets/pre-kg-hero.webp";
import lkgHero from "@/assets/lkg-hero.webp";
import ukgHero from "@/assets/ukg-hero.webp";
import supernestHome from "@/assets/supernest-home.webp";
import englishFoundationHome from "@/assets/english-foundation-home.webp";
import phoneticsHome from "@/assets/phonetics-home.webp";
import classSession from "@/assets/class-session.webp";
import readingBird from "@/assets/stickers/reading-bird.webp";
import tracingCrayon from "@/assets/stickers/tracing-crayon.webp";
import countingBlocks from "@/assets/stickers/counting-blocks.webp";
import readingBook from "@/assets/stickers/reading-book.webp";
import sproutingPencil from "@/assets/stickers/sprouting-pencil.webp";
import curiousBird from "@/assets/stickers/curious-bird.webp";
import celebratingBird from "@/assets/stickers/celebrating-bird.webp";
import phonicsCat from "@/assets/stickers/phonics-cat.webp";
import learningTogether from "@/assets/stickers/learning-together.webp";
import milestoneBadge from "@/assets/stickers/milestone-badge.webp";
import preKgBundle from "@/assets/textbooks/pre-kg-bundle.webp";
import lkgBundle from "@/assets/textbooks/lkg-bundle.webp";
import ukgBundle from "@/assets/textbooks/ukg-bundle.webp";
import phonicsTextbook from "@/assets/textbooks/phonics-textbook.webp";
import { TextbookShowcase } from "@/components/site/textbook-showcase";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magic Nest | Live 1:1 Online Kindergarten & Phonics for Ages 3-6" },
      {
        name: "description",
        content:
          "Live one-to-one online kindergarten and reading programs for ages 3-6 with warm early-years teachers, playful lessons, printed textbooks delivered home, and a free trial assessment.",
      },
      { property: "og:title", content: "Magic Nest | Live 1:1 Online Kindergarten & Reading" },
      {
        property: "og:description",
        content:
          "One teacher, one child, printed textbooks, and playful lessons that build confidence from home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  ["Why 1:1", "#experience"],
  ["Kindergarten", "#programs"],
  ["Textbooks", "#textbooks"],
  ["English & Phonics", "#english-phonics"],
  ["Supernest", "#supernest"],
  ["FAQ", "#faq"],
];

const kindergartenPrograms = [
  {
    name: "Pre-KG",
    ages: "Ages 3-4",
    schedule: "3 classes each week",
    duration: "6-month course",
    sessions: "76 live sessions",
    assessments: "4 milestone checks",
    books: "2 printed books included",
    bundleImage: preKgBundle,
    syllabusHref: "/pre-kg",
    image: preKgHero,
    imageAlt: "A Pre-KG child tracing broad curved lines during a live online class",
    detail:
      "Songs, movement, motor skills, and joyful routines for a warm, happy first step into learning.",
    sticker: tracingCrayon,
    stickerAlt: "A yellow crayon tracing a purple curve",
  },
  {
    name: "LKG",
    ages: "Ages 4-5",
    schedule: "3 classes each week",
    duration: "9-month course",
    sessions: "114 live sessions",
    assessments: "6 milestone checks",
    books: "4 printed books included",
    bundleImage: lkgBundle,
    syllabusHref: "/lkg",
    image: lkgHero,
    imageAlt: "An LKG child learning letters and early counting during a live online class",
    detail:
      "Early literacy, number sense, curiosity, and confident speaking, with optional Hindi and Arabic.",
    sticker: countingBlocks,
    stickerAlt: "Colourful felt counting blocks with raised dots",
  },
  {
    name: "UKG",
    ages: "Ages 5-6",
    schedule: "4 classes each week",
    duration: "9-month course",
    sessions: "144 live sessions",
    assessments: "6 milestone checks",
    books: "4 printed books included",
    bundleImage: ukgBundle,
    syllabusHref: "/ukg",
    image: ukgHero,
    imageAlt: "A UKG child reading and solving a number pattern during a live online class",
    detail:
      "Reading fluency, foundational maths, critical thinking, and full school readiness, with optional Hindi and Arabic.",
    sticker: readingBook,
    stickerAlt: "An open felt picture book with learning tiles",
  },
];

const englishPhonicsRoadmap = [
  {
    step: "01",
    title: "Phonics · Beginner",
    levelName: "Beginner Stage",
    description: "Letters, words, and simple sentences.",
    topics: ["Letters & alphabet sounds", "Word reading & formation", "Simple sentence reading"],
    sessions: "50 Sessions",
    schedule: "4 classes weekly",
  },
  {
    step: "02",
    title: "Phonics · Intermediate",
    levelName: "Intermediate Stage",
    description: "Alphabets phonics sound, word reading and writing, sentence reading.",
    topics: ["Alphabet phonics sounds", "Word reading & writing", "Sentence reading"],
    sessions: "37 Sessions",
    schedule: "3 classes weekly",
  },
  {
    step: "03",
    title: "Phonics · Advanced",
    levelName: "Advanced Stage",
    description: "Fluency, grammar, comprehension, and dictations.",
    topics: ["Fluency & expression", "Grammar foundations", "Comprehension", "Dictations"],
    sessions: "28 Sessions",
    schedule: "3 classes weekly",
  },
];

const supernestPrograms = [
  {
    name: "Supernest Pre-KG",
    label: "Early Booster",
    accent: "bg-brand-yellow/22 text-brand-purple",
    topics: [
      "Pre-writing lines and curves",
      "Alphabet recognition and sounds",
      "Number recognition and writing (1-10)",
      "Sizes, shapes, positions, and colours",
    ],
  },
  {
    name: "Supernest LKG",
    label: "Fast-Track Prep",
    accent: "bg-brand-teal/14 text-brand-teal",
    topics: [
      "Alphabet writing and phonics sounds",
      "Word building and early reading",
      "Number recognition and counting (1-50)",
      "Before, after, between, and patterns",
    ],
  },
];

const faqs = [
  [
    "How do I choose the right program for my child?",
    "You don't need to guess! Start with your child's age or primary learning goal (Full Kindergarten, Reading/Phonics, or Fast-Track Supernest). In the free trial class, our teacher gently observes your child's current confidence, attention, and skills to recommend the ideal starting point.",
  ],
  [
    "What is the difference between Full Kindergarten, English & Phonics, and Supernest?",
    "• Full Kindergarten (Pre-KG, LKG, UKG) is our comprehensive annual curriculum covering English, Maths, EVS, and Malayalam with printed textbooks.\n• English & Phonics focuses purely on reading, phonics, and communication fluency.\n• Supernest is a condensed 40-session booster covering essential English & Maths foundations in a shorter time frame.",
  ],
  [
    "Is my 3-year-old too young for an online class?",
    "No. Each session is playful, interactive, and structured around a young child's natural attention span. Parents are welcome to sit nearby, and children move, sing, and interact with physical books.",
  ],
  [
    "What if my child doesn't sit still?",
    "That is completely normal and expected! Our teachers use songs, physical actions, real objects, and quick activity transitions so movement is a natural part of the learning experience.",
  ],
  [
    "How is a live 1:1 class different from recorded video apps?",
    "A live teacher listens, responds, laughs, and adapts the pace in real-time. Your child is an active conversational partner, not a passive watcher.",
  ],
  [
    "Are printed textbooks included?",
    "Yes! All full kindergarten and reading courses include high-quality physical textbooks and workbooks delivered directly to your doorstep across India and GCC.",
  ],
  [
    "Can class schedules fit around our family routine?",
    "Yes. Magic Nest offers flexible morning, afternoon, and evening slots designed to adapt to your family's schedule.",
  ],
];

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <img
      src={officialLogo}
      alt="Magic Nest"
      width={4178}
      height={3283}
      className={footer ? "h-24 w-auto sm:h-28" : "h-12 w-auto sm:h-14"}
    />
  );
}

function MobileMenu() {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-border bg-card px-3 text-foreground [&::-webkit-details-marker]:hidden">
        <Menu className="size-5 group-open:hidden" aria-hidden="true" />
        <X className="hidden size-5 group-open:block" aria-hidden="true" />
        <span className="text-sm font-extrabold">Menu</span>
      </summary>
      <nav className="invisible fixed inset-x-4 top-[68px] max-h-[calc(100dvh-88px)] overflow-y-auto rounded-3xl border border-border bg-card p-4 opacity-0 shadow-lift transition group-open:visible group-open:opacity-100">
        <div className="space-y-1">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(event) =>
                (event.currentTarget.closest("details") as HTMLDetailsElement)?.removeAttribute(
                  "open",
                )
              }
              className="block rounded-2xl px-4 py-2.5 text-[15px] font-bold hover:bg-muted"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-4">
          <PrimaryButton className="w-full text-sm">Book a free trial</PrimaryButton>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Includes free 1:1 level assessment
          </p>
        </div>
      </nav>
    </details>
  );
}

function ProgramCard({
  program,
  featured = false,
}: {
  program: (typeof kindergartenPrograms)[number];
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-[28px] border border-border p-6 sm:p-8 ${featured ? "bg-secondary text-secondary-foreground md:p-10" : "bg-card text-card-foreground"}`}
    >
      <div className="relative mb-6 sm:mb-7">
        <img
          src={program.image}
          alt={program.imageAlt}
          width={1402}
          height={1122}
          loading="lazy"
          className={`w-full rounded-[22px] object-cover ${featured ? "aspect-[4/3] sm:aspect-[16/6]" : "aspect-[4/3] sm:aspect-[16/8]"}`}
        />
        {program.bundleImage && (
          <div className="absolute -bottom-3 right-3 flex items-center gap-2 rounded-2xl border border-border/60 bg-card/95 px-3 py-1.5 shadow-md backdrop-blur-sm sm:-bottom-4 sm:right-4 sm:px-3.5 sm:py-2">
            <img
              src={program.bundleImage}
              alt={`${program.name} textbooks`}
              className="h-9 w-auto drop-shadow-sm sm:h-10"
            />
            <span className="text-[11px] font-extrabold text-foreground sm:text-xs">
              {program.books}
            </span>
          </div>
        )}
      </div>
      <div className={featured ? "md:grid md:grid-cols-[0.95fr_1.05fr] md:gap-12" : ""}>
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="relative">
              <p
                className={`text-sm font-extrabold ${featured ? "text-brand-yellow" : "text-accent"}`}
              >
                {program.ages}
              </p>
              <h3 className="mt-1 text-3xl">{program.name}</h3>
            </div>
            <BookOpen
              className={`size-8 ${featured ? "text-brand-yellow" : "text-brand-teal"}`}
              aria-hidden="true"
            />
          </div>
          <p
            className={`mt-5 max-w-md ${featured ? "text-secondary-foreground/78" : "text-muted-foreground"}`}
          >
            {program.detail}
          </p>
          {program.sticker ? (
            <img
              src={program.sticker}
              alt={program.stickerAlt ?? "A playful learning activity"}
              width={1024}
              height={1024}
              loading="lazy"
              className="mt-4 w-24 animate-float-slow drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)]"
            />
          ) : null}
        </div>
        <ul className={`mt-6 grid gap-3 ${featured ? "md:mt-1" : ""}`}>
          {[program.duration, program.books, program.sessions, program.assessments].map((fact) => (
            <li key={fact} className="flex items-center gap-3 font-bold">
              <span
                className={`flex size-6 items-center justify-center rounded-full ${featured ? "bg-brand-yellow text-brand-purple" : "bg-tint-coral text-accent"}`}
              >
                <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className={featured ? "text-secondary-foreground" : "text-card-foreground"}>
                {fact}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`mt-7 border-t pt-6 ${featured ? "border-secondary-foreground/18" : "border-border"}`}
      >
        <p className="text-sm font-extrabold">{program.schedule}</p>
      </div>
      <div className="mt-auto flex flex-col items-start gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {program.syllabusHref ? (
          <a
            href={program.syllabusHref}
            className={`inline-flex min-h-11 items-center gap-2 py-2 text-sm font-extrabold hover:underline ${featured ? "text-brand-yellow" : "text-accent"}`}
          >
            Explore {program.name} syllabus & books
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        ) : null}
        {featured ? (
          <PrimaryButton className="w-full sm:w-auto">Book a free trial</PrimaryButton>
        ) : null}
      </div>
    </article>
  );
}

function PhonicsMiniActivity() {
  const [letters, setLetters] = useState<string[]>([]);
  const complete = letters.join("") === "CAT";

  function chooseLetter(letter: string) {
    if (complete || letters.length === 3 || letters.includes(letter)) return;
    setLetters((current) => [...current, letter]);
  }

  function reset() {
    setLetters([]);
  }

  return (
    <section className="mt-10 overflow-hidden rounded-[30px] border border-secondary-foreground/18 bg-secondary-foreground/8 p-6 sm:p-8">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="text-sm font-extrabold text-brand-yellow">A tiny phonics try-out</p>
          <h3 className="mt-2 text-2xl text-secondary-foreground sm:text-3xl">
            Build a word together.
          </h3>
          <p className="mt-2 max-w-lg text-sm text-secondary-foreground/76">
            Tap the sounds in order to make a familiar word. This is the kind of hands-on guidance
            children receive in class.
          </p>
          <div className="mt-5 flex gap-2" aria-label="Word being built">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="flex size-12 items-center justify-center rounded-2xl bg-card font-display text-2xl font-bold text-brand-purple shadow-soft"
              >
                {letters[index] ?? ""}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["C", "A", "T"].map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() => chooseLetter(letter)}
                disabled={letters.includes(letter) || complete}
                className="flex size-12 items-center justify-center rounded-2xl bg-brand-yellow font-display text-xl font-bold text-brand-purple shadow-sm transition hover:-translate-y-0.5 hover:bg-card disabled:cursor-default disabled:opacity-45"
              >
                {letter}
              </button>
            ))}
            {letters.length > 0 ? (
              <button
                type="button"
                onClick={reset}
                className="rounded-2xl border border-secondary-foreground/28 px-4 text-sm font-extrabold text-secondary-foreground transition hover:bg-secondary-foreground/10"
              >
                Try again
              </button>
            ) : null}
          </div>
          {complete ? (
            <p className="mt-4 font-extrabold text-brand-yellow">
              You made CAT! Wonderful sound blending.
            </p>
          ) : null}
        </div>
        <div className="relative mx-auto min-h-48 w-full max-w-56">
          <img
            src={complete ? celebratingBird : phonicsCat}
            alt={complete ? "A purple bird celebrating" : "A friendly orange kitten"}
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_16px_20px_rgba(16,48,56,0.28)]"
          />
          {complete ? (
            <img
              src={phonicsCat}
              alt=""
              width={1024}
              height={1024}
              className="absolute -bottom-6 -left-12 w-24 animate-float-slow drop-shadow-md"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div
      id="top"
      className="min-h-[100dvh] overflow-x-clip bg-background pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:gap-4 sm:px-5">
          <a href="#top" aria-label="Magic Nest home">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-4 text-[13px] font-extrabold text-muted-foreground lg:flex xl:gap-6 xl:text-sm">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="whitespace-nowrap transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <PrimaryButton className="min-h-11 px-5 text-sm">Book a free trial</PrimaryButton>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <StorybookJourney>
        {/* Hero Section */}
        <HeroMotion>
          <div className="mx-auto grid w-full max-w-[1180px] items-center gap-6 py-6 sm:gap-8 sm:py-8 md:min-h-[calc(100dvh-72px)] md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:py-10">
            <div className="relative z-10 max-w-xl">
              <p
                data-hero-item
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-4 py-2 text-sm font-extrabold text-brand-purple"
              >
                <Users className="size-4" aria-hidden="true" />
                Live 1:1 Learning for Ages 3–6
              </p>
              <h1
                data-hero-item
                className="mt-4 max-w-3xl text-[clamp(2.45rem,12vw,4.75rem)] leading-[0.98] tracking-[-0.045em] sm:mt-5 sm:text-[clamp(2.8rem,6vw,4.75rem)]"
              >
                A kinder
                <span
                  className="mx-2 inline-block h-9 w-14 rounded-full bg-cover bg-center align-middle sm:h-12 sm:w-20"
                  style={{ backgroundImage: `url(${relationshipHome})` }}
                  aria-hidden="true"
                />
                start to school.
              </h1>
              <p
                data-hero-item
                className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
              >
                One teacher, one child, printed textbooks, and playful lessons that build confidence
                from the comfort of home.
              </p>
              <div data-hero-item className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Magnetic className="w-full sm:w-auto">
                  <PrimaryButton className="w-full sm:w-auto">
                    Find my child's starting level
                  </PrimaryButton>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <WhatsAppButton className="w-full sm:w-auto" />
                </Magnetic>
              </div>
              <p
                data-hero-item
                className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-muted-foreground md:justify-start"
              >
                <Star
                  className="size-3.5 shrink-0 fill-amber-400 text-amber-500"
                  aria-hidden="true"
                />
                <span>
                  Free 1:1 trial includes a gentle level & readiness assessment with our teacher.
                </span>
              </p>
            </div>
            <div
              data-hero-visual
              className="relative mx-auto w-full max-w-[610px] md:justify-self-end"
            >
              <div
                data-hero-orbit
                className="absolute -left-5 top-10 size-24 rounded-[28px] bg-brand-yellow/30"
                aria-hidden="true"
              />
              <div
                data-hero-orbit
                className="absolute -right-5 bottom-12 size-32 rounded-full bg-brand-teal/18"
                aria-hidden="true"
              />
              <img
                src={homeHero}
                alt="A young child responding to her teacher during a live online class"
                width={1122}
                height={1402}
                fetchPriority="high"
                className="relative aspect-[16/10] w-full rounded-[30px] object-cover object-[center_34%] shadow-lift sm:aspect-[4/4.5] sm:rounded-[36px] sm:object-center"
              />
              <img
                data-hero-orbit
                src={readingBird}
                alt="A friendly purple bird reading a picture book"
                width={1024}
                height={1024}
                className="pointer-events-none absolute -bottom-9 -left-5 z-10 w-28 drop-shadow-[0_14px_18px_rgba(28,22,48,0.22)] sm:-bottom-12 sm:-left-12 sm:w-40 md:w-44"
              />
            </div>
          </div>
        </HeroMotion>

        {/* Trust Value Bar */}
        <section
          className="relative z-10 border-y border-border bg-card px-4 py-6 sm:px-5 sm:py-7"
          aria-label="Why families choose Magic Nest"
        >
          <div className="mx-auto grid w-full max-w-[1180px] gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              {
                icon: Users,
                label: "Personalized 1:1 live classes",
                color: "bg-brand-yellow/20 text-brand-purple",
              },
              {
                icon: ShieldCheck,
                label: "Printed books delivered home",
                color: "bg-brand-teal/18 text-brand-teal",
              },
              { icon: Heart, label: "Flexible class timings", color: "bg-accent/12 text-accent" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-3 sm:justify-center">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full ${color}`}
                >
                  <Icon className="size-5" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <p className="font-extrabold">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 1:1 Experience & Relationship Section */}
        <Section id="experience" tone="cream">
          <div className="grid items-center gap-10 md:grid-cols-[1.06fr_0.94fr] md:gap-16">
            <div className="reveal relative">
              <div
                className="absolute -left-8 -top-8 size-32 rounded-full bg-brand-teal/18"
                aria-hidden="true"
              />
              <img
                src={relationshipHome}
                alt="A child proudly showing his drawing to a teacher during a live class"
                width={1402}
                height={1122}
                loading="lazy"
                className="relative aspect-[5/4] w-full rounded-[32px] object-cover shadow-soft"
              />
            </div>
            <div className="relative">
              <p className="text-sm font-extrabold text-accent">Made for young attention spans</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">A relationship, not another screen.</h2>
              <p className="mt-5 max-w-[58ch] text-muted-foreground">
                Your child talks, moves, creates, and responds. The teacher notices their mood and
                adapts the lesson in real time.
              </p>
              <img
                src={learningTogether}
                alt="Two hands building a soft puzzle together"
                width={1024}
                height={1024}
                loading="lazy"
                className="pointer-events-none absolute -right-2 -top-12 hidden w-28 animate-float-reverse drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)] lg:block"
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Move,
                    title: "Room to wiggle",
                    copy: "Songs and physical actions help busy bodies stay engaged.",
                    color: "text-brand-red",
                  },
                  {
                    icon: Palette,
                    title: "Play with purpose",
                    copy: "Every story and hands-on activity supports a foundational skill.",
                    color: "text-brand-green",
                  },
                  {
                    icon: MessageCircle,
                    title: "Real conversation",
                    copy: "Children answer, ask questions, laugh, and feel truly heard.",
                    color: "text-brand-blue",
                  },
                  {
                    icon: Star,
                    title: "Gentle assessments",
                    copy: "Milestones are celebrated and tracked across every term.",
                    color: "text-brand-yellow",
                  },
                ].map(({ icon: Icon, title, copy, color }) => (
                  <div key={title} className="flex gap-3">
                    <Icon
                      className={`mt-1 size-5 shrink-0 ${color}`}
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* What children experience and what parents receive */}
        <Section id="parent-view" tone="yellow-tint">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold text-accent">One class, two kinds of confidence</p>
            <h2 className="mt-3 text-4xl text-balance sm:text-5xl">
              Your child feels the fun. You can see the learning.
            </h2>
            <p className="mx-auto mt-5 max-w-[62ch] text-pretty text-muted-foreground">
              Every playful moment has a learning purpose, and every parent can understand what the
              teacher is helping their child practise.
            </p>
          </div>

          <div className="relative mt-10 grid gap-5 lg:grid-cols-2 lg:gap-7">
            <article className="relative overflow-hidden rounded-[30px] bg-secondary p-6 text-secondary-foreground sm:p-8 lg:p-10">
              <div className="relative z-10 max-w-md">
                <p className="text-sm font-extrabold text-brand-yellow">
                  What your child experiences
                </p>
                <h3 className="mt-2 text-3xl">A class that feels like playtime.</h3>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Stories they can answer",
                    "Movement between activities",
                    "Letters and numbers they can touch",
                    "A teacher who listens and responds",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-bold leading-relaxed">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={readingBook}
                alt="A colourful open learning book"
                width={1024}
                height={1024}
                loading="lazy"
                className="pointer-events-none absolute -bottom-10 -right-8 hidden w-44 opacity-35 sm:block"
              />
            </article>

            <article className="relative overflow-hidden rounded-[30px] border border-border bg-card p-6 sm:p-8 lg:p-10">
              <div className="relative z-10 max-w-md">
                <p className="text-sm font-extrabold text-accent">What you can see as a parent</p>
                <h3 className="mt-2 text-3xl">A clear reason behind every activity.</h3>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Personal attention from one teacher",
                    "Lessons matched to the child's level",
                    "Printed books used beyond the screen",
                    "Milestone checks across the program",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm font-bold leading-relaxed text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-teal"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <div className="flex size-20 rotate-3 items-center justify-center rounded-[24px] border-4 border-tint-yellow bg-card shadow-lift">
                <Heart className="size-8 fill-brand-red/15 text-brand-red" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="mt-7 grid items-center gap-6 rounded-[28px] bg-card p-5 sm:p-7 md:grid-cols-[0.72fr_1.28fr]">
            <img
              src={classSession}
              alt="A live Magic Nest class with a teacher guiding a young learner"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-[22px] object-cover"
            />
            <div>
              <h3 className="text-2xl sm:text-3xl">Watch the connection in a free class.</h3>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                The teacher meets your child at their current level, notices how they respond, and
                recommends the most suitable starting point.
              </p>
              <div className="mt-5">
                <PrimaryButton>Meet a teacher in a free class</PrimaryButton>
              </div>
            </div>
          </div>
        </Section>

        {/* Full Kindergarten Programs */}
        <Section id="programs" tone="coral-tint">
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-3.5 py-1 text-xs font-extrabold text-brand-purple">
              <GraduationCap className="size-4" aria-hidden="true" />
              Full Kindergarten Curriculum
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl">Complete, comprehensive school readiness.</h2>
            <p className="mt-4 max-w-[62ch] text-muted-foreground">
              Age-graded programs covering English, Maths, EVS (Science &amp; Nature), and
              Malayalam, with Hindi and Arabic available as optional languages. Each level includes
              high-quality printed textbooks delivered to your doorstep.
            </p>
            <img
              src={milestoneBadge}
              alt="A soft purple milestone badge with a golden star"
              width={1024}
              height={1024}
              loading="lazy"
              className="pointer-events-none absolute -right-28 -top-3 hidden w-24 animate-float-slow drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)] lg:block"
            />
          </div>
          {/* Program chooser guide */}
          <div className="mt-8 rounded-[22px] border border-border bg-card p-5 sm:p-6">
            <p className="text-sm font-extrabold text-foreground">
              Not sure which program fits your child?
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  iconClass: "bg-brand-yellow/30 text-brand-purple",
                  goal: "Full school year",
                  hint: "Choose Pre-KG, LKG, or UKG, based on your child's age.",
                },
                {
                  icon: Type,
                  iconClass: "bg-tint-teal/70 text-brand-purple",
                  goal: "Learn to read & speak",
                  hint: "Choose English & Phonics, a focused reading pathway.",
                },
                {
                  icon: Zap,
                  iconClass: "bg-tint-coral/50 text-brand-purple",
                  goal: "Quick catch-up",
                  hint: "Choose Supernest: 40 sessions covering the core essentials.",
                },
              ].map(({ icon: Icon, iconClass, goal, hint }) => (
                <div key={goal} className="rounded-[16px] bg-muted/50 px-4 py-3">
                  <div
                    className={`flex size-8 items-center justify-center rounded-xl ${iconClass}`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm font-extrabold text-foreground">{goal}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <ProgramCard program={kindergartenPrograms[0]!} featured />
            </div>
            <ProgramCard program={kindergartenPrograms[1]!} />
            <ProgramCard program={kindergartenPrograms[2]!} />
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-[24px] border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">
                <strong>Not sure which grade level?</strong> Our teacher checks your child's
                confidence and skills during the free trial.
              </p>
            </div>
            <PrimaryButton className="shrink-0 text-sm">Book a free trial</PrimaryButton>
          </div>
        </Section>

        {/* Four Subjects Banner */}
        <Section id="subjects" tone="white">
          <div className="grid items-center gap-10 md:grid-cols-[0.84fr_1.16fr] md:gap-16">
            <div className="rounded-[32px] bg-secondary p-8 text-secondary-foreground sm:p-10">
              <BookOpen className="size-9 text-brand-yellow" aria-hidden="true" />
              <h2 className="mt-8 text-3xl">Many skills. Many languages. One playful world.</h2>
              <p className="mt-4 text-secondary-foreground/75">
                Animated learning materials and hands-on activities bring English, Maths, EVS,
                Malayalam, Hindi, and Arabic to life through stories, conversations, and the world
                children already know.
              </p>
            </div>
            <div>
              <ScrubText
                text="Literacy, numeracy, communication, creativity, and critical thinking grow together, not in separate little boxes."
                className="font-display text-3xl leading-[1.28] sm:text-4xl"
              />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Maths", "English", "EVS", "Malayalam"].map((subject, index) => (
                  <div
                    key={subject}
                    className={`rounded-[22px] px-4 py-5 text-center font-extrabold ${
                      [
                        "bg-brand-yellow/22 text-brand-purple",
                        "bg-brand-teal/14 text-brand-teal",
                        "bg-brand-purple/10 text-brand-purple",
                        "bg-accent/10 text-accent",
                      ][index]
                    }`}
                  >
                    {subject}
                  </div>
                ))}
              </div>
              <div className="mt-3.5 flex flex-wrap items-center justify-start sm:justify-end gap-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                  Optional Languages:
                </span>
                {[
                  { name: "Arabic", style: "bg-brand-teal/16 text-brand-teal" },
                  { name: "Hindi", style: "bg-brand-yellow/25 text-brand-purple" },
                ].map((lang) => (
                  <div
                    key={lang.name}
                    className={`inline-flex items-center gap-2 rounded-[18px] border border-border/80 px-4 py-2 text-sm font-extrabold ${lang.style}`}
                  >
                    <span>{lang.name}</span>
                    <span className="rounded-full bg-background/85 px-2 py-0.5 text-[10px] font-bold text-muted-foreground shadow-xs">
                      Optional
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Dedicated Physical Textbooks Showcase */}
        <TextbookShowcase />

        {/* English & Phonics Reading Mastery */}
        <Section id="english-phonics" tone="teal">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_0.72fr] md:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/20 px-3.5 py-1 text-xs font-extrabold text-brand-yellow">
                <BookOpen className="size-3.5" aria-hidden="true" />
                Focused Reading &amp; Communication Pathway
              </div>
              <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
                English & Phonics: From first sounds to joyful reading.
              </h2>
            </div>
            <div>
              <p className="text-secondary-foreground/76">
                A structured, step-by-step reading journey with a live 1:1 teacher and official
                printed Phonics textbook. Children start at their exact comfort level and advance
                naturally toward independent reading.
              </p>
              <p className="mt-4 font-extrabold text-brand-yellow">
                Personalized 1:1 sessions · Printed Phonics Textbook included
              </p>
            </div>
          </div>

          {/* Teacher & Book Visual Banner */}
          <div className="reveal mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <img
              src={englishFoundationHome}
              alt="A child happily learning to read with a live 1:1 English teacher"
              width={1896}
              height={830}
              loading="lazy"
              className="aspect-[16/9] w-full rounded-[26px] object-cover shadow-soft sm:rounded-[30px]"
            />
            <div className="flex flex-col justify-between rounded-[26px] border border-secondary-foreground/15 bg-card p-6 text-foreground shadow-soft sm:rounded-[30px] sm:p-7">
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={phonicsTextbook}
                    alt="Phonics for Kids official textbook"
                    width={500}
                    height={600}
                    loading="lazy"
                    className="h-20 w-auto drop-shadow-md"
                  />
                  <div>
                    <span className="rounded-full bg-tint-yellow px-2.5 py-1 text-[11px] font-extrabold text-brand-purple">
                      Included with Course
                    </span>
                    <h3 className="mt-1 text-lg font-bold">Phonics for Kids Textbook</h3>
                    <p className="text-xs text-muted-foreground">Delivered to your home</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-bold">
                  {[
                    "Letter Recognition",
                    "Sound Blending",
                    "Word Building",
                    "Sentence Reading",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-1.5 rounded-xl bg-muted/60 px-2.5 py-2"
                    >
                      <Check className="size-3.5 text-brand-teal" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <a
                  href="tel:+917034663519"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-border bg-background px-3 py-2.5 text-xs font-extrabold text-foreground hover:bg-muted"
                >
                  <PhoneCall className="size-3.5 text-brand-blue" />
                  Have questions? Call +91 70346 63519
                </a>
              </div>
            </div>
          </div>

          <PhonicsMiniActivity />

          {/* 3-Stage Phonics Roadmap */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {englishPhonicsRoadmap.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col rounded-[26px] p-6 text-foreground shadow-sm transition hover:shadow-md ${
                  index === 0 ? "bg-tint-yellow" : "bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-brand-teal/35">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-background px-2.5 py-1 text-[11px] font-extrabold text-brand-purple shadow-sm">
                    {item.levelName}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-border/70 pt-3 flex-1">
                  {item.topics.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-xs font-bold text-foreground/85"
                    >
                      <span className="size-1.5 rounded-full bg-brand-yellow shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/60 text-xs font-extrabold">
                  <span className="text-brand-teal">{item.sessions} · 1:1 Live</span>
                  <span className="text-muted-foreground">{item.schedule}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Level Assessment Trial Reassurance Banner */}
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[26px] border border-secondary-foreground/18 bg-secondary-foreground/5 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="font-display text-lg font-semibold text-secondary-foreground">
                Not sure whether your child needs beginner sounds or story reading?
              </p>
              <p className="mt-1 text-sm text-secondary-foreground/75">
                Our teacher will find your child's exact reading stage during the free 1:1 trial.
              </p>
            </div>
            <PrimaryButton className="shrink-0">Book a free trial</PrimaryButton>
          </div>
        </Section>

        {/* Supernest Fast-Track Booster */}
        <Section id="supernest" tone="white">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-foreground">
              Need a quick foundation boost?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Choose from our intensive pathways designed for fast, targeted learning.
            </p>
          </div>
          <div className="grid items-end gap-8 md:grid-cols-[1fr_0.72fr] md:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-3.5 py-1 text-xs font-extrabold text-brand-teal">
                <Layers className="size-3.5" aria-hidden="true" />
                Short Booster Program · 40 Sessions
              </div>
              <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
                Supernest: Core English &amp; Maths, fast.
              </h2>
              <img
                src={sproutingPencil}
                alt="A pencil sprouting fresh green leaves"
                width={1024}
                height={1024}
                loading="lazy"
                className="pointer-events-none absolute -right-3 -top-11 hidden w-24 animate-float-reverse drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)] sm:block"
              />
            </div>
            <p className="text-muted-foreground">
              Ideal for children who need to catch up or get a head start. Supernest covers the most
              important English and Maths foundations in just 40 live 1:1 sessions, with no
              year-long commitment required.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "5 classes weekly",
              "2 milestone assessments",
              "English + Maths focused",
              "Personalized 1:1 attention",
            ].map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-extrabold text-foreground"
              >
                {fact}
              </span>
            ))}
          </div>
          <div className="reveal mt-8">
            <img
              src={supernestHome}
              alt="A child moving between playful English and Maths activities in a live Supernest class"
              width={1925}
              height={817}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[26px] object-cover shadow-soft sm:aspect-[16/6] sm:rounded-[30px]"
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {supernestPrograms.map((program, index) => (
              <article
                key={program.name}
                className={`rounded-[30px] border border-border p-7 sm:p-9 ${
                  index === 0 ? "bg-tint-yellow" : "bg-tint-teal"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-3xl">{program.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-extrabold ${program.accent}`}
                  >
                    {program.label}
                  </span>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm font-bold leading-relaxed">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-teal"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-6">
                  <PrimaryButton>Book a free trial</PrimaryButton>
                  <span className="text-xs font-extrabold text-muted-foreground">
                    40 Live Sessions
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" tone="cream">
          <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:gap-16">
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl">Questions are welcome here.</h2>
              <p className="mt-4 text-muted-foreground">
                Clear answers for the practical questions parents ask before their child's first
                class.
              </p>
              <div className="mt-7">
                <WhatsAppButton />
              </div>
              <img
                src={curiousBird}
                alt="A curious purple bird listening closely"
                width={1024}
                height={1024}
                loading="lazy"
                className="pointer-events-none mt-6 hidden w-28 animate-float-slow drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)] md:block"
              />
            </div>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {faqs.map(([question, answer], index) => (
                <AccordionItem
                  key={question}
                  value={`item-${index}`}
                  className="rounded-[24px] border border-border bg-card px-5 data-[state=open]:shadow-soft"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground whitespace-pre-line">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Final CTA Banner */}
        <section
          id="trial"
          className="storybook-section bg-secondary px-4 py-14 text-secondary-foreground sm:px-5 sm:py-20"
        >
          <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-8 md:grid-cols-[1fr_0.72fr] md:gap-16">
            <div>
              <h2 className="max-w-2xl text-4xl sm:text-5xl">
                Let one class show you the difference.
              </h2>
              <p className="mt-5 max-w-xl text-secondary-foreground/78">
                Meet a teacher, watch your child smile and participate, and discover how joyful 1:1
                learning can be.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic className="w-full sm:w-auto">
                  <PrimaryButton className="w-full sm:w-auto">
                    Book my child's free class
                  </PrimaryButton>
                </Magnetic>
                <Magnetic className="w-full sm:w-auto">
                  <WhatsAppButton className="w-full sm:w-auto" variant="light" />
                </Magnetic>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-secondary-foreground/80">
                <span className="inline-flex items-center gap-1.5">
                  <Check
                    className="size-3.5 shrink-0 text-accent"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  No credit card required
                </span>
                <span className="text-secondary-foreground/40" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check
                    className="size-3.5 shrink-0 text-accent"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  Free level assessment included
                </span>
                <span className="text-secondary-foreground/40" aria-hidden="true">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check
                    className="size-3.5 shrink-0 text-accent"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                  Gentle, interactive lesson
                </span>
              </div>
            </div>
            <img
              src={trialCta}
              alt="A child and teacher sharing a cheerful high-five during an online class"
              width={864}
              height={900}
              loading="lazy"
              className="mx-auto -mb-6 w-full max-w-[300px] drop-shadow-[0_24px_32px_rgba(28,22,48,0.24)] sm:mb-0 sm:max-w-md"
            />
          </div>
        </section>
      </StorybookJourney>

      <SiteFooter />

      {/* Floating Mobile Bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
        <PrimaryButton className="w-full">Book a free 1:1 trial</PrimaryButton>
      </div>
    </div>
  );
}
