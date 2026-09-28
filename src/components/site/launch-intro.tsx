import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_SEEN_KEY = "magic-nest-launch-intro-seen-v1";
const EXIT_DURATION_MS = 450;

type IntroPhase = "ready" | "playing" | "error" | "exiting";

export function LaunchIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<IntroPhase>("ready");
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishIntro = useCallback(() => {
    if (phase === "exiting") return;

    window.sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    setPhase("exiting");
    exitTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      window.requestAnimationFrame(() => {
        document.querySelector<HTMLElement>("main a, main button")?.focus({ preventScroll: true });
      });
    }, EXIT_DURATION_MS);
  }, [phase]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(motionQuery.matches);

    if (window.sessionStorage.getItem(INTRO_SEEN_KEY) === "true") {
      setIsVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const siteContent = document.getElementById("site-content");
    document.body.style.overflow = "hidden";
    siteContent?.setAttribute("inert", "");
    siteContent?.setAttribute("aria-hidden", "true");
    startButtonRef.current?.focus();

    const handleMotionChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      siteContent?.removeAttribute("inert");
      siteContent?.removeAttribute("aria-hidden");
      motionQuery.removeEventListener("change", handleMotionChange);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
      const siteContent = document.getElementById("site-content");
      siteContent?.removeAttribute("inert");
      siteContent?.removeAttribute("aria-hidden");
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finishIntro();
        return;
      }

      if (event.key !== "Tab") return;

      const controls = [startButtonRef.current, skipButtonRef.current].filter(
        (control): control is HTMLButtonElement => Boolean(control && control.offsetParent),
      );

      if (controls.length === 0) return;
      const firstControl = controls[0];
      const lastControl = controls[controls.length - 1];

      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault();
        lastControl.focus();
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault();
        firstControl.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finishIntro, isVisible]);

  const playIntro = async () => {
    if (reduceMotion) {
      finishIntro();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    try {
      video.currentTime = 0;
      await video.play();
      setPhase("playing");
      skipButtonRef.current?.focus();
    } catch {
      setPhase("error");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Magic Nest"
      className={`fixed inset-0 z-[100] isolate overflow-hidden bg-[#f8f1df] transition-opacity duration-[450ms] ${
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-contain"
        poster="/launch-intro/open-the-nest-poster.jpg"
        preload="auto"
        muted
        playsInline
        onEnded={finishIntro}
        onError={() => setPhase("error")}
        aria-label="A storybook opening into the Magic Nest learning world"
      >
        <source src="/launch-intro/open-the-nest.mp4" type="video/mp4" />
      </video>

      {phase === "ready" || phase === "error" ? (
        <button
          ref={startButtonRef}
          type="button"
          onClick={phase === "error" ? finishIntro : playIntro}
          className="group absolute inset-0 z-10 flex cursor-pointer items-end justify-center p-5 pb-[max(2rem,env(safe-area-inset-bottom))] focus-visible:outline-none sm:p-8 sm:pb-10"
          aria-describedby="launch-intro-help"
        >
          <span className="rounded-[1.25rem] bg-brand-purple px-6 py-3.5 text-base font-extrabold text-white shadow-[0_12px_32px_rgba(59,34,94,0.28)] transition-transform duration-200 group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:ring-4 group-focus-visible:ring-brand-yellow group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f8f1df] sm:px-8 sm:py-4 sm:text-lg">
            {phase === "error"
              ? "Enter Magic Nest"
              : reduceMotion
                ? "Open Magic Nest"
                : "Tap to open the nest"}
          </span>
          <span id="launch-intro-help" className="sr-only">
            {phase === "error"
              ? "The welcome video could not play. Continue to the website."
              : reduceMotion
                ? "Continue to the website without playing the welcome animation."
                : "Play the eight-second welcome film."}
          </span>
        </button>
      ) : null}

      <div className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-20 sm:right-6 sm:top-6">
        <button
          ref={skipButtonRef}
          type="button"
          onClick={finishIntro}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/95 px-4 py-2 text-sm font-extrabold text-brand-purple shadow-[0_8px_24px_rgba(59,34,94,0.16)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
          aria-label="Skip welcome video and enter Magic Nest"
        >
          Skip intro
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
