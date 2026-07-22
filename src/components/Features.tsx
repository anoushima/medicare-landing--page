import { motion } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck } from "lucide-react";
import { primaryFeatures, smallFeatures } from "../data/content";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { ChatMockup, DashboardMockup, PhoneMockup } from "./mockups";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-ink-950">
      <div className="container-page">
        <SectionHeading eyebrow="Features" title="Discover our Benefits & Features" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {primaryFeatures.map((feature, i) => (
            <motion.article
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-card border border-ink-900/5 bg-brand-50/60 p-8 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-xl font-bold text-ink-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 max-w-sm text-sm text-ink-500 dark:text-white/70">
                {feature.description}
              </p>
              <div className="mt-8">
                {i === 0 ? <PhoneMockup /> : <ChatMockup />}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-6 grid grid-cols-1 items-center gap-8 rounded-card border border-ink-900/5 bg-brand-50/60 p-8 md:grid-cols-2 dark:border-white/10 dark:bg-white/5"
        >
          <div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">
              Personal Health Dashboard &amp; Appointment Booking System
            </h3>
            <p className="mt-2 max-w-sm text-sm text-ink-500 dark:text-white/70">
              Track vital signs, medications, and appointments in one easy, secure place.
            </p>
          </div>
          <DashboardMockup />
        </motion.article>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {smallFeatures.map((feature, i) => (
            <motion.article
              key={feature.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-card border border-ink-900/5 bg-brand-50/60 p-7 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              {i === 0 ? (
                <ShieldCheck className="h-8 w-8 text-brand-500" aria-hidden="true" />
              ) : (
                <Globe2 className="h-8 w-8 text-brand-500" aria-hidden="true" />
              )}
              <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-white/70">
                {feature.description}
              </p>
            </motion.article>
          ))}

          <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-card bg-gradient-to-br from-brand-500 to-brand-700 p-7 text-white"
          >
            <div>
              <h3 className="text-base font-bold">Explore our more amazing services</h3>
            </div>
            <Button
              variant="dark"
              className="mt-6 w-fit bg-white text-brand-700 hover:bg-brand-50"
            >
              Explore now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
