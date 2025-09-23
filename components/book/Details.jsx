// /components/book/Details.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Details() {
  const info = [
    { k: "Title", v: "Wild Witch" },
    { k: "Author", v: "Michael J. Dooley" },
    { k: "Publisher", v: "Saalfield Publishers" },
    { k: "ISBN", v: "978-1-23456-789-0" },
    { k: "Genre", v: "Fantasy" },
    { k: "Language", v: "English" },
    { k: "Age Range", v: "9+ / All ages welcome" },
    { k: "Formats", v: "Paperback, eBook" },
    { k: "Page Count", v: "Approx. 280" },
    { k: "Trim Size", v: "5.5 x 8.5 in" },
    { k: "Publication", v: "TBA" },
  ];

  return (
    <section id="details" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_100%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            Book Details
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.7rem,3vw,2.5rem)",
            }}
          >
            Specifications and notes
          </h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Practical information at a glance. For press or rights inquiries,
            reach out anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mx-auto mt-8 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-8 backdrop-blur"
        >
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {info.map((row) => (
              <div
                key={row.k}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <dt className="text-[11px] uppercase tracking-wide text-white/60">
                  {row.k}
                </dt>
                <dd className="mt-1 text-sm text-white/85">{row.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Contact for Rights
            </Button>
            <Button href="/about-author" variant="outline" size="md">
              About the Author
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
