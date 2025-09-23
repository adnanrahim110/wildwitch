"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { BookOpen, Compass, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";

export default function BookTeaser() {
  return (
    <section id="book-teaser" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-10%] top-[15%] h-[36rem] w-[36rem] rounded-full bg-[#ff4444]/15 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative mx-auto w-[min(92%,420px)]">
            <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-xl opacity-30" />
            <motion.div
              whileHover={{ rotate: -0.8, y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative rounded-[22px] border border-white/12 bg-white/[0.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] border border-white/10">
                <Image
                  src="/Images/BookCover.jpg"
                  alt="Wild Witch cover"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-white/85">
                  Wild Witch • Book One
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/80">
                  <Sparkles size={12} />
                  Fantasy
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} />
            About the Book
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
              lineHeight: 1.1,
            }}
          >
            Nature’s whisper, a gift awakened
          </h2>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-prose">
            Willow Anderson stumbles into a calling rooted in the living world.
            The path is gentle at first, then bright and brave. The language
            stays clear and welcoming while the wonder keeps growing.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-white/85 text-sm">
                <Leaf size={16} />
                Magic & Nature
              </div>
              <p className="mt-1 text-xs text-white/60">
                Power that feels like wind, water, cedar, and light.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-white/85 text-sm">
                <BookOpen size={16} />
                Allies & Adversaries
              </div>
              <p className="mt-1 text-xs text-white/60">
                Steady friends, real tests, patient wisdom.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-white/85 text-sm">
                <Compass size={16} />
                Journeys & Trials
              </div>
              <p className="mt-1 text-xs text-white/60">
                Choices that shape courage and heart.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
              <div className="text-lg font-semibold text-white">Age 9+</div>
              <div className="text-[10px] text-white/60">All ages welcome</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
              <div className="text-lg font-semibold text-white">Sample</div>
              <div className="text-[10px] text-white/60">Preview pages</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
              <div className="text-lg font-semibold text-white">Details</div>
              <div className="text-[10px] text-white/60">Formats & ISBN</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Button href="/about-book" variant="primary" size="lg">
              Read About the Book
            </Button>
            <Button href="/about-book#sample" variant="outline" size="lg">
              Read a Sample
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="mt-12 md:mt-16 flex justify-center">
        <div className="h-px w-[92%] max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="section-edge" />
    </section>
  );
}
