"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, HeartHandshake, Sprout, ArrowRight, BookOpen, Compass } from "lucide-react";
import Link from "next/link";

export function VideoHero() {
  const [selectedIntent, setSelectedIntent] = useState<string>("explore");

  const intentOptions = [
    {
      id: "explore",
      emoji: "🌍",
      label: "Voluntary Projects",
      prompt: "Discover our community-driven voluntary climate & livelihood projects",
      link: "/pages/impart",
      btnText: "See Live Projects",
    },
    {
      id: "volunteer",
      emoji: "💡",
      label: "Volunteer / Join",
      prompt: "Be part of youth-led voluntary solutions in Ghana's rural regions",
      link: "/pages/contactus",
      btnText: "Join as Volunteer",
    },
    {
      id: "partner",
      emoji: "🤝",
      label: "Partner With Us",
      prompt: "Collaborate on sustainable development, voluntary drives, and equity",
      link: "/pages/contactus",
      btnText: "Start a Partnership",
    },
    {
      id: "story",
      emoji: "📖",
      label: "Our Story",
      prompt: "Learn how we co-create lasting change with local leaders and elders",
      link: "/pages/about",
      btnText: "Read Our Story",
    },
  ];

  const currentIntent = intentOptions.find((i) => i.id === selectedIntent) || intentOptions[0];

  return (
    <div className="relative min-h-[95vh] w-full overflow-hidden flex items-center justify-center bg-zinc-950 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* --- Background Video --- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-105"
      >
        <source src="/resolve/poor5.mp4" type="video/mp4" />
      </video>

      {/* --- Gradient Overlays with warm gold ambience --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-zinc-950/90 backdrop-blur-[1.5px]" />
      <div className="absolute inset-0 bg-radial from-yellow-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Floating Conversational Badges */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="hidden lg:flex absolute top-20 left-8 xl:left-16 z-20 items-center gap-3 bg-black/40 backdrop-blur-md border border-yellow-400/30 text-white px-5 py-3 rounded-2xl shadow-xl animate-float"
      >
        <div className="w-9 h-9 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold text-base">
          🐝
        </div>
        <div className="text-left leading-tight">
          <p className="text-xs font-bold text-yellow-300">200+ Hives Installed</p>
          <p className="text-[11px] text-zinc-300">Voluntary Api-Resilience in Eastern Region</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="hidden lg:flex absolute top-24 right-8 xl:right-16 z-20 items-center gap-3 bg-black/40 backdrop-blur-md border border-yellow-400/30 text-white px-5 py-3 rounded-2xl shadow-xl animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-9 h-9 rounded-full bg-amber-400 text-zinc-950 flex items-center justify-center font-bold text-base">
          🌱
        </div>
        <div className="text-left leading-tight">
          <p className="text-xs font-bold text-amber-300">Youth-Led Action</p>
          <p className="text-[11px] text-zinc-300">Grassroots Voluntary Drives</p>
        </div>
      </motion.div>

      {/* --- Main Hero Content (Wide Layout) --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-24 text-center">
        {/* Conversational Greeting Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Akwaaba! Welcome to Indigenous People Alliance Ghana</span>
        </motion.div>

        {/* Conversational Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
        >
          Empowering Communities. <br />
          <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-[#D1A054] bg-clip-text text-transparent">
          </span>
        </motion.h1>

        {/* Conversational Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-200/90 max-w-4xl mx-auto mb-12 leading-relaxed font-normal"
        >
          We partner directly with Ghana&apos;s indigenous and marginalized communities
          to foster <span className="text-yellow-300 font-semibold">climate resilience</span>,{" "}
          <span className="text-yellow-300 font-semibold">sustainable livelihoods</span>, and{" "}
          <span className="text-yellow-300 font-semibold">cultural preservation</span>.
        </motion.p>

        {/* Conversational Interactive Prompt Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-black/55 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-5 sm:p-8 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="flex items-center justify-between mb-4 text-xs sm:text-sm font-semibold text-yellow-300">
            <span className="flex items-center gap-2 text-sm">
              <Compass className="w-4 h-4" />
              What would you like to explore today?
            </span>
            <span className="text-stone-400 text-xs hidden sm:inline">
              Select an option below
            </span>
          </div>

          {/* Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
            {intentOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedIntent(opt.id)}
                className={`flex items-center justify-center gap-2 py-3 px-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedIntent === opt.id
                    ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-zinc-950 shadow-md scale-102 font-bold"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                <span>{opt.emoji}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Intent Action Box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-left">
            <div className="text-xs sm:text-sm lg:text-base text-stone-200">
              <p className="font-medium text-white">{currentIntent.prompt}</p>
            </div>

            <Link
              href={currentIntent.link}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-yellow-400/20 hover:scale-103 active:scale-97 transition-all shrink-0"
            >
              <span>{currentIntent.btnText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-yellow-300/80 text-[11px] font-medium"
      >
        <span>Scroll to explore our journey</span>
        <div className="w-5 h-8 border-2 border-yellow-400/50 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
