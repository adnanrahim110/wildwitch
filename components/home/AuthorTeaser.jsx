"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthorTeaser() {
  return (
    <section id="author-teaser" className="font-aria relative py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_90%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square w-full max-w-xs mx-auto md:mx-0 overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <Image
            src="/Images/author-photo.jpg"
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
          <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
            Michael J. Dooley grew up in Toronto with a love for imagination and
            stories. After studying creative writing and working in photography,
            he now writes fantasy that blends everyday life with magical wonder.
            His books invite readers of all ages to see the world with curiosity
            and courage.
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
