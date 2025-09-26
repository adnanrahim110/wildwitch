"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthorTeaser() {
  return (
    <section id="author-teaser" className="font-aria relative py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_90%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="mx-auto w-full max-w-5xl relative grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square w-full max-w-xs mx-auto md:mx-0 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <Image
            src="/images/author.jpg"
            alt="Michael J. Dooley"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            About the Author
          </h2>
          <div className="relative mt-2 inline-block">
            <p className="text-white/85 text-pretty text-base md:text-lg">
              Michael J Dooley — Capturing Magic In Every Frame And Page
            </p>
            <span className="absolute left-0 -bottom-1 block h-[2px] w-full bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
          </div>
          <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
            Born and raised mostly in Toronto, Canada, Michael J Dooley
            graduated from high school, then took courses at Humber College in
            computer sciences, followed by attending Ryerson Polytechnic, where
            he learned photography and digital arts. He spent twelve years as a
            professional photographer in Peterborough, Ontario, then moved to
            Orangeville, where he retired and now spends his time writing
            adventure fantasy stories that were intended for children and teens,
            but he found people of all ages all over the world were enjoying his
            magical tales of fantasy and adventures. His inspirations to tell
            these tales all come from his life experiences as he grew up, plus
            his imagination and desire to create worlds that he wished were real
            but only possible in his fictional novels.
          </p>
          <div className="mt-6">
            <Button href="/about-author" variant="primary" size="md">
              Read Full Bio
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
