"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { books } from "@/constants/books";
import { Sparkles } from "lucide-react";

export default function BookTrailer() {
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
          className="max-w-4xl mx-auto"
        >
          <div className="mb-10 text-center">
            <h2
              className="text-balance font-extrabold tracking-tight text-red-500"
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              Watch The Trailers
            </h2>
            <p className="mt-2 text-white/70 text-sm md:text-base">
              Get a glimpse into the magical worlds of our collection.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Navigation, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="w-full pb-12 book-trailer-swiper"
          >
            {books.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="flex flex-col gap-5 px-10 md:px-14">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 mx-auto">
                    <Sparkles size={16} className="text-red-400" />
                    <span className="font-medium tracking-wide">{book.title}</span>
                  </div>
                  <VideoPlayer trailers={book.trailers} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
