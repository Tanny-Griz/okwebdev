"use client";

import { Mail } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="scroll-mt-24 px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
          Contact
        </h2>

        <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-black md:text-5xl">
          Let’s work together
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
          Have an idea or a project in mind? Tell me about it.
          <br className="hidden sm:block" />
          Whether you need a website, online store, or portfolio — I’d love to
          help bring it to life.
        </p>

        <div className="mt-9 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/tanysha-kovalenko/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-lg shadow-[#1bae70]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#15975f] hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v12h-4zM8.5 8h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V20h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-4z" />
            </svg>
          </a>

          <a
            href="https://github.com/Tanny-Griz"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-lg shadow-[#1bae70]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#15975f] hover:shadow-xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.5 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>

          <a
            href="mailto:tanya@okwebdev.com"
            aria-label="Send email"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-lg shadow-[#1bae70]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#15975f] hover:shadow-xl"
          >
            <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>

      <div className="mt-14">
        <ContactForm />
      </div>
    </AnimatedSection>
  );
}
