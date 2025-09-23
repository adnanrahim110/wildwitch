"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="font-aria relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-10 bg-[#ff4444]" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-28">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            New Fantasy Series
            <span className="inline-block h-1 w-1 rounded-full bg-white/50" />
            For all ages
          </div>
          <h1
            className="mt-4 text-balance font-extrabold tracking-tight drop-shadow"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
              lineHeight: 1.05,
              color: "rgb(255 68 68)",
            }}
          >
            Wild Witch
          </h1>
          <div className="relative mt-2 inline-block">
            <p className="text-white/85 text-pretty text-base md:text-lg">
              Adventure Fantasy Tales by Michael J. Dooley
            </p>
            <span className="absolute left-0 -bottom-1 block h-[2px] w-full bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
          </div>
          <p className="mt-5 text-white/70 max-w-xl mx-auto lg:mx-0 text-sm md:text-base">
            A spirited journey through magic, nature, and courage. Meet Willow
            Anderson and step into a world where whispers of the wild reshape
            destiny.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button href="/about-book" variant="primary" size="md">
              Start Reading
            </Button>
            <Button href="#definition" variant="outline" size="md">
              What is a Wild Witch?
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              Nature & Magic
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-sky-400/80" />
              Allies & Trials
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400/80" />
              Heart & Adventure
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <Image
              src="/Images/Header01.jpg"
              alt="Wild Witch world artwork"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="absolute left-4 right-4 bottom-4 rounded-2xl backdrop-blur-md bg-black/35 border border-white/10 p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    Featured
                  </p>
                  <p className="mt-0.5 text-sm text-white/90">
                    Willow’s first summer of magic begins here
                  </p>
                </div>
                <Button href="/about-book" variant="primary" size="sm">
                  Explore the Book
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
