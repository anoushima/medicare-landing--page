import type { SVGProps } from "react";

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.58 14.24 3.58c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.69v8h3.31Z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.4 7.1c.01.18.01.36.01.53 0 5.4-4.1 11.6-11.6 11.6-2.3 0-4.45-.67-6.26-1.83.32.04.63.05.96.05 1.92 0 3.68-.65 5.08-1.75a4.1 4.1 0 0 1-3.82-2.84c.25.04.51.07.78.07.37 0 .74-.05 1.08-.14A4.09 4.09 0 0 1 3.3 8.8v-.05c.55.3 1.17.49 1.84.51a4.08 4.08 0 0 1-1.82-3.4c0-.75.2-1.44.55-2.04a11.62 11.62 0 0 0 8.43 4.28 4.6 4.6 0 0 1-.1-.94 4.09 4.09 0 0 1 7.07-2.8 8.04 8.04 0 0 0 2.59-.99 4.08 4.08 0 0 1-1.8 2.26 8.2 8.2 0 0 0 2.35-.64 8.79 8.79 0 0 1-2.05 2.13Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
