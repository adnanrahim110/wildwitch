// /components/author/Gallery.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/Images/author-1.jpg", alt: "Portrait" },
  { src: "/Images/author-2.jpg", alt: "Writing desk" },
  { src: "/Images/author-3.jpg", alt: "Nature walk" },
  { src: "/Images/author-4.jpg", alt: "Sketchbook" },
  { src: "/Images/author-5.jpg", alt: "Reading" },
  { src: "/Images/author-6.jpg", alt: "City and trees" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="font-aria relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_90%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2
            className="font-extrabold tracking-tight"
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
            }}
          >
            Gallery
          </h2>
          <p className="mt-2 text-white/70 text-sm md:text-base">
            Moments that spark the work.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] group"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width:768px) 50vw, (max-width:1024px) 25vw, 240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute left-3 bottom-3 text-xs text-white/85 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.alt}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 mx-auto h-px w-[92%] max-w-5xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="section-edge" />
    </section>
  );
}
