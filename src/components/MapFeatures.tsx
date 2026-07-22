import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { medicalFeatures } from "../data/content";
import Button from "./Button";

export default function MapFeatures() {
  return (
    <section className="bg-white py-20 dark:bg-ink-950">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-card bg-brand-50 dark:bg-white/5"
        >
          <svg viewBox="0 0 400 300" className="h-72 w-full" role="img" aria-label="Map showing nearby clinic locations">
            <rect width="400" height="300" fill="var(--color-brand-50)" />
            <g stroke="var(--color-brand-200)" strokeWidth="2">
              <path d="M0 60 H400 M0 140 H400 M0 220 H400" />
              <path d="M80 0 V300 M200 0 V300 M320 0 V300" />
            </g>
            <circle cx="200" cy="140" r="10" fill="var(--color-brand-500)" />
            <circle cx="140" cy="90" r="6" fill="var(--color-brand-300)" />
            <circle cx="280" cy="190" r="6" fill="var(--color-brand-300)" />
          </svg>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[130%] flex-col items-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white p-3 shadow-lg dark:bg-ink-900">
            <div>
              <p className="text-xs font-semibold text-ink-900 dark:text-white">Dr. Alina Clinic</p>
              <p className="text-[11px] text-ink-500 dark:text-white/60">1.2 km away</p>
            </div>
            <Button variant="primary" className="px-4 py-2 text-xs">
              Appointment
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl dark:text-white">
            Additional Medical Features
          </h2>
          <p className="mt-3 max-w-md text-sm text-ink-500 dark:text-white/70">
            Our platform focused on preventive care, nutrition, and mental health, integrated with
            wellness programs that keep you engaged.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {medicalFeatures.map((item) => (
              <li key={item.id} className="flex items-center gap-2 text-sm text-ink-700 dark:text-white/80">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>

          <Button variant="primary" className="mt-8">
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
