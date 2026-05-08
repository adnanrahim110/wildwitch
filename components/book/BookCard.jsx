"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full flex flex-col rounded-[32px] bg-white/[0.02] border border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[#ff4444]/0 to-[#ff4444]/0 transition-colors duration-500 group-hover:from-[#ff4444]/5 group-hover:to-transparent pointer-events-none" />

        <div className="relative p-4 md:p-5 flex-1 flex flex-col">
          {/* Showcase Area for the Book */}
          <div className="relative mb-5 w-full flex justify-center items-center py-3">
            {/* Glowing pedestal behind the book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#ff4444]/0 blur-3xl rounded-full transition-colors duration-700 group-hover:bg-[#ff4444]/20 pointer-events-none" />
            
            <motion.div 
              style={{ perspective: 1200 }}
              className="relative w-[75%] max-w-[220px] z-10"
            >
              <motion.div
                whileHover={{ rotateY: -16, rotateX: 4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="relative w-full rounded-r-lg rounded-l-sm shadow-[15px_20px_40px_rgba(0,0,0,0.7)] border border-white/10 bg-black/80"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 
                  Using an img tag with w-full h-auto ensures the image determines 
                  its own height and perfectly preserves the original aspect ratio 
                  without any cropping or object-cover distortion.
                */}
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-auto block rounded-r-lg rounded-l-sm relative z-10"
                  loading="lazy"
                />
                 
                {/* Spine shadow/highlight for 3D realism */}
                <div className="absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r from-black/70 via-white/20 to-transparent rounded-l-sm pointer-events-none z-20 mix-blend-overlay" />
                <div className="absolute inset-y-0 left-0 w-[2px] bg-white/20 rounded-l-sm pointer-events-none z-20" />
                
                {/* Glass glare effect sweeping across the cover on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-r-lg rounded-l-sm z-20" />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col flex-1 text-center items-center">
            {book.blurb?.metadata?.genre && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 mb-5 transition-colors duration-300 group-hover:border-[#ff4444]/30 group-hover:text-[#ff4444]">
                <Sparkles size={10} />
                <span>{book.blurb.metadata.genre}</span>
              </div>
            )}
            
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-red-100 transition-colors">
              {book.title}
            </h3>
            
            <p className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-5 flex-1 px-1">
              {book.description}
            </p>
            
            <div className="mt-auto w-full max-w-[200px] inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition-all duration-300 group-hover:bg-[#ff4444] group-hover:border-[#ff4444] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,68,68,0.3)]">
              Explore Realm
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
