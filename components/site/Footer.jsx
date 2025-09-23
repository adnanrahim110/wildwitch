// /components/site/Footer.jsx
"use client";

import {
  ArrowUpRight,
  BookText,
  Facebook,
  HeartHandshake,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const ISBN = "ISBN: 978-1-23456-789-0";
  return (
    <footer className="relative mt-16">
      <div className="absolute right-[-12%] top-[-10%] h-[28rem] w-[30rem] rounded-full bg-[#ff4444]/12 blur-3xl" />
      <div className="container-max relative">
        <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
          <div className="rounded-3xl bg-black/65 backdrop-blur-xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12">
              <div className="lg:col-span-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white/10 border border-white/15" />
                <div>
                  <div className="text-base text-white/90">Wild Witch</div>
                  <div className="text-xs text-white/65">
                    Adventure Fantasy Tales by Michael J. Dooley
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] text-white/80">
                    <BookText size={14} />
                    {ISBN}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      Navigate
                    </div>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>
                        <Link
                          href="/"
                          className="text-white/75 hover:text-white transition"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-author"
                          className="text-white/75 hover:text-white transition"
                        >
                          About the Author
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-book"
                          className="text-white/75 hover:text-white transition"
                        >
                          About the Book
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-white/75 hover:text-white transition"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      Social
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Link
                        href="https://facebook.com"
                        aria-label="Facebook"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition"
                      >
                        <Facebook
                          size={18}
                          className="text-white/85 group-hover:text-white"
                        />
                      </Link>
                      <Link
                        href="https://instagram.com"
                        aria-label="Instagram"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition"
                      >
                        <Instagram
                          size={18}
                          className="text-white/85 group-hover:text-white"
                        />
                      </Link>
                      <Link
                        href="https://twitter.com"
                        aria-label="Twitter"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition"
                      >
                        <Twitter
                          size={18}
                          className="text-white/85 group-hover:text-white"
                        />
                      </Link>
                      <Link
                        href="https://youtube.com"
                        aria-label="YouTube"
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] transition"
                      >
                        <Youtube
                          size={18}
                          className="text-white/85 group-hover:text-white"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="text-xs uppercase tracking-wide text-white/60">
                  Special Thanks
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/15" />
                    <div className="text-sm">
                      <div className="inline-flex items-center gap-2 text-white/85">
                        <HeartHandshake size={16} />
                        Saalfield Publishers
                      </div>
                      <p className="mt-1 text-xs text-white/65">
                        With appreciation for support and inspiration.
                      </p>
                      <Link
                        href="https://www.saalfieldpublishing.com"
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3 py-1.5 text-xs font-medium hover:opacity-90 transition"
                      >
                        Visit
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-white/55">
                  Logos and names are used with acknowledgment.
                </div>
              </div>
            </div>

            <div className="px-8 md:px-12 pb-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-5 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
                <p className="text-xs text-white/60">
                  © {year} Michael J. Dooley. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href="/about-book"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-xs font-medium hover:opacity-90 transition"
                  >
                    Start Reading
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
