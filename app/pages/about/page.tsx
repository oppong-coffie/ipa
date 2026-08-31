"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Compass, Users, Eye, Target, BookOpen, Image as ImageIcon } from "lucide-react";
import Aboutus from "@/app/components/about/aboutus";
import MissionPage from "@/app/components/about/mission";
import VisionPage from "@/app/components/about/vision";
import ValuesPage from "@/app/components/about/values";
import TeamPage from "@/app/components/about/team";
import Story from "@/app/components/about/story";
import Galery from "@/app/components/about/gallery";

export default function AboutPage() {
  const sections = [
    { id: "story", label: "Our Story", icon: <BookOpen className="w-4 h-4" /> },
    { id: "mission", label: "Mission & Model", icon: <Target className="w-4 h-4" /> },
    { id: "vision", label: "Vision", icon: <Eye className="w-4 h-4" /> },
    { id: "values", label: "Values", icon: <HeartHandshake className="w-4 h-4" /> },
    { id: "team", label: "Meet the Team", icon: <Users className="w-4 h-4" /> },
    { id: "gallery", label: "Photo Gallery", icon: <ImageIcon className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300">
      {/* Hero Header (Full Width) */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF5] dark:from-zinc-900 dark:to-zinc-950 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-300/20 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full text-center relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grassroots Co-Creation</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4"
          >
            The Story Behind{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">IPA Ghana</span>
          </motion.h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            We are a youth-led movement founded on the principle that the people closest to the challenges
            possess the greatest wisdom to solve them. Discover how we work hand-in-hand with Ghana&apos;s indigenous communities.
          </p>

          {/* Quick Jump Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white dark:bg-zinc-900 text-stone-700 dark:text-zinc-300 border border-yellow-200/80 dark:border-zinc-800 hover:bg-yellow-100 dark:hover:bg-zinc-800 transition-all shadow-xs"
              >
                <span>{sec.icon}</span>
                <span>{sec.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Full-Width Sections */}
      <div id="story" className="w-full">
        <Story />
      </div>

      <div id="mission" className="w-full">
        <Aboutus />
        <MissionPage />
      </div>

      <div id="vision" className="w-full">
        <VisionPage />
      </div>

      <div id="values" className="w-full">
        <ValuesPage />
      </div>

      <div id="team" className="w-full">
        <TeamPage />
      </div>

      <div id="gallery" className="w-full">
        <Galery />
      </div>
    </div>
  );
}
