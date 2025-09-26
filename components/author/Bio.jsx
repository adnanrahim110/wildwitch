// /components/author/Bio.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Bio() {
  return (
    <section className="font-aria relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[5%] h-[32rem] w-[32rem] rounded-full bg-[#ff4444]/12 blur-3xl" />
      <div className="bg-noise" />

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          <h2
            className="text-center font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
            }}
          >
            Author Biography
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="prose-invert max-w-none text-white/85 text-[0.95rem] md:text-base leading-relaxed">
                <p className="first-letter:text-[#ff4444] first-letter:font-extrabold first-letter:text-5xl first-letter:leading-none first-letter:mr-2 first-letter:float-left">
                  Michael J. Dooley grew up in Toronto with a steady pull toward
                  the natural world and the stories hidden in small moments.
                  Forest paths, city parks, and changing weather shaped how he
                  pays attention. That habit of looking closely is the root of
                  his writing voice.
                </p>
                <p>
                  After time in photography and formal study in creative
                  writing, Michael began building stories that invite readers to
                  see familiar places with new curiosity. The language stays
                  clear and welcoming. Wonder grows from simple details.
                  Characters move with purpose, guided by friendship, courage,
                  and care.
                </p>

                <div className="my-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur">
                  <div className="text-5xl leading-none text-white/15">“</div>
                  <p className="-mt-4 text-white/90 text-[0.98rem] md:text-lg">
                    I believe a quiet choice can change a life. The world does
                    not need noise to feel magical. It needs attention and
                    heart.
                  </p>
                </div>

                <p>
                  Michael writes with rhythm and restraint. Scenes open with
                  grounded detail, then widen into magic that feels natural. The
                  tone aims for calm confidence. Readers of many ages can enter
                  without strain and still feel depth in what follows.
                </p>
                <p>
                  Away from the desk he keeps slim notebooks, sketches branches
                  and light, and notes how people speak when they are honest.
                  Those fragments become maps. They guide each chapter toward
                  balance, where risk and kindness meet.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    <div className="text-white/60 text-xs uppercase tracking-wide">
                      Roots
                    </div>
                    <div className="mt-1 text-white/85">
                      Toronto, notebooks, long walks
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    <div className="text-white/60 text-xs uppercase tracking-wide">
                      Focus
                    </div>
                    <div className="mt-1 text-white/85">
                      Clarity of language, natural magic
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm">
                    <div className="text-white/60 text-xs uppercase tracking-wide">
                      Themes
                    </div>
                    <div className="mt-1 text-white/85">
                      Courage, friendship, balance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="lg:col-span-4"
            >
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
                <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                    <Image
                      src="/Images/author-portrait.jpg"
                      alt="Michael J. Dooley"
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 420px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-wide text-white/60">
                      At a glance
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      <li>Author of Wild Witch</li>
                      <li>Photography background</li>
                      <li>Writes for all ages</li>
                      <li>Nature as guide and muse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>

      <div className="section-edge" />
    </section>
  );
}
