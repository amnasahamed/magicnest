import type { ReactNode } from "react";
import { Check as CheckIcon, MessageCircle } from "lucide-react";

const trialWhatsAppUrl = `https://wa.me/917034663519?text=${encodeURIComponent(
  "Hi Magic Nest, I'd like to book a free trial class for my child. Please share the available timings.",
)}`;

const enquiryWhatsAppUrl = `https://wa.me/917034663519?text=${encodeURIComponent(
  "Hi Magic Nest, I'd like to know more about your programs. Please share the details.",
)}`;

export function Section({
  id,
  tone = "cream",
  children,
  className = "",
}: {
  id?: string;
  tone?: "cream" | "white" | "teal-tint" | "yellow-tint" | "coral-tint" | "teal";
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<string, string> = {
    cream: "bg-background",
    white: "bg-card",
    "teal-tint": "bg-tint-teal",
    "yellow-tint": "bg-tint-yellow",
    "coral-tint": "bg-tint-coral",
    teal: "bg-secondary text-secondary-foreground",
  };
  return (
    <section
      id={id}
      className={`${tones[tone]} storybook-section scroll-mt-20 px-4 py-14 sm:px-5 sm:py-20 lg:py-28 ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] reveal">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} mb-8 sm:mb-10`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-sm font-medium tracking-wide text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[2rem] leading-[1.08] sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function PrimaryButton({
  children,
  href = trialWhatsAppUrl,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const opensWhatsApp = href.startsWith("https://wa.me/");

  return (
    <a
      href={href}
      target={opensWhatsApp ? "_blank" : undefined}
      rel={opensWhatsApp ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 font-sans text-[16px] font-extrabold text-primary-foreground shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lift active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  children = "Chat on WhatsApp",
  className = "",
  variant = "outline",
}: {
  children?: ReactNode;
  className?: string;
  variant?: "outline" | "light";
}) {
  const styles =
    variant === "outline"
      ? "border-2 border-secondary text-secondary hover:bg-tint-teal"
      : "border-2 border-secondary-foreground/55 text-secondary-foreground hover:bg-secondary-foreground/10";
  return (
    <a
      href={enquiryWhatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-sans text-[16px] font-extrabold transition duration-200 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${styles} ${className}`}
    >
      <MessageCircle className="size-5" strokeWidth={2.4} aria-hidden="true" />
      {children}
    </a>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <CheckIcon
      className={`size-5 shrink-0 text-secondary ${className}`}
      strokeWidth={2.5}
      aria-hidden="true"
    />
  );
}
