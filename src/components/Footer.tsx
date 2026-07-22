import { useState, type FormEvent } from "react";
import { Stethoscope } from "lucide-react";
import { footerLinkGroups } from "../data/content";
import Button from "./Button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <footer id="blog" className="bg-ink-950 pt-16 text-white/70">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <h2 className="max-w-md text-3xl font-bold text-white sm:text-4xl">
            Let&rsquo;s Connect with us
          </h2>
          <div className="flex gap-3">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500">
                <Stethoscope className="h-4 w-4" aria-hidden="true" />
              </span>
              Medicare
            </a>
            <p className="mt-4 max-w-xs text-sm">
              Subscribe our newsletter for updates
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex max-w-xs gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-brand-400"
              />
              <Button variant="primary" type="submit" className="shrink-0 px-4">
                Send
              </Button>
            </form>
            <p role="status" className="mt-2 text-xs text-brand-300">
              {submitted ? "Thanks — you're subscribed!" : ""}
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FacebookIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <TwitterIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
