"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function VideoPlayer({ trailers }) {
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

  if (!trailers || trailers.length === 0) return null;

  return (
    <div className="p-[1px] rounded-3xl bg-gradient-to-br from-white/25 via-white/10 to-transparent w-full">
      <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <div className="aspect-video w-full relative">
          <video
            ref={videoRef}
            className="size-full object-cover bg-black"
            playsInline
            preload="none"
          >
            {trailers.map((trailer, idx) => (
              <source key={idx} src={trailer.src} type={trailer.type} />
            ))}
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 grid place-items-center group cursor-pointer"
              aria-label="Play trailer"
            >
              <span className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity" />

              <span className="relative z-10 inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/95 text-black shadow-2xl ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-105">
                <motion.span className="absolute inset-0 rounded-full bg-white/35 animate-ping" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-8 w-8 md:h-9 md:w-9 ml-1"
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
  );
}
