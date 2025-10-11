"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Definition() {
  return (
    <section id="definition" className="font-aria relative py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="">
            <h2
              className="text-balance font-extrabold tracking-tight text-red-500"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                lineHeight: 1.1,
              }}
            >
              What is a Wild Witch?
            </h2>
            <p className="mt-2 text-white/70 text-sm md:text-base">
              A wild witch is a modern-day spiritual practitioner who finds
              magic in nature, practicing an intuitive, free-spirited path
              connected to the earth's cycles and the four elements, earth,
              water, air and fire, plus all living things outside of traditional
              witch coven structures. They embrace a deep respect for nature,
              acting as a bridge between Earth and the cosmos through rituals,
              spells and a life of gratitude and harmony with the environment
              created by natural white magic that is everywhere. Their
              spirituality is rooted in observing and learning from the natural
              world, including the elements, plants, animals and the lunar
              cycle. Wild witchcraft is a personal, often solitary path that
              emphasizes inherent magical abilities and a free-spirited
              expression of spirituality.
            </p>
            <p className="mt-3 text-white text-sm md:text-base font-semibold text-center">
              However my fictional version of a Wild Witch may be very similar
              but is much more magical!
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Button href="/about-book" variant="primary" size="md">
                Read About the Book
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative aspect-[425/214] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero-sec.jpg"
                alt="Wild Witch world artwork"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mx-auto mt-4 grid max-w-5xl gap-2 grid-cols-3"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
                <p className="text-xs lg:text-sm text-white/80">Premise</p>
                <p className="mt-1 text-[10px] lg:text-xs text-white/60">
                  Home to pixies & elves
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
                <p className="text-xs lg:text-sm text-white/80">Magic</p>
                <p className="mt-1 text-[10px] lg:text-xs text-white/60">
                  A bright, adventurous fantasy
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
                <p className="text-xs lg:text-sm text-white/80">Who it’s for</p>
                <p className="mt-1 text-[10px] lg:text-xs text-white/60">
                  Magic & adventure lover
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
