"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f5f2]/80 px-6 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-black"
          onClick={() => setOpen(false)}
        >
          Tanya K.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-black/65 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:inline-block"
            style={{
              background: "linear-gradient(135deg, #1bae70, #169c63)",
            }}
          >
            Let’s Talk
          </a>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#1bae70]/20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="absolute left-0 top-full z-50 w-full md:hidden"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <motion.div
                className="mx-4 rounded-3xl border border-black/5 bg-[#f6f5f2] p-6 shadow-xl"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
              >
                <div className="flex flex-col gap-5 text-sm">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-black/75 transition hover:text-black"
                      variants={{
                        hidden: { opacity: 0, y: -8 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  <motion.a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex w-fit rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #1bae70, #169c63)",
                    }}
                    variants={{
                      hidden: { opacity: 0, y: -8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    Let’s Talk
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}