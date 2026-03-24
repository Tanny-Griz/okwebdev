export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 border-b border-black/5 bg-[#f6f5f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-black"
        >
          Tanya K.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-black/65 transition hover:text-black"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Projects
          </a>
          <a
            href="#stack"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Stack
          </a>
          <a
            href="#contact"
            className="text-sm text-black/65 transition hover:text-black"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          style={{
            background: "linear-gradient(135deg, #1bae70, #169c63)",
          }}
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}
