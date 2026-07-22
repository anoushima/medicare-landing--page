import { motion } from "framer-motion";
import Button from "./Button";

export default function ConsultCTA() {
  return (
    <section className="bg-brand-50/40 py-16 dark:bg-white/[0.03]">
      <div className="container-page text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <p className="text-xl font-semibold leading-relaxed text-ink-900 sm:text-2xl dark:text-white">
            Patients can consult with healthcare providers from the comfort of their homes,{" "}
            <span className="text-ink-500 dark:text-white/60">
              eliminating travel time and costs. Reduced waiting times.
            </span>
          </p>
          <Button variant="primary" className="mt-8">
            Make a Consultant
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
