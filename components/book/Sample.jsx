// /components/book/Sample.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Sample() {
  return (
    <section id="sample" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_0%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-[-10%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            Sample Pages
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
            }}
          >
            Chapter One: Cedar Wind
          </h2>

          <div className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-8 backdrop-blur shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="text-[11px] uppercase tracking-wide text-white/60">
              Page 1
            </div>
            <div className="mt-2 space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              <p>
                Morning came soft over the pasture. Willow stood at the fence
                and listened. Wind moved through the cedar line, a hush like
                ocean breath, then the quiet thud of hooves far off. The day was
                making small promises.
              </p>
              <p>
                She closed her eyes and counted the beats. Two, then three, then
                a space where the ground felt different. The foal was wandering
                near the wash. Willow breathed once for steadiness and let the
                sound find her.
              </p>
              <p>
                When she opened her eyes, the light had shifted. The cedar’s
                shadow reached toward her boots, and somewhere in it she felt a
                tug, not a voice, more like a thread pulled from the edge of a
                sweater. Come look.
              </p>
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="mt-6 text-[11px] uppercase tracking-wide text-white/60">
              Page 2
            </div>
            <div className="mt-2 space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              <p>
                She walked the fence line until the earth changed underfoot. The
                wash held the night’s rain in shallow mirrors. Willow crouched
                and watched rings widen where a drop fell. The pattern was calm,
                then not calm at all.
              </p>
              <p>
                “Easy,” she said to the morning. The word went out the way
                breath leaves in winter, visible just for a second. She felt it
                settle into the grass and carry along the ground, gentle and
                sure.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Request Full Sample
              </Button>
              <Button href="#details" variant="outline" size="md">
                See Book Details
              </Button>
            </div>
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
                What to notice
              </div>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li>Clear, readable lines designed for all ages.</li>
                <li>Magic that rises from sound, light, and weather.</li>
                <li>Quiet choices that gather into courage.</li>
              </ul>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-4 text-xs text-white/65">
                This excerpt reflects tone and pacing. Final text may vary
                slightly.
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
      <div className="section-edge" />
    </section>
  );
}
