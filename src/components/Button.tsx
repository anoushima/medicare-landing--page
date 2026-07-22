import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-brand-500/30",
  outline:
    "border border-ink-900/15 text-ink-900 hover:border-brand-500 hover:text-brand-600 dark:border-white/20 dark:text-white dark:hover:border-brand-400",
  dark: "bg-ink-900 text-white hover:bg-ink-950 dark:bg-white dark:text-ink-950 dark:hover:bg-brand-100",
  ghost:
    "text-ink-900 hover:bg-ink-900/5 dark:text-white dark:hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-500 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
