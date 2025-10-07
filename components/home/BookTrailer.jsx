"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BookTrailer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => setIsPlaying(false);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.setAttribute("controls", "");
      await v.play();
      setIsPlaying(true);
    } catch (e) {
      console.warn("Video play failed:", e);
    }
  };

  return (
    <section id="book-trailer" className="font-aria relative py-14 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-transparent">
            <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="aspect-video w-full relative">
                <video
                  ref={videoRef}
                  className="size-full object-cover"
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/book-trailer.mp4" type="video/mp4" />
                  <source src="/videos/book-tailer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    className="absolute inset-0 grid place-items-center group cursor-pointer"
                    aria-label="Play trailer"
                  >
                    <span className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity" />

                    <span className="relative z-10 inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/95 text-black shadow-2xl ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105">
                      <motion.span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-9 w-9 md:h-10 md:w-10 ml-1"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
