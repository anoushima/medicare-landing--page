import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { consultants } from "../data/content";
import SectionHeading from "./SectionHeading";

const avatarBg = ["bg-brand-300", "bg-brand-500", "bg-ink-700"];

export default function Consultants() {
  return (
    <section className="bg-white py-20 dark:bg-ink-950">
      <div className="container-page">
        <SectionHeading title="Collaborate with our best consultant by online" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {consultants.map((person, i) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-card border border-ink-900/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white ${avatarBg[i % avatarBg.length]}`}
                  aria-hidden="true"
                >
                  {person.initials}
                </span>
                <button
                  type="button"
                  aria-label={`More options for ${person.name}`}
                  className="text-ink-300 hover:text-ink-700 dark:hover:text-white"
                >
                  <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-brand-600 dark:text-brand-300">
                {person.role}
              </p>
              <p className="mt-2 text-sm text-ink-500 dark:text-white/70">
                {person.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
