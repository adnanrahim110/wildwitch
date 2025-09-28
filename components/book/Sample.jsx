// /components/book/Sample.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-8 backdrop-blur shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <h2
              className="mt-4 font-extrabold tracking-tight"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(1.2rem,2.6vw,2.1rem)",
              }}
            >
              Main Character: Willow Anderson
            </h2>
            <div className="mt-2 space-y-4 text-white/85 text-sm md:text-base leading-relaxed">
              <p>
                Willow was born and raised on her parents' horse ranch in Texas.
                She learned how to ride a horse at a very young age, plus she
                always helped out on the ranch as she got older. Even as a very
                young girl, she was able to talk to animals, and they seemed to
                understand her. As she started going to high school that was
                within walking distance, small animals would follow her going
                and coming home, like cats, dogs, rabbits and squirrels. Willow
                is an honor student and has a close group of best friends that
                the other students in the school call the group of misfits. She
                is eighteen now and has just started her summer holidays from
                high school. During this summer break, Willow discovers she
                comes from a long bloodline of Wild Witches that have very
                unique magical abilities, but soon she is found to have very
                powerful magic compared to any other witches her age and even
                older ones. She goes on many adventures in some of the most
                magical lands one could ever imagine during this first summer,
                meeting incredible and magical mystical beings as the power
                inside her grows stronger and stronger as every day passes!
                Willow considers herself to be a country girl, just with magical
                powers she always uses for good.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="lg:col-span-5 h-full"
        >
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent h-full">
            <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-6 md:p-8 h-full overflow-hidden">
              <Image
                src="/images/main-char.jpg"
                alt="Main Character"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.aside>
      </div>
      <div className="section-edge" />
    </section>
  );
}
