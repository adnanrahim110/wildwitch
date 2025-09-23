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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} />
            Inside the world
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.7rem,3vw,2.5rem)",
            }}
          >
            Three threads that shape the story
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
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-white">
              <Leaf size={18} />
              <div className="font-semibold">Magic & Nature</div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              Wind, water, cedar, and light. Gifts that feel like weather, not
              tricks.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ul className="mt-3 space-y-2 text-xs text-white/65">
              <li>Listen first</li>
              <li>Act with care</li>
              <li>Keep balance</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-white">
              <Users size={18} />
              <div className="font-semibold">Allies & Adversaries</div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              Loyal friends, patient guides, and the few who push too far.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ul className="mt-3 space-y-2 text-xs text-white/65">
              <li>Trust earned slowly</li>
              <li>Wisdom over noise</li>
              <li>Kindness that holds</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
          >
            <div className="flex items-center gap-2 text-white">
              <Compass size={18} />
              <div className="font-semibold">Journeys & Trials</div>
            </div>
            <p className="mt-2 text-xs text-white/70">
              Quiet choices that grow into real tests and shape who Willow
              becomes.
            </p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ul className="mt-3 space-y-2 text-xs text-white/65">
              <li>Small risks first</li>
              <li>Bravery in steady steps</li>
              <li>Consequences that matter</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
