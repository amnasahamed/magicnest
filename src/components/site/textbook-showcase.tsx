import { ArrowRight, Check } from "lucide-react";
import { showcaseBundleImage } from "@/data/textbooks";
import { PrimaryButton } from "@/components/site/ui-bits";
import bookParcel from "@/assets/stickers/book-parcel.webp";

export function TextbookShowcase() {
  return (
    <section
      id="textbooks"
      className="storybook-section bg-tint-yellow/40 px-4 py-14 sm:px-5 sm:py-20 lg:py-28"
      aria-label="Magic Nest Textbooks & Learning Materials"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold leading-tight sm:text-4xl lg:text-5xl">
              Physical textbooks crafted for little hands.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every enrolled child receives high-quality printed textbooks and workbooks delivered
              to their home, seamlessly integrated with our live one-to-one classes.
            </p>
          </div>
        </div>

        {/* Featured Hero Bundle Showcase Card */}
        <div className="mt-8 rounded-[28px] border border-border bg-card p-5 shadow-soft sm:mt-10 sm:rounded-[32px] sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                Real books for real learning beyond the screen.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                While lessons happen live with a caring teacher, learning is anchored in tangible,
                tactile pages designed to reduce screen fatigue and develop pencil grip, spatial
                reasoning, and joyful reading routines.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {[
                  ["Full Colour Illustrations", "Child-friendly visual storytelling"],
                  ["Thick 100+ GSM Paper", "Resistant to crayons, pencils & markers"],
                  ["Structured Multi-Term Flow", "Matches each week's lesson pace"],
                  ["Bilingual Malayalam Edition", "Preserving cultural language roots"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border/80 bg-background/60 p-3 sm:p-3.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/20 text-brand-teal">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <p className="text-xs font-extrabold text-foreground">{title}</p>
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
                <PrimaryButton className="w-full sm:w-auto">Book a free trial</PrimaryButton>
                <p className="text-xs font-bold text-muted-foreground">
                  * Physical books dispatched upon enrollment
                </p>
              </div>

              {/* Quick Links to View Books by Program Level */}
              <div className="mt-7 border-t border-border/80 pt-5 sm:mt-8 sm:pt-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                  View Printed Books Included in Each Level:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/pre-kg#books"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-extrabold text-foreground transition hover:bg-brand-yellow hover:text-brand-purple"
                  >
                    Pre-KG Books (2) <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                  <a
                    href="/lkg#books"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-extrabold text-foreground transition hover:bg-brand-yellow hover:text-brand-purple"
                  >
                    LKG Books (4) <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                  <a
                    href="/ukg#books"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-xs font-extrabold text-foreground transition hover:bg-brand-yellow hover:text-brand-purple"
                  >
                    UKG Books (4) <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute size-56 rounded-full bg-brand-yellow/25 blur-3xl sm:size-72"
                aria-hidden="true"
              />
              <img
                src={showcaseBundleImage}
                alt="Magic Nest complete textbook collection bundle showcase"
                width={1200}
                height={700}
                loading="lazy"
                className="relative z-10 w-full max-w-[340px] drop-shadow-xl transition-transform duration-500 hover:scale-[1.02] sm:max-w-[440px] lg:max-w-[540px]"
              />
              <img
                src={bookParcel}
                alt="A parcel of colourful learning books"
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute -bottom-7 -left-2 z-20 hidden w-28 animate-float-reverse drop-shadow-[0_10px_14px_rgba(28,22,48,0.18)] sm:block lg:-left-8 lg:w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
