// /components/book/Inside.jsx
"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Compass, Leaf, Sparkles, Users } from "lucide-react";

const getIcon = (iconName) => {
  switch (iconName) {
    case "Leaf":
      return <Leaf size={18} />;
    case "Users":
      return <Users size={18} />;
    case "Sparkles":
      return <Sparkles size={18} />;
    case "Compass":
      return <Compass size={18} />;
    default:
      return <Sparkles size={18} />;
  }
};

export default function Inside({ book }) {
  return (
    <section id="inside" className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_100%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className="mt-4 font-extrabold tracking-tight text-red-500"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.7rem,3vw,2.5rem)",
            }}
          >
            {book.inside.heading}
          </h2>
          <p className="mt-3 text-white/75 text-sm md:text-base">
            {book.inside.subheading}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {book.inside.reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-3xl text-center border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur flex flex-col items-center"
            >
              <div className="flex items-center gap-2 justify-center text-white">
                {getIcon(reason.icon)}
                <div className="font-semibold text-[15px]">
                  {reason.title}
                </div>
              </div>
              <p className="mt-2 text-xs text-white/70">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
