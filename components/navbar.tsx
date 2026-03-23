export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f5f2]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-black"
        >
          Tanya K.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-black/65 transition hover:text-black">
            About
          </a>
          <a href="#projects" className="text-sm text-black/65 transition hover:text-black">
            Projects
          </a>
          <a href="#stack" className="text-sm text-black/65 transition hover:text-black">
            Stack
          </a>
          <a href="#contact" className="text-sm text-black/65 transition hover:text-black">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}