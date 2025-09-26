// /components/author/HeroBanner.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="font-aria relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute left-[-15%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[#ff4444]/15 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h1
            className="text-balance font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(2rem,4.5vw,3.2rem)",
              lineHeight: 1.06,
            }}
          >
            Get To Know Michael j. Dooley
          </h1>
          <p className="mt-3 text-white/75 text-sm md:text-base max-w-prose">
            Before writing Wild Witch, Michael honed an eye for wonder through
            years of photography, framing light, timing, and tiny details that
            most people miss. That same instinct fuels his stories: warm, clean
            adventures where courage, friendship, and a touch of wild magic feel
            absolutely real.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href="/about-book" variant="primary" size="md">
              About the Book
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/author.jpg"
              alt="Michael J. Dooley"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-black/10" />
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
