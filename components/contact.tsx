import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 text-center">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-black/40">
          Contact
        </p>
      </div>
      <div className="mx-auto mb-12 max-w-7xl">
        <h2 className="mt-4 text-4xl font-semibold tracking-tight">
          Let’s work together
        </h2>

        <p className="mt-6 text-lg leading-8 text-black/65">
          Open to new opportunities, freelance projects, and collaborations.
          Feel free to reach out — I’d love to connect.
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/tanysha-kovalenko/"
          target="_blank"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v12h-4zM8.5 8h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V20h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-4z" />
          </svg>
        </a>

        <a
          href="https://github.com/Tanny-Griz"
          target="_blank"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.5 3.14-1.18 3.14-1.18.63 1.59.24 2.77.12 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18 0 1.58-.01 2.85-.01 3.24 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>

        <a
          href="mailto:tanya@okwebdev.com"
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-[#1bae70] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </section>
  );
}
