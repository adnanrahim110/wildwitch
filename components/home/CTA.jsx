"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { BookOpen, Compass, Feather, Leaf, Sparkles } from "lucide-react";

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
              <div className="grid grid-cols-1 gap-0">
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
                    Three Reasons to Grab This Book Today
                  </h3>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.1fr] gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-white/85 text-sm">
                        <Leaf size={16} />
                        It’s Pure, Shareable Magic
                      </div>
                      <p className="mt-1 text-xs text-white/60">
                        Imagination-rich wonder without grim darkness, perfect
                        for young readers and the young at heart.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-white/85 text-sm">
                        <BookOpen size={16} />
                        It Champions & Kindness
                      </div>
                      <p className="mt-1 text-xs text-white/60">
                        Helping kids see fear as a doorway and friendship as
                        real power.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-white/85 text-sm">
                        <Compass size={16} />
                        It Builds A World You’ll Want To Return To
                      </div>
                      <p className="mt-1 text-xs text-white/60">
                        With unforgettable guides—Sunflower, Lilly, Sage, and
                        Filla, beckoning you back down the Mystical Path.{" "}
                      </p>
                    </div>
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
