"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { BookOpen, Feather, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[36rem] blur-3xl opacity-15 bg-[#ff4444]" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-white/0 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <div className="rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative lg:col-span-3 p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    <Sparkles size={14} />
                    Begin the journey
                  </div>
                  <h3
                    className="mt-4 text-balance font-extrabold tracking-tight"
                    style={{
                      fontFamily: "Arial, Helvetica, sans-serif",
                      fontSize: "clamp(1.7rem,2.8vw,2.4rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    Step into the world of Wild Witch
                  </h3>
                  <p className="mt-3 text-white/75 text-sm md:text-base max-w-prose">
                    Magic woven with nature, heart, and courage. Discover Willow
                    Anderson’s first summer of wonder and danger, told in clear,
                    inviting language for all ages.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 text-[11px] text-white/70">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                      <Feather size={12} /> Simple, vivid prose
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                      <BookOpen size={12} /> Sample pages included
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                      <Sparkles size={12} /> Nature, allies, trials
                    </span>
                  </div>
                  <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
                    <Button href="/about-book" variant="primary" size="lg">
                      Read About the Book
                    </Button>
                    <Button href="/contact" variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="relative lg:col-span-2 p-8 md:p-10">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      A glimpse inside
                    </div>
                    <p className="mt-2 text-sm text-white/85">
                      “The wind carried the cedar’s whisper, and Willow
                      listened. The world spoke in small ways first.”
                    </p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                        <div className="text-lg font-semibold text-white">
                          3
                        </div>
                        <div className="text-[10px] text-white/60">
                          World notes
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                        <div className="text-lg font-semibold text-white">
                          1
                        </div>
                        <div className="text-[10px] text-white/60">Sample</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
                        <div className="text-lg font-semibold text-white">
                          250
                        </div>
                        <div className="text-[10px] text-white/60">
                          Word blurb
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4 text-xs text-white/70">
                      Magic & Nature, Allies & Adversaries, Journeys & Trials.
                      Explore them on the book page.
                    </div>
                    <div className="pointer-events-none absolute -z-10 -right-8 -bottom-8 h-56 w-56 rounded-full bg-[#ff4444]/20 blur-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
