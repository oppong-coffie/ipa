"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Handshake, ArrowRight } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "UN Global Compact", logo: "/partners/p (1).png", role: "Sustainability Alignment" },
    { name: "UNDP Ghana", logo: "/partners/p (2).png", role: "Climate Adaptation" },
    { name: "UNFCCC", logo: "/partners/p (3).png", role: "Grassroots Climate Action" },
    { name: "UNICEF", logo: "/partners/p (4).png", role: "Youth & Child Rights" },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-yellow-200/30 dark:bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#8B7D6B]/10 dark:bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5" />
            <span>Allied in Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            Who&apos;s Walking This Path{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">With Us</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            From international development agencies to local traditional councils and voluntary champions, our partners amplify
            the reach and durability of every project we launch.
          </p>
        </div>

        {/* Partner Logos Grid (Full Width) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm hover:shadow-xl border border-yellow-200/50 dark:border-zinc-800 hover:border-yellow-400 transition-all duration-300 min-h-[180px]"
            >
              <div className="relative w-full h-16 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={65}
                  className="object-contain max-h-14 w-auto filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-stone-500 dark:text-zinc-400 text-center leading-tight">
                {partner.role}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Conversational Partnership Invitation Card (Full Width) */}
        <div className="w-full max-w-5xl mx-auto bg-gradient-to-r from-[#8B7D6B] via-[#A78B60] to-[#7A6B5A] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
              Ready to collaborate on voluntary climate &amp; equity drives?
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-yellow-100 font-light">
              We co-design bespoke ESG drives, youth voluntary fellowships, and community grant partnerships.
            </p>
          </div>

          <Link
            href="/pages/contactus"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-extrabold text-sm sm:text-base shadow-md hover:scale-103 active:scale-97 transition-all shrink-0"
          >
            <span>Start a Dialogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
