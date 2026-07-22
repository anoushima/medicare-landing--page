import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
}
