"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sprout, Briefcase, Users, Landmark, ArrowRight, Quote, Sparkles } from "lucide-react";

export function MissionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const missions = [
    {
      id: "climate",
      number: "01",
      icon: <Sprout className="w-5 h-5" />,
      title: "Climate Resilience",
      quote: "Bridging ancestral ecological knowledge with modern climate solutions.",
      description:
        "We help farming clusters adapt to unpredictable weather patterns by planting indigenous flora, setting up bee pollination corridors, and building local climate leadership.",
      image: "/climate.jpg",
      fieldStory: "Tested across Eastern Region and Teacher Mante farming communities.",
      highlight: "200+ Hives & Pollinator Sanctuaries",
    },
    {
      id: "livelihoods",
      number: "02",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Sustainable Livelihoods",
      quote: "Creating resilient income opportunities that honor indigenous tradition.",
      description:
        "Through the Ghana Api-Resilience Fund (GARF) and agricultural value chains, we train youth and women in commercial beekeeping, honey harvesting, and eco-enterprises.",
      image: "/drive/d(15).jpg",
      fieldStory: "Providing steady supplemental income to over 120 rural farming families.",
      highlight: "120+ Farmers Trained",
    },
    {
      id: "equity",
      number: "03",
      icon: <Users className="w-5 h-5" />,
      title: "Social Equity & Inclusion",
      quote: "Ensuring indigenous voices hold a rightful seat at policy tables.",
      description:
        "We advocate for indigenous rights, resource tenure, and youth participation in national climate decisions, amplifying grassroots voices where decisions are made.",
      image: "/images/missio.jpg",
      fieldStory: "Active policy dialogues with traditional authorities and regional councils.",
      highlight: "5 High-Level Policy Engagements",
    },
    {
      id: "culture",
      number: "04",
      icon: <Landmark className="w-5 h-5" />,
      title: "Cultural Preservation",
      quote: "Preserving sacred languages, folklore, and heritage for the next generation.",
      description:
        "Through our Indigenous Green Schools initiative, we document indigenous environmental wisdom and ensure the youth inherit both their cultural roots and tools for the future.",
      image: "/images/missi.jpg",
      fieldStory: "Engaging village elders and youth through intergenerational workshops.",
      highlight: "Mother Community Hub in Amanokrom",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % missions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, missions.length]);

  const currentMission = missions[activeTab];

  return (
    <section
      className="w-full py-20 lg:py-28 bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-yellow-200/30 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8B7D6B]/15 dark:bg-zinc-800/30 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Theory of Change</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            How We Create Lasting Change{" "}
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            We don&apos;t impose outside solutions. We sit with community elders, youth, and women
            to create voluntary initiatives grounded in four key pillars:
          </p>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {missions.map((mission, idx) => (
            <button
              key={mission.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm lg:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#D1A054] text-zinc-950 shadow-lg shadow-yellow-500/20 scale-102"
                  : "bg-white dark:bg-zinc-900 text-stone-600 dark:text-zinc-400 hover:bg-yellow-50 dark:hover:bg-zinc-800 border border-yellow-200/50 dark:border-zinc-800"
              }`}
            >
              <span>{mission.icon}</span>
              <span>{mission.title}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Feature Spotlight Card (Full Width) */}
        <div className="w-full bg-white dark:bg-zinc-900 border border-yellow-200/60 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMission.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={currentMission.image}
                  alt={currentMission.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-zinc-950 font-black px-3.5 py-1.5 rounded-xl text-xs shadow-md">
                  Pillar {currentMission.number}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/65 backdrop-blur-md text-white p-4 rounded-2xl text-xs border border-white/10">
                  <p className="font-bold text-yellow-300 text-sm">{currentMission.highlight}</p>
                  <p className="text-xs text-zinc-300 mt-0.5">{currentMission.fieldStory}</p>
                </div>
              </div>

              {/* Text & Dialogue side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-50 dark:bg-zinc-800 text-[#8B7D6B] dark:text-yellow-400 text-xs sm:text-sm font-semibold">
                  <span>Pillar Focus</span>
                  <span>•</span>
                  <span>{currentMission.title}</span>
                </div>

                <div className="relative pl-6 border-l-4 border-yellow-400">
                  <Quote className="w-6 h-6 text-yellow-500 absolute -top-2 -left-3.5 opacity-30" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2D241E] dark:text-white leading-snug">
                    &ldquo;{currentMission.quote}&rdquo;
                  </h3>
                </div>

                <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-300 leading-relaxed font-light">
                  {currentMission.description}
                </p>

                {/* Conversational Callout Bubble */}
                <div className="p-5 rounded-3xl bg-yellow-50/80 dark:bg-zinc-800/60 border border-yellow-200/80 dark:border-zinc-700/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold text-base shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B7D6B] dark:text-yellow-400">
                      Why This Matters in Ghana
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-stone-700 dark:text-zinc-300 mt-1 leading-relaxed">
                      Grassroots communities hold deep traditional wisdom. When backed by youth-led tools and funding, they solve environmental challenges from within.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/pages/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#8B7D6B] hover:bg-[#7A6B5A] dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-sm sm:text-base shadow-md transition-all group"
                  >
                    <span>Read Our Co-Creation Model</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/pages/impart"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B7D6B] dark:text-yellow-400 hover:underline"
                  >
                    <span>See voluntary projects under this pillar &rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
