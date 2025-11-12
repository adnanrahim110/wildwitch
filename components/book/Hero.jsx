"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";

export default function BookHero() {
  return (
    <section className="font-aria relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_20%_-10%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-[#ff4444]/15 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-32 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} />
            Wild Witch
          </div>
          <h1
            className="mt-4 font-extrabold tracking-tight text-red-500"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.9rem,3.4vw,2.8rem)",
              lineHeight: 1.1,
            }}
          >
            When The Forest Whispers Your Name, Do You Answer?
          </h1>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-prose">
            Two girls, one country girl with a gift for animals, one cheerleader
            captain who feared large animals, follow a hidden trail into a realm
            of pixies, sprites, fairies and a unicorn who chooses his riders.
            Wishes grow on trees here, but every wish requires a true heart.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
            <Button
              href="https://amazon.com/dp/B0FZC88L2F"
              target="_blank"
              variant="primary"
              size="lg"
            >
              Buy Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <div className="relative mx-auto w-[min(92%,420px)]">
            <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-white/20 via-white/8 to-transparent blur-xl opacity-30" />
            <motion.div
              whileHover={{ rotate: -0.8, y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative rounded-[22px] border border-white/12 bg-white/[0.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/book-cover.png"
                  alt="Wild Witch cover"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
