// /components/contact/Hero.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="font-aria relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_20%_-10%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#ff4444]/15 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative py-32 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            Contact
          </div>
          <h1
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.9rem,3.4vw,2.8rem)",
              lineHeight: 1.1,
            }}
          >
            Get in touch
          </h1>
          <p className="mt-3 text-white/75 text-sm md:text-base">
            Questions, invitations, or press queries. Send a note and we’ll
            reply soon.
          </p>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
