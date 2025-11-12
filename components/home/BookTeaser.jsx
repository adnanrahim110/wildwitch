"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { BookOpen, Compass, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";

export default function BookTeaser() {
  return (
    <section id="book-teaser" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_10%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-10%] top-[15%] h-[36rem] w-[36rem] rounded-full bg-[#ff4444]/15 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative flex flex-col lg:flex-row gap-8 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="w-full lg:w-[50%]"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles size={14} />
            About the Book
          </div>
          <h2
            className="mt-4 font-extrabold tracking-tight text-red-500"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
              lineHeight: 1.1,
            }}
          >
            A Hidden Realm, A Fierce Friendship & A Wild Witch Legacy
          </h2>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-prose">
            Willow, the ranch-raised “Countrygirl,” and Cally, the school’s
            fearless cheerleader captain (who was secretly terrified of horses),
            stumble onto the Mystical Path and ride straight into Magic Land,
            where time moves differently and wonder feels close enough to touch.
          </p>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-prose">
            Guided by Sunflower and then Chestnut, two pixies, they first meet
            elves, then Lilly the fairy, Sage the Forest Sprite, and a unicorn
            named Filla. The girls discover a wishing tree, kindness from
            strangers, and the truth that real magic looks a lot like
            friendship, teamwork, and, most importantly, love. Back home, an old
            family book hints that Willow’s roots run deeper than anyone
            guessed, into the lineage of a Wild Witch. Stakes rise, hearts
            widen, and a single summer becomes the beginning of everything.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Button
              href="https://amazon.com/dp/B0FZC88L2F"
              target="_blank"
              variant="primary"
              size="lg"
            >
              Buy Now on Amazon
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.5 }}
          className="relative w-full lg:w-2/5"
        >
          <div className="relative mx-auto w-[min(92%,420px)]">
            <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-xl opacity-30" />
            <motion.div
              whileHover={{ rotate: -0.8, y: -3 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="relative rounded-[22px] border border-white/12 bg-white/[0.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur"
            >
              <div className="relative aspect-[17/25] w-full overflow-hidden rounded-[14px] border border-white/10">
                <Image
                  src="/images/front.jpg"
                  alt="Wild Witch cover"
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-white/85">Wild Witch • Book</div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/80">
                  <Sparkles size={12} />
                  Fantasy
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
