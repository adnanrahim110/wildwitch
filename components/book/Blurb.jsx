"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Users, Compass } from "lucide-react";

const getIcon = (iconName) => {
  switch (iconName) {
    case "Leaf":
      return <Leaf size={12} />;
    case "Users":
      return <Users size={12} />;
    case "Sparkles":
      return <Sparkles size={12} />;
    case "Compass":
      return <Compass size={12} />;
    default:
      return <Sparkles size={12} />;
  }
};

export default function Blurb({ book }) {
  return (
    <section id="blurb" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_0%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <h2
            className="mt-4 font-extrabold tracking-tight text-red-500"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.6rem,3vw,2.4rem)",
            }}
          >
            {book.blurb.heading}
          </h2>
          <div className="mt-4 space-y-5 text-white/80 text-sm md:text-base leading-relaxed">
            <p>{book.blurb.paragraph}</p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="lg:col-span-5"
        >
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
            <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-6 md:p-8">
              <div className="text-xs uppercase tracking-wide text-white/60">
                Promise to readers
              </div>
              <ul className="space-y-3 text-sm text-white/85">
                {book.blurb.promises.map((promise, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15">
                      {getIcon(promise.icon)}
                    </span>
                    {promise.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white">{book.blurb.metadata.ageRange}</div>
                  <div className="text-[10px] text-white/60">Age range</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white truncate px-1">
                    {book.blurb.metadata.genre}
                  </div>
                  <div className="text-[10px] text-white/60">Genre</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="text-lg font-semibold text-white truncate px-1">{book.blurb.metadata.theme}</div>
                  <div className="text-[10px] text-white/60">Theme</div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
      <div className="section-edge" />
    </section>
  );
}
