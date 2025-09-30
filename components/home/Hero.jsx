"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="font-aria relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-10 bg-[#ff4444]" />
      <div className="bg-noise" />
      <div className="container-max relative flex items-center justify-center py-16 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55 }}
          className="text-center w-fit relative flex flex-col items-center"
        >
          <img
            src="/images/hero-l.jpg"
            className="absolute -top-10 -left-10 mix-blend-difference"
            alt=""
          />
          <img
            src="/images/hero-r.jpg"
            className="absolute -top-12 -right-12 mix-blend-difference"
            alt=""
          />
          <h1 className="mt-4 text-balance font-bold inline-block tracking-tight drop-shadow font-comic-sans! text-red-500 text-[clamp(2.6rem,5.5vw,6rem)]">
            Wild Witch
          </h1>
          <div className="relative mt-2 inline-block">
            <p className="text-white/85 text-pretty text-base md:text-lg">
              Adventure Fantasy Tales by Michael J. Dooley
            </p>
          </div>
          <p className="mt-5 text-white/70 mx-auto max-w-2xl text-sm md:text-base">
            A teenage country girl who can talk to animals. A cheerleader
            captain with a fear of big animals, especially horses. One hidden
            trail, and a magical realm where pixies gossip, fairies make food
            with magic, and a wishing tree weighs your heart. This summer brings
            friendship, adventure and magic.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="/about-book" variant="primary" size="md">
              About the Book
            </Button>
            <Button href="#definition" variant="outline" size="md">
              What is a Wild Witch?
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
