"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Definition() {
  return (
    <section id="definition" className="font-aria relative py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            Definition
            <span className="inline-block h-1 w-1 rounded-full bg-white/50" />
            Plain and simple
          </div>
          <h2
            className="mt-4 text-balance font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
              lineHeight: 1.1,
            }}
          >
            What is a Wild Witch?
          </h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            A wild witch is someone who feels at home in nature, pays attention
            to seasons and signs, and uses simple rituals to stay grounded and
            kind. It’s everyday magic: quiet focus, small intentions, and
            respect for living things.
          </p>
          <p className="mt-3 text-white/70 text-sm md:text-base">
            In these stories the idea grows bigger and brighter. The wild calls
            louder, the gifts are stronger, and choices matter. It’s still about
            balance and heart, just with more wonder.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <p className="text-sm text-white/80">Nature & Elements</p>
            <p className="mt-1 text-xs text-white/60">
              Listening to weather, trees, water, and light.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <p className="text-sm text-white/80">Intuition & Care</p>
            <p className="mt-1 text-xs text-white/60">
              Small rituals, gentle focus, healing intentions.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
            <p className="text-sm text-white/80">Choice & Courage</p>
            <p className="mt-1 text-xs text-white/60">
              Doing the right thing when it isn’t easy.
            </p>
          </div>
        </motion.div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button href="/about-book" variant="primary" size="md">
            Read About the Book
          </Button>
          <Button href="#author-teaser" variant="outline" size="md">
            Meet the Author
          </Button>
        </div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
