import { ArrowRight, ArrowUp, Heart, Mail, MessageCircle, Phone } from "lucide-react";
import officialLogo from "@/assets/magic-nest-official-logo.webp";
import footerLandscape from "@/assets/footer-landscape.webp";

const programLinks = [
  { label: "Pre-KG (Ages 3–4)", href: "/pre-kg" },
  { label: "LKG (Ages 4–5)", href: "/lkg" },
  { label: "UKG (Ages 5–6)", href: "/ukg" },
  { label: "English & Phonics", href: "/#english-phonics" },
  { label: "Supernest Fast-Track", href: "/#supernest" },
];

const curriculumLinks = [
  { label: "Printed Textbooks Kit", href: "/#textbooks" },
  { label: "Pre-KG Activity Workbooks", href: "/pre-kg#books" },
  { label: "LKG 4-Subject Set", href: "/lkg#books" },
  { label: "UKG Readiness Pack", href: "/ukg#books" },
  { label: "Phonics for Kids Book", href: "/#english-phonics" },
  { label: "How a class works", href: "/#experience" },
];

const companyLinks = [
  { label: "Why one-to-one learning", href: "/#experience" },
  { label: "Parent FAQs", href: "/#faq" },
  { label: "WhatsApp Support", href: "https://wa.me/917034663519" },
  { label: "Call Us: +91 70346 63519", href: "tel:+917034663519" },
  { label: "Email: info@clapslearn.com", href: "mailto:info@clapslearn.com" },
];

export function SiteFooter({ showBackToTop = true }: { showBackToTop?: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#FBF9F4] text-foreground pt-14 sm:pt-20 lg:pt-24 border-t border-border/60">
      {/* Top Header & Columns Grid */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 sm:pb-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] lg:gap-10">
          {/* Brand & Left Info */}
          <div className="flex flex-col items-start pr-4">
            <a
              href="/"
              aria-label="Magic Nest Home"
              className="inline-block transition hover:opacity-90"
            >
              <img
                src={officialLogo}
                alt="Magic Nest"
                width={4178}
                height={3283}
                className="h-11 w-auto sm:h-13"
              />
            </a>

            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Live one-to-one online kindergarten for ages 3–6.
            </p>

            {/* Social / Direct Connect Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/917034663519"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 items-center justify-center rounded-full bg-border/60 text-muted-foreground transition hover:bg-brand-teal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href="mailto:info@clapslearn.com"
                aria-label="Email"
                className="flex size-11 items-center justify-center rounded-full bg-border/60 text-muted-foreground transition hover:bg-brand-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="tel:+917034663519"
                aria-label="Phone"
                className="flex size-11 items-center justify-center rounded-full bg-border/60 text-muted-foreground transition hover:bg-brand-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Phone className="size-4" />
              </a>
            </div>

            {/* Live Status Pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-extrabold text-brand-teal">
              <span className="relative flex size-2">
                <span className="relative inline-flex size-2 rounded-full bg-brand-teal" />
              </span>
              <span>All admissions open for 2026–27</span>
            </div>

            {/* Copyright Note on Left */}
            <p className="mt-6 text-xs text-muted-foreground/80 hidden lg:block">
              © 2026 Magic Nest (Clapslearn). All rights reserved.
            </p>
          </div>

          {/* Column 1: Programs */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground/80">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center py-2 font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Curriculum & Books */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground/80">
              Curriculum
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {curriculumLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center py-2 font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Contact */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground/80">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center py-2 font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-bar Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50 py-5 text-xs text-muted-foreground">
          <p className="lg:hidden text-center sm:text-left">
            © 2026 Magic Nest (Clapslearn). All rights reserved.
          </p>

          <div className="hidden lg:flex items-center gap-2">
            <Heart className="size-3.5 text-brand-red" />
            <span>Nurturing joyful childhoods with care & curiosity</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/917034663519?text=Hi%20Magic%20Nest%2C%20I&#x27;d%20like%20to%20book%20a%20free%20trial%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 py-2 font-bold text-foreground transition-colors hover:text-primary"
            >
              <span>Book a free trial</span>
              <ArrowRight className="size-3.5" />
            </a>

            {showBackToTop && (
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group inline-flex min-h-11 items-center gap-1 py-2 font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>Back to top</span>
                <ArrowUp className="size-3 transition-transform group-hover:-translate-y-0.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Panoramic Painterly Storybook Landscape Illustration at Bottom */}
      <div className="relative w-full overflow-hidden select-none -mt-4 sm:-mt-6">
        {/* Soft top gradient blend so the painting sky seamlessly merges with the footer's ivory background */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 z-10 bg-gradient-to-b from-[#FBF9F4] via-[#FBF9F4]/70 to-transparent"
          aria-hidden="true"
        />

        <img
          src={footerLandscape}
          alt="Whimsical countryside storybook meadow illustration with cottage, hills and flowers"
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-44 sm:h-64 md:h-80 lg:h-96 object-cover object-bottom transition-transform duration-1000 hover:scale-[1.01]"
        />
      </div>
    </footer>
  );
}
