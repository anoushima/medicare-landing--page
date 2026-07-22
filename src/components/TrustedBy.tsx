import { motion } from "framer-motion";
import { trustedCompanies } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function TrustedBy() {
  return (
    <section id="about" className="bg-brand-50/40 py-20 dark:bg-white/[0.03]">
      <div className="container-page">
        <SectionHeading title="Trusted by 100+ Global top company connect with us" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {trustedCompanies.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-ink-900/5 bg-white py-5 text-sm font-semibold text-ink-500 dark:border-white/10 dark:bg-ink-900 dark:text-white/60"
            >
              <span className="h-2 w-2 rounded-full bg-brand-400" aria-hidden="true" />
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
