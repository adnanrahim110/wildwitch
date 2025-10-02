"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="font-aria relative">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 -z-[100]">
        <video
          src="/videos/hero-cover.mp4"
          muted
          autoPlay
          loop
          playsInline
          className="size-full object-fill opacity-50"
        />
      </div>
      <div className="bg-noise" />
      <div className="container-max relative z-[1] flex items-center justify-center py-28 lg:py-40">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.55 }}
          className="text-center w-fit relative flex flex-col items-center"
        >
          <img
            src="/images/hero-l.png"
            className="absolute -top-2 lg:-top-10 w-16 lg:w-52 left-5 lg:-left-20 xl:-left-32 2xl:-left-44 -z-[1]"
            alt=""
          />
          <img
            src="/images/hero-r.png"
            className="absolute -top-2 lg:-top-12 w-16 lg:w-52 right-5 lg:-right-20 xl:-right-32 2xl:-right-44 -z-[1]"
            alt=""
          />
          <h1 className="mt-4 text-balance font-bold inline-block tracking-tight leading-tight drop-shadow font-comic-sans! text-red-500 text-[clamp(2.6rem,10vw,10rem)]">
            Wild Witch
          </h1>
          <div className="relative mt-2 inline-block">
            <p className="text-white/85 text-pretty text-base md:text-lg">
              Adventure Fantasy Tales by Michael J. Dooley
            </p>
          </div>
          <p className="mt-5 text-white/70 mx-auto max-w-4xl text-sm md:text-base">
            A teenage country girl who can talk to animals. A cheerleader
            captain with a fear of big animals, especially horses. One hidden
            trail, and a magical realm where pixies gossip, fairies make food
            with magic, and a wishing tree weighs your heart. This summer brings
            friendship, adventure and magic.
          </p>
        </motion.div>
      </div>
      <div className="absolute h-40 inset-x-0 -bottom-20 bg-gradient-to-b from-transparent via-black to-transparent z-[1] pointer-events-none" />
    </section>
  );
}
