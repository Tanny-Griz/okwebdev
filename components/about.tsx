import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <AnimatedSection
      id="about"
      className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]"
    >
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
          About
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 items-center md:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Experience
            </p>
            <p className="mt-3 text-2xl font-semibold">7+ years</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Websites, e-commerce, web apps & client projects
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Focus
            </p>
            <p className="mt-3 text-2xl font-semibold">Frontend & E-commerce</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              React, Next.js, Vue, Shopify, WordPress, UI/UX, SEO
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Workflow
            </p>
            <p className="mt-3 text-2xl font-semibold">Concept to production</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Plan, design, develop, deploy, maintain, improve
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Currently
            </p>
            <p className="mt-3 text-2xl font-semibold">
              Software Development A.A.S.
            </p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Expanding backend and full-stack engineering skills
            </p>
          </div>
        </div>

        <div>
          <p className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Helping businesses turn ideas into polished, user-friendly digital
            products.
          </p>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-black/65 md:text-lg">
            <p className="max-w-2xl text-lg leading-8 text-black/65">
              I’m a web developer with a strong frontend background and
              experience working across different types of web projects — from
              custom interfaces and single-page applications to WordPress,
              Shopify, and e-commerce websites. My work combines frontend
              development, CMS customization, SEO knowledge, and client-focused
              problem solving. I’m comfortable improving existing websites,
              fixing frontend issues, creating responsive layouts, and helping
              businesses turn unclear ideas into structured, usable digital
              products.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-black/65">
              I enjoy projects where clean design, performance, maintainability,
              and real user needs come together.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/Tanya_K_Resume_WebDev_05_2026.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #1bae70, #169c63)",
              }}
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
