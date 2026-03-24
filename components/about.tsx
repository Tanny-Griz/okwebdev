export function About() {
  return (
    <section id="about" className="px-6 py-20 scroll-mt-24 bg-[#f7f7f5]">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-black/40">
          About
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 items-center md:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Experience
            </p>
            <p className="mt-3 text-2xl font-semibold">7+ years</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Web development & digital projects
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Focus
            </p>
            <p className="mt-3 text-2xl font-semibold">Frontend & E-commerce</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              React, Vue, WordPress, responsive UI
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Workflow
            </p>
            <p className="mt-3 text-2xl font-semibold">Concept to production</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Build, deploy, maintain, improve
            </p>
          </div>

          <div className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.14em] text-black/45">
              Currently
            </p>
            <p className="mt-3 text-2xl font-semibold">Software Development A.A.S.</p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              Expanding toward full-stack engineering
            </p>
          </div>
        </div>

        <div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Building polished, business-focused websites with strong frontend execution.
          </h2>

          <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-black/65 md:text-lg">
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              I build modern, responsive websites that balance clean design, performance,
              and real business needs. My work focuses on creating interfaces that feel
              intuitive, polished, and effective in practice.
            </p>

            <p className="max-w-2xl text-lg leading-8 text-black/65">
              I enjoy working across different types of projects — from business websites
              to e-commerce — turning ideas into structured, user-friendly digital
              products.
            </p>

            <a
              href="/Tanya_K_Resume_web_dev_01_2026.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #1bae70, #169c63)"
              }}
            >
              Download Resume

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}