// /components/book/Inside.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Compass, Leaf, Sparkles, Users } from "lucide-react";

export default function Inside() {
  return (
    <section id="inside" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_100%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="mt-4 font-extrabold tracking-tight text-red-500"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.7rem,3vw,2.5rem)",
            }}
          >
            Three Reasons to Grab This Book Today
          </h2>
          <p className="mt-3 text-white/75 text-sm md:text-base">
            Power from the living world, friendships that hold, and choices that
            test courage.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl text-center border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 justify-center text-white">
              <Leaf size={18} />
              <div className="font-semibold text-[15px]">
                It’s Pure, Shareable Magic
              </div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              Imagination-rich wonder without grim darkness, perfect for young
              readers and the young at heart.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl text-center border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 justify-center text-white">
              <Users size={18} />
              <div className="font-semibold text-[15px]">
                It Champions & Kindness
              </div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              Helping kids see fear as a doorway and friendship as real power.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl text-center border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 justify-center text-white">
              <Compass size={18} />
              <div className="font-semibold text-[15px]">
                It Builds A World You’ll Want To Return To
              </div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              With unforgettable guides, Sunflower, Lilly, Sage, and Filla,
              beckoning you back down the Mystical Path.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
