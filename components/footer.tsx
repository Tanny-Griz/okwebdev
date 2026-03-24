export function Footer() {
  return (
    <footer className="border-t border-black/5 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black">
            Tanya K.
          </p>
          <p className="mt-2 text-sm text-black/55">
            Web Developer | USA, Minnesota.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-black/55 sm:items-end">
          <a
            href="mailto:tanya@okwebdev.com"
            className="transition hover:text-black"
          >
            tanya@okwebdev.com
          </a>
          <p>© {new Date().getFullYear()} Tanya Kovalenko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}