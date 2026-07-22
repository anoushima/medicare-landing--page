import { motion } from "framer-motion";
import Button from "./Button";

export default function BannerCTA() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="container-page relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 px-8 py-16 text-center text-white sm:px-16"
      >
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-black/10 blur-3xl"
        />

        <h2 className="relative mx-auto max-w-xl text-2xl font-bold leading-snug sm:text-3xl">
          Bring your customer services the next level of excellence.
        </h2>
        <Button
          variant="dark"
          className="relative mt-8 bg-white text-brand-700 hover:bg-brand-50"
        >
          Make a Consultant
        </Button>
      </motion.div>
    </section>
  );
}
