"use client";

import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-author", label: "About the Author" },
  { href: "/about-book", label: "About the Book" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const m = menuRef.current;
      const b = btnRef.current;
      if (!m || !b) return;
      if (m.contains(e.target) || b.contains(e.target)) return;
      setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`font-aria sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="container-max relative h-16 flex items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white/10 border border-white/15 group-hover:bg-white/15 transition" />
          <span className="text-lg tracking-wide">Wild Witch</span>
        </Link>

        <nav className="relative hidden md:flex items-center gap-2">
          <ul className="relative flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href} className="relative">
                  <Link
                    href={l.href}
                    className={`peer relative inline-flex items-center px-3 py-2 rounded-md text-sm/6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                      active ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="absolute inset-0 rounded-md opacity-0 peer-hover:opacity-100 transition bg-white/[0.02] ring-1 ring-inset ring-white/5" />
                    <span className="relative">{l.label}</span>
                  </Link>
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-white/30 transition-transform duration-200 peer-hover:scale-x-100" />
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[2px] bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                        mass: 0.4,
                      }}
                    />
                  )}
                </li>
              );
            })}
            <li className="ml-2">
              <Button href="/about-book" variant="primary" size="md">
                Start Reading
              </Button>
            </li>
          </ul>
        </nav>

        <button
          ref={btnRef}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 hover:bg-white/10 transition"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.18 }}
              className="md:hidden absolute right-0 top-full z-[60] w-[min(92vw,22rem)] mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/5 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_70%_at_100%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {
                    transition: {
                      staggerChildren: 0.02,
                      when: "afterChildren",
                    },
                  },
                  show: { transition: { staggerChildren: 0.045 } },
                }}
                className="relative p-2"
              >
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <motion.li
                      key={l.href}
                      variants={{
                        hidden: { opacity: 0, y: -6 },
                        show: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                          active
                            ? "text-white"
                            : "text-white/85 hover:text-white"
                        }`}
                      >
                        <span className="absolute inset-0 rounded-xl bg-white/[0.04] opacity-0 group-hover:opacity-100 transition" />
                        <span className="relative">{l.label}</span>
                        {active && (
                          <span className="relative ml-auto text-[10px] px-2 py-0.5 rounded-full bg-white/15 ring-1 ring-inset ring-white/10">
                            current
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
                <div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: -6 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Button
                    href="/about-book"
                    variant="primary"
                    size="md"
                    className="w-full rounded-xl"
                  >
                    Start Reading
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
