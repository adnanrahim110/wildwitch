"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Users } from "lucide-react";

export default function Blurb() {
  return (
    <section id="blurb" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_0%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            About the Book
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
            }}
          >
            The Summer the Forest Spoke Back
          </h2>
          <div className="mt-4 space-y-5 text-white/80 text-sm md:text-base leading-relaxed">
            <p>
              A sunlit paddock, a skittish heart, and a door in the woods no one
              else can see. Willow, the ranch-raised “Cowgirl,” and Cally, the
              fearless captain who secretly dreads horses, step onto the
              Mystical Path and into a land where time lags, pixies gossip in
              thistles, and a unicorn named Filla decides who is worthy. Why
              does the Wishing Tree weigh intentions before it grants them? What
              truth is tucked inside the old family book that points to a Wild
              Witch legacy? Guided by Sunflower the pixie, Lilly the fairy, and
              Sage the forest sprite, the girls learn that kindness has teeth,
              courage has a pulse, and friendship is the one spell that never
              misfires. By summer’s end, they must choose what to protect: the
              magic they found, or the world they left behind.
            </p>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
            <Button href="#inside" variant="primary" size="md">
              Inside the World
            </Button>
            <Button href="#sample" variant="outline" size="md">
              Read a Sample
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="lg:col-span-5"
        >
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
            <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-6 md:p-8">
              <div className="text-xs uppercase tracking-wide text-white/60">
                Promise to readers
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/15">
                    <Leaf size={12} />
                  </span>
                  Magic that feels like wind, water, cedar, and light.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/15">
                    <Users size={12} />
                  </span>
                  Loyal friends, calm wisdom, kindness that holds.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/15">
                    <Sparkles size={12} />
                  </span>
                  Clear, welcoming prose that grows into wonder.
                </li>
              </ul>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white">9+</div>
                  <div className="text-[10px] text-white/60">Age range</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white">
                    Fantasy
                  </div>
                  <div className="text-[10px] text-white/60">Genre</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white">Sample</div>
                  <div className="text-[10px] text-white/60">Included</div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
      <div className="section-edge" />
    </section>
  );
}
