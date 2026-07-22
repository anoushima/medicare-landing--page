import { motion } from "framer-motion";
import { Phone, Sparkles, Video } from "lucide-react";
import Button from "./Button";

const avatarColors = ["bg-brand-300", "bg-brand-500", "bg-ink-700", "bg-brand-700"];

export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-blush-50 dark:bg-ink-900"
    >
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-600 shadow-sm dark:bg-white/10 dark:text-brand-200">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Best Medical Service in India
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-ink-900 sm:text-5xl lg:text-[3.4rem] dark:text-white">
            Get Premium medical care for your best health
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-500 dark:text-white/70">
            Consultants are experts in many areas of your personal life, discover your first visit
            and take amazing offers created for our medical services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button variant="primary">Make a Consultant</Button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarColors.map((color, i) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-blush-50 dark:border-ink-900 ${color}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-ink-700 dark:text-white/70">
                Happy customer
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-lavender-100 p-10 dark:bg-white/5">
            <svg
              viewBox="0 0 240 280"
              className="mx-auto h-auto w-full max-w-[260px]"
              role="img"
              aria-label="Illustration of a doctor with a stethoscope"
            >
              <ellipse cx="120" cy="260" rx="90" ry="14" fill="currentColor" className="text-brand-200/60" />
              <path
                d="M120 60c-33 0-52 24-52 58 0 27 12 46 24 58-4 14-4 28 4 40 8 12 24 18 24 18s16-6 24-18c8-12 8-26 4-40 12-12 24-31 24-58 0-34-19-58-52-58Z"
                fill="var(--color-brand-100)"
              />
              <circle cx="120" cy="108" r="40" fill="#f2c9a4" />
              <path
                d="M84 96c0-24 16-40 36-40s36 16 36 40c-10-6-24-10-36-10s-26 4-36 10Z"
                fill="var(--color-ink-900)"
              />
              <rect x="96" y="150" width="48" height="70" rx="20" fill="white" />
              <path
                d="M108 150v20a12 12 0 0 0 24 0v-20"
                fill="none"
                stroke="var(--color-brand-500)"
                strokeWidth="4"
              />
              <circle cx="120" cy="196" r="10" fill="none" stroke="var(--color-brand-500)" strokeWidth="4" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl dark:bg-ink-900"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-200">
                  <Video className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">Medicare</p>
                  <p className="text-xs text-ink-500 dark:text-white/60">Calling…</p>
                </div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
