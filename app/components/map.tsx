"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, Clock, Sparkles } from "lucide-react";

export default function MapLocation() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAF6EE] dark:bg-zinc-900/60 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden border-t border-yellow-200/60 dark:border-zinc-800 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Background Soft Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-300/15 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Headquarters &amp; Field Hubs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            Visit Our {" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Headquarters</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            Our doors are always open to partners, volunteers, researchers, and community champions.
          </p>
        </div>

        {/* Map Container Card (Full Width) */}
        <div className="w-full h-[480px] sm:h-[560px] lg:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-yellow-300/60 dark:border-zinc-800 relative bg-stone-900 group">
          <Image
            src="/images/map3.png"
            alt="IPA Ghana Office Location Map"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Floating Location Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-lg z-10">
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-yellow-300/50 dark:border-zinc-700 shadow-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B7D6B] dark:text-yellow-400">
                <Sparkles className="w-4 h-4" />
                <span>IPA Ghana HQ • Accra</span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-stone-900 dark:text-white leading-tight">
                Indigenous People Alliance Ghana
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400 shrink-0" />
                <span>Mon – Fri: 8:30 AM – 5:30 PM (GMT)</span>
              </p>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/pages/contactus"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-zinc-950 font-extrabold text-xs sm:text-sm shadow-md hover:scale-102 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </Link>

                <Link
                  href="https://wa.me/233508469840"
                  target="_blank"
                  className="text-xs sm:text-sm font-bold text-[#8B7D6B] dark:text-yellow-400 hover:underline"
                >
                  Message Ahead 🟢
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
