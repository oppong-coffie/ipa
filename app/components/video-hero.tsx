"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, HeartHandshake } from "lucide-react";

export function VideoHero() {
  const stats = [
    { value: "200+", label: "Hives Installed" },
    { value: "120+", label: "Farmers Trained" },
    { value: "45+", label: "Women Empowered" },
    { value: "100%", label: "Community Driven" },
  ];

  return (
    <div className="relative min-h-[83vh] lg:min-h-[88vh] w-full overflow-hidden flex flex-col justify-between bg-zinc-950 text-white">
      {/* --- Background Image (Crystal Clear, No Blur) --- */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="IPA Ghana team and local farmers with beehives in the Eastern Region"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Soft, minimal gradient overlay so the photo stays completely clear and vibrant */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/75 pointer-events-none" /> */}
      </div>

      {/* --- Main Hero Content --- */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center pt-2">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-300 text-xs sm:text-sm font-semibold mb-2 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Akwaaba • Indigenous People Alliance Ghana</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-pulse sm:w-auto"
        >
          <Link
            href="/pages/impart"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-extrabold text-sm sm:text-base shadow-xl hover:shadow-yellow-400/30 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span className="text-3xl lg:text-5xl " >Empowering Communities</span>
          </Link>
        </motion.div>
      </div>

      {/* --- Clean Stats Strip (No blur overlay) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 w-full border-t border-white/20 bg-black/60"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-yellow-400 tracking-tight drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-stone-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
