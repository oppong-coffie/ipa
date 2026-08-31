"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Sprout,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

const impactSlides = [
  {
    image: "/images/ommunity2.jpg",
    title: "Amanokrom Mother Community Gathering",
    location: "Eastern Region",
    story: "Connecting traditional elders with youth activists during the Climate Beyond Borders Caravan.",
  },
  {
    image: "/drive2/bee11.jpeg",
    title: "Api-Resilience Hive Inspections",
    location: "Teacher Mante",
    story: "Empowering rural farmers with modern honey harvesting gear and high-yield bee hives.",
  },
  {
    image: "/images/chirf.jpg",
    title: "Traditional Leadership Dialogue",
    location: "Amoma, Bono East Region",
    story: "Securing ancestral blessings and partnership from Nana Djomo Ameyaw IV for Green Schools.",
  },
  {
    image: "/images/ommunity1.jpg",
    title: "Intergenerational Youth Workshop",
    location: "Greater Accra & Eastern Hub",
    story: "Teaching young indigenous leaders digital storytelling and policy advocacy skills.",
  },
  {
    image: "/drive/d(15).jpg",
    title: "Sustainable Agricultural Value Chains",
    location: "Akwapim Ridge",
    story: "Training women cooperative members in agro-ecology and organic honey packaging.",
  },
];

export function ImpactSection() {
  const [startCounting, setStartCounting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % impactSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("impact-section");
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setStartCounting(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Community Members Reached",
      context: "Directly engaged in workshops & drives",
      icon: <Users className="w-5 h-5 text-yellow-500" />,
    },
    {
      number: 200,
      suffix: "+",
      label: "Sustainable Hives Installed",
      context: "GARF Beekeeping project in Eastern Ghana",
      icon: <Sprout className="w-5 h-5 text-yellow-500" />,
    },
    {
      number: 12,
      suffix: "",
      label: "Active Voluntary Projects",
      context: "Climate, education & livelihoods",
      icon: <Building2 className="w-5 h-5 text-yellow-500" />,
    },
    {
      number: 3,
      suffix: "",
      label: "Ghanaian Regions Served",
      context: "Eastern, Bono East & Greater Accra",
      icon: <MapPin className="w-5 h-5 text-yellow-500" />,
    },
  ];

  const current = impactSlides[currentSlide];

  return (
    <section
      id="impact-section"
      className="w-full py-20 lg:py-28 bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      {/* Soft Ambient Lights */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-yellow-300/20 dark:bg-yellow-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#8B7D6B]/15 dark:bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Conversational Text & Stats */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Evidence-Based Progress</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight leading-tight mb-4">
                Real Numbers. Real Voices.{" "}
                <span className="text-[#D1A054] dark:text-yellow-400">
                  Lasting Impact.
                </span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed font-light">
                When you partner with IPA, your support transforms directly into hives on the ground,
                policy dialogues with chiefs, and tangible economic independence for indigenous youth and women through voluntary projects.
              </p>
            </div>

            {/* Conversational Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-yellow-200/60 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-2xl bg-yellow-50 dark:bg-zinc-800">
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#D1A054] dark:text-yellow-400">
                      {startCounting ? (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix}
                        />
                      ) : (
                        "0"
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#2D241E] dark:text-white leading-tight">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-zinc-400 mt-1">
                    {stat.context}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/pages/impart"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-yellow-400/20 transition-all group"
              >
                <span>Explore Voluntary Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/pages/contactus"
                className="text-xs sm:text-sm font-semibold text-[#8B7D6B] dark:text-yellow-400 hover:underline"
              >
                Support our next voluntary drive &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Conversational Visual Carousel with Story Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[500px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-yellow-200/60 dark:border-zinc-800 bg-stone-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Conversational Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-black/65 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-yellow-300 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      {current.location}
                    </span>
                    <span className="text-stone-300 text-[11px]">
                      Slide {currentSlide + 1} of {impactSlides.length}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-light">
                    &ldquo;{current.story}&rdquo;
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + impactSlides.length) % impactSlides.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 cursor-pointer"
                aria-label="Previous impact slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % impactSlides.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all z-20 cursor-pointer"
                aria-label="Next impact slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
