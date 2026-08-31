"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Quote, MessageSquare } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Lord Offei-Darko",
      position: "Founder",
      image: "/images/team7.png",
      quote: "True grassroots transformation begins when we listen before we act.",
      focus: "Strategy & Community Co-Creation",
    },
    {
      name: "David D. Tawiah",
      position: "Co-Founder & Project Lead",
      image: "/images/team21.jpg",
      quote: "Youth-led innovation is the bridge between traditional wisdom and sustainable growth.",
      focus: "Field Execution & Api-Resilience",
    },
    {
      name: "Gabriel O. Akyaw",
      position: "Member - Research",
      image: "/images/team31.jpg",
      quote: "Rigorous data backed by indigenous insight yields real community impact.",
      focus: "Ecological Studies & Metrics",
    },
    {
      name: "Hilda Darko",
      position: "Member - Communications",
      image: "/images/team6.png",
      quote: "Amplifying the stories of women and youth gives power to their advocacy.",
      focus: "Public Relations & Stories",
    },
    {
      name: "Ekow Freeman",
      position: "Lead - Media",
      image: "/images/team81.jpg",
      quote: "Capturing the authentic spirit and resilience of our indigenous regions.",
      focus: "Visual Storytelling & Documentaries",
    },
    {
      name: "Jacqueline Okine",
      position: "Lead - Knowledge & Impact",
      image: "/resolve/jack.jpg",
      quote: "Every hive installed and every child mentored must generate lasting knowledge.",
      focus: "Impact Assessment & Gender Inclusion",
    },
    {
      name: "Emmanuel Oppong Oppong",
      position: "Lead - Information Technology",
      image: "/images/me2.png",
      quote: "Deploying tech that connects remote communities with global opportunities.",
      focus: "Digital Infrastructure & Systems",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAF6EE] dark:bg-zinc-900/60 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-300/20 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B7D6B]/15 dark:bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>People Behind the Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            Meet the Voices Leading the{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Movement</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            Our multidisciplinary team of grassroots researchers, technologists, and community advocates
            works side-by-side with Ghana&apos;s indigenous leaders and volunteer networks.
          </p>
        </div>

        {/* Team Grid (Full Width, up to 4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white dark:bg-zinc-900 border border-yellow-200/50 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-76 sm:h-80 w-full overflow-hidden bg-stone-100 dark:bg-zinc-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />

                {/* Badge on Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-300 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                    {member.position}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Conversational Quote Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="relative pl-3 border-l-2 border-yellow-400">
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-zinc-300 italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-stone-500 dark:text-zinc-400 font-medium">
                    {member.focus}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversational Join/Explore Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-10 sm:py-5 rounded-3xl bg-white dark:bg-zinc-900 border border-yellow-300/50 dark:border-zinc-800 shadow-lg">
            <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-base font-semibold text-stone-700 dark:text-zinc-300">
              <span className="text-xl">🤝</span>
              <span>Want to work with our passionate team on voluntary field drives?</span>
            </div>

            <Link
              href="/pages/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7D6B] hover:bg-[#7A6B5A] text-white text-xs sm:text-sm font-bold shadow-md transition-all group"
            >
              <span>Explore Full Team &amp; Story</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
