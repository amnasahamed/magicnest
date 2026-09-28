import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Globe,
  MessageCircle,
  Truck,
} from "lucide-react";
import type { Syllabus } from "@/data/syllabi";
import { PrimaryButton } from "@/components/site/ui-bits";
import { HeroMotion, SyllabusJourneyMotion } from "@/components/site/motion-sections";
import { SiteFooter } from "@/components/site/site-footer";
import officialLogo from "@/assets/magic-nest-official-logo.webp";

const enquiryUrl = `https://wa.me/917034663519?text=${encodeURIComponent(
  "Hi Magic Nest, I'd like help choosing the right program for my child. Please share the details.",
)}`;

const termColors = [
  "bg-tint-yellow text-brand-purple",
  "bg-tint-teal text-brand-purple",
  "bg-tint-coral text-brand-purple",
];

export function SyllabusPage({ syllabus }: { syllabus: Syllabus }) {
  return (
    <div className="min-h-[100dvh] overflow-x-clip bg-background pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-5">
          <a href="/" aria-label="Magic Nest home">
            <img
              src={officialLogo}
              alt="Magic Nest"
              width={4178}
              height={3283}
              className="h-12 w-auto sm:h-14"
            />
          </a>
          <a
            href="/#programs"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">All programs</span>
            <span className="sm:hidden">Programs</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroMotion>
          <div className="mx-auto grid w-full max-w-[1180px] items-center gap-7 py-6 sm:gap-8 sm:py-8 md:min-h-[calc(100dvh-72px)] md:grid-cols-[0.92fr_1.08fr] md:gap-14 md:py-10">
            <div className="relative z-10 max-w-xl">
              <p
                data-hero-item
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/22 px-4 py-2 text-sm font-extrabold text-brand-purple"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                {syllabus.name} syllabus · {syllabus.ages}
              </p>
              <h1
                data-hero-item
                className="mt-4 text-[clamp(2.4rem,11.5vw,4.2rem)] leading-[0.98] tracking-[-0.045em] sm:mt-5 sm:text-[clamp(2.8rem,5.2vw,4.2rem)]"
              >
                {syllabus.headline}
              </h1>
              <p
                data-hero-item
                className="mt-5 max-w-[54ch] text-[17px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
              >
                {syllabus.summary}
              </p>
              <div data-hero-item className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <PrimaryButton>
                  Book a free trial <ArrowRight className="size-5" aria-hidden="true" />
                </PrimaryButton>
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-secondary px-6 py-3 text-[16px] font-extrabold text-secondary transition hover:-translate-y-0.5 hover:bg-tint-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Ask about this level
                </a>
              </div>
            </div>

            <div
              data-hero-visual
              className="relative mx-auto w-full max-w-[590px] md:justify-self-end"
            >
              <div
                data-hero-orbit
                className="absolute -left-4 top-10 size-24 rounded-[28px] bg-brand-yellow/28"
                aria-hidden="true"
              />
              <div
                data-hero-orbit
                className="absolute -right-4 bottom-10 size-28 rounded-full bg-brand-blue/16"
                aria-hidden="true"
              />
              <img
                src={syllabus.heroImage}
                alt={syllabus.heroAlt}
                width={1402}
                height={1122}
                fetchPriority="high"
                className="relative aspect-[16/10] w-full rounded-[30px] object-cover shadow-lift sm:aspect-[5/4] sm:rounded-[36px]"
              />
              <div className="absolute -bottom-3 left-3 right-3 flex items-center gap-3 rounded-[20px] bg-card px-4 py-3 shadow-soft sm:-bottom-4 sm:left-auto sm:right-6 sm:w-[270px] sm:rounded-[22px] sm:px-5 sm:py-4">
                <Clock3 className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                <p className="text-sm font-extrabold leading-snug">{syllabus.schedule}</p>
              </div>
            </div>
          </div>
        </HeroMotion>

        {/* Overview Stats Bar */}
        <section
          className="border-y border-border bg-card px-4 py-6 sm:px-5 sm:py-7"
          aria-label="Course overview"
        >
          <div className="mx-auto grid w-full max-w-[1180px] grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4">
            {syllabus.stats.map((fact, index) => (
              <div key={fact} className="flex items-center gap-3 md:justify-center">
                <span
                  className={`h-9 w-1.5 rounded-full ${["bg-brand-red", "bg-brand-yellow", "bg-brand-green", "bg-brand-blue"][index]}`}
                />
                <p className="font-extrabold">{fact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Journey / Term Breakdown */}
        <section className="overflow-hidden px-4 py-16 sm:px-5 sm:py-24 lg:py-32">
          <div className="mx-auto w-full max-w-[1080px]">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold text-accent">The learning journey</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Confidence grows one term at a time.</h2>
              <p className="mt-4 text-muted-foreground">
                Each term revisits familiar ideas, then adds the next achievable challenge.
              </p>
            </div>

            <SyllabusJourneyMotion>
              <div className="relative mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:gap-8">
                <div
                  data-journey-line
                  className="absolute bottom-10 left-[25px] top-10 hidden w-1 origin-top rounded-full bg-brand-yellow md:block"
                  aria-hidden="true"
                />
                {syllabus.terms.map((term, index) => (
                  <article
                    key={term.term}
                    data-term-card
                    className={`relative grid gap-5 rounded-[30px] border border-border p-6 sm:p-8 md:grid-cols-[120px_1fr] md:gap-10 md:pl-20 ${termColors[index] ?? termColors[0]}`}
                  >
                    <div className="relative">
                      <span
                        className="absolute -left-[71px] top-1 hidden size-7 items-center justify-center rounded-full border-[7px] border-background bg-brand-purple md:flex"
                        aria-hidden="true"
                      />
                      <p className="text-sm font-extrabold opacity-75">{term.term}</p>
                      <h3 className="mt-1 text-2xl">{term.range}</h3>
                    </div>
                    <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {term.topics.map((topic) => (
                        <div key={topic} className="flex gap-3 text-sm font-bold leading-relaxed">
                          <Check
                            className="mt-0.5 size-4 shrink-0"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </SyllabusJourneyMotion>
          </div>
        </section>

        {/* Learning Beyond the Workbook */}
        <section className="bg-tint-teal px-4 py-16 sm:px-5 sm:py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-[1080px] gap-10 md:grid-cols-[0.68fr_1.32fr] md:gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl">Learning beyond the workbook.</h2>
              <p className="mt-4 text-muted-foreground">
                Conversation, movement, stories, and everyday examples help these ideas feel real.
              </p>
            </div>
            <div className="-mx-4 grid snap-x snap-mandatory grid-flow-col auto-cols-[46%] gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {syllabus.explored.map((topic, index) => (
                <div
                  key={topic}
                  className={`min-h-28 snap-start rounded-[24px] p-5 font-display text-lg font-semibold leading-snug ${
                    index % 3 === 0
                      ? "bg-brand-yellow/30 text-brand-purple"
                      : index % 3 === 1
                        ? "bg-card text-foreground"
                        : "bg-brand-blue/14 text-brand-blue"
                  }`}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional Languages Callout Banner */}
        {syllabus.optionalLanguages && syllabus.optionalLanguages.length > 0 && (
          <section className="border-b border-border bg-background px-4 py-8 sm:px-5 sm:py-10">
            <div className="mx-auto w-full max-w-[1080px]">
              <div className="flex flex-col items-start justify-between gap-4 rounded-[26px] border border-border bg-card p-5 shadow-soft sm:flex-row sm:items-center sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/25 text-brand-purple">
                    <Globe className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground sm:text-lg">
                      Optional Languages: {syllabus.optionalLanguages.join(" & ")}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                      Enhance your child's {syllabus.name} pathway with optional beginner Hindi or Arabic conversational and literacy sessions.
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-tint-teal px-3.5 py-1.5 text-xs font-extrabold text-brand-purple shrink-0">
                  Optional Add-on
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Printed Textbooks & Kit Section placed towards the bottom */}
        {syllabus.books && syllabus.books.length > 0 && (
          <section
            id="books"
            className="border-y border-border bg-tint-yellow/35 px-4 py-14 sm:px-5 sm:py-20 lg:py-24"
          >
            <div className="mx-auto w-full max-w-[1080px]">
              <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Printed books delivered to your doorstep.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Enrolled {syllabus.name} learners receive these physical textbooks and activity
                    workbooks for hands-on, multi-sensory learning at home.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2 shadow-sm sm:px-4 sm:py-2.5">
                  <Truck className="size-4 text-brand-blue" aria-hidden="true" />
                  <span className="text-xs font-extrabold">
                    {syllabus.books.length} Physical Books Included
                  </span>
                </div>
              </div>

              {/* Mobile swipe hint banner (visible only on mobile) */}
              <div className="mt-6 flex items-center justify-between text-xs font-bold text-muted-foreground sm:hidden">
                <span>{syllabus.books.length} books in this kit</span>
                <span className="text-accent">Swipe horizontally →</span>
              </div>

              {/* Responsive Books Track / Grid */}
              <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-8 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4">
                {syllabus.books.map((book) => (
                  <article
                    key={book.name}
                    className="flex w-[82vw] max-w-[310px] shrink-0 snap-start flex-col rounded-[26px] border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift sm:w-auto sm:max-w-none sm:shrink sm:p-6"
                  >
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className="rounded-full bg-brand-yellow/25 px-2.5 py-1 text-[11px] font-extrabold text-brand-purple sm:px-3 sm:text-xs">
                        {book.tag}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground sm:text-[11px]">
                        {book.format}
                      </span>
                    </div>

                    {/* 3D Book Mockup */}
                    <div className="my-4 flex aspect-[4/3.2] items-center justify-center overflow-hidden rounded-2xl bg-tint-cream/60 p-3 sm:aspect-[4/3.8]">
                      <img
                        src={book.image}
                        alt={book.name}
                        loading="lazy"
                        className="max-h-[170px] w-auto object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105 sm:max-h-[190px]"
                      />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">
                        {book.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold text-muted-foreground sm:text-xs">
                        {book.subtitle}
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                        {book.description}
                      </p>
                    </div>

                    {/* Key Learning Highlights */}
                    {book.features && book.features.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-border/80 pt-3">
                        {book.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-[11px] font-bold text-foreground sm:text-xs"
                          >
                            <Check
                              className="mt-0.5 size-3 shrink-0 text-brand-green"
                              strokeWidth={3}
                              aria-hidden="true"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Free Trial Conversion Section */}
        <section className="bg-secondary px-4 py-14 text-secondary-foreground sm:px-5 sm:py-20">
          <div className="mx-auto flex w-full max-w-[1080px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-2xl text-4xl sm:text-5xl">
                See how your child responds in one live class.
              </h2>
              <p className="mt-4 max-w-xl text-secondary-foreground/76">
                The teacher will observe confidence, communication, attention, and readiness.
              </p>
            </div>
            <PrimaryButton className="shrink-0">Book a free trial</PrimaryButton>
          </div>
        </section>

        {/* Next Level Progression Banner */}
        {syllabus.nextLevel ? (
          <a
            href={syllabus.nextLevel.href}
            className="group block border-b border-border bg-card px-4 py-9 transition-colors hover:bg-tint-yellow sm:px-5 sm:py-10"
          >
            <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-8">
              <div>
                <p className="text-sm font-extrabold text-accent">Next learning stage</p>
                <h2 className="mt-2 text-3xl">Explore {syllabus.nextLevel.name}</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">{syllabus.nextLevel.copy}</p>
              </div>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                <ArrowRight className="size-6" aria-hidden="true" />
              </span>
            </div>
          </a>
        ) : null}
      </main>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
        <PrimaryButton className="w-full">Book a free trial</PrimaryButton>
      </div>
    </div>
  );
}
