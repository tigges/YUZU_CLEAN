"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#salon", label: "Salon" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-yuzu-cream-dark/80 bg-yuzu-cream/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-yuzu-cream/80 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-yuzu-charcoal focus:px-3 focus:py-2 focus:text-sm focus:text-yuzu-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-yuzu-charcoal sm:text-xl"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-yuzu-body transition-colors hover:text-yuzu-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            className="hidden rounded-full bg-yuzu-gold px-4 py-2 text-sm font-medium text-yuzu-charcoal transition-colors hover:bg-yuzu-gold-hover md:inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-yuzu-cream-dark text-yuzu-charcoal md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-yuzu-charcoal" />
              <span className="block h-0.5 w-5 bg-yuzu-charcoal" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-yuzu-cream-dark bg-yuzu-cream px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-yuzu-charcoal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              className="mt-2 inline-flex w-fit rounded-full bg-yuzu-gold px-4 py-2 text-sm font-medium text-yuzu-charcoal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
