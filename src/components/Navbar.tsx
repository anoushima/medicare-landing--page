import { useState } from "react";
import { Menu, Stethoscope, X } from "lucide-react";
import { navLinks } from "../data/content";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-ink-950/80">
      <nav
        aria-label="Primary"
        className="container-page flex h-18 items-center justify-between py-4"
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold text-ink-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
            <Stethoscope className="h-4 w-4" aria-hidden="true" />
          </span>
          Medicare
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-700 md:flex dark:text-white/80">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="outline">Get Started</Button>
          <Button variant="dark">Contact Us</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-ink-900 dark:border-white/15 dark:text-white"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-page flex flex-col gap-4 border-t border-ink-900/5 pb-6 pt-4 md:hidden dark:border-white/5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-ink-700 dark:text-white/80">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Get Started
            </Button>
            <Button variant="dark" className="flex-1">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
