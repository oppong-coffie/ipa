"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Clock, BookOpen, ArrowRight, Tag, Compass } from "lucide-react";

interface Story {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  conversationalNote: string;
}

const stories: Story[] = [
  {
    id: "1",
    slug: "blog1",
    title: "Belém's Crucible: Indigenous Demands for the Amazon COP30",
    category: "Climate Justice",
    readTime: "6 min read",
    date: "August 2025",
    image: "/drive2/cop3.png",
    excerpt:
      "Global climate summits must center frontline indigenous voices. Here are the core demands being championed for Amazonian and African indigenous regions.",
    conversationalNote: "Reflecting on how international climate negotiations directly affect Ghanaian rural land tenure.",
  },
  {
    id: "2",
    slug: "blog2",
    title: "Impacts of Beekeeping in Indigenous Communities & Gender Equity",
    category: "Beekeeping & Livelihoods",
    readTime: "5 min read",
    date: "July 2025",
    image: "/drive2/bee11.jpeg",
    excerpt:
      "How gender roles shape access to apiary resources, and the transformative economic freedom earned by women beekeepers in Teacher Mante.",
    conversationalNote: "Women in rural beekeeping have seen household incomes increase by over 40%.",
  },
  {
    id: "3",
    slug: "blog3",
    title: "Methodologies for Uncovering & Documenting Indigenous Knowledge",
    category: "Indigenous Knowledge",
    readTime: "7 min read",
    date: "June 2025",
    image: "/drive2/m1.png",
    excerpt:
      "Grassroots research frameworks for recording oral environmental wisdom without extractive colonial biases.",
    conversationalNote: "How we work alongside community elders in Amanokrom to record indigenous climate indicators.",
  },
  {
    id: "4",
    slug: "blog4",
    title: "Promoting Indigenous Knowledge in Policy Decision-Making",
    category: "Policy & Advocacy",
    readTime: "4 min read",
    date: "May 2025",
    image: "/images/think.jpg",
    excerpt:
      "Bridging the gap between scientific climate models and generational wisdom practiced by Ghanaian smallholders.",
    conversationalNote: "Local chiefs and council elders must have direct seats on district development committees.",
  },
  {
    id: "5",
    slug: "blog5",
    title: "The Future of Integrating Indigenous Ecological Systems",
    category: "Indigenous Knowledge",
    readTime: "5 min read",
    date: "April 2025",
    image: "/drive2/f3.webp",
    excerpt:
      "Integrating native agroforestry techniques into Ghana's national biodiversity conservation strategy.",
    conversationalNote: "Why preserving native tree species alongside beehives guarantees long-term nectar flow.",
  },
  {
    id: "6",
    slug: "blog6",
    title: "Traditional Knowledge in Climate Justice: Lessons from Southern Ghana",
    category: "Climate Justice",
    readTime: "6 min read",
    date: "March 2025",
    image: "/drive2/intro1.png",
    excerpt:
      "Historical resilience strategies deployed by coastal and forest communities in Southern Ghana across decades of climate variation.",
    conversationalNote: "Lessons from community-led sacred grove conservation.",
  },
  {
    id: "7",
    slug: "blog7",
    title: "Disaster Risk Reduction and Community Response",
    category: "Climate Justice",
    readTime: "4 min read",
    date: "February 2025",
    image: "/drive/d(1).jpg",
    excerpt:
      "Community early-warning systems and grassroots flood preparedness across vulnerable agrarian basins.",
    conversationalNote: "How localized contingency plans save rural crop yields.",
  },
  {
    id: "8",
    slug: "blog8",
    title: "Advancing Climate Justice through Grassroots Youth Action",
    category: "Climate Justice",
    readTime: "5 min read",
    date: "January 2025",
    image: "/drive2/climate1.jpeg",
    excerpt:
      "Youth activists in Ghana are redefining what climate advocacy looks like on the ground through tech and voluntary field drives.",
    conversationalNote: "Youth are not just leaders of tomorrow—they are leading today's field actions.",
  },
  {
    id: "9",
    slug: "blog9",
    title: "Lobbying Strategies for Climate-Affected Smallholder Farmers",
    category: "Policy & Advocacy",
    readTime: "6 min read",
    date: "December 2024",
    image: "/images/lob.jpg",
    excerpt:
      "Empowering farmer associations with legislative tools and coalition-building tactics for agricultural subsidies.",
    conversationalNote: "Helping smallholders negotiate fair pricing and fertilizer access.",
  },
  {
    id: "10",
    slug: "blog10",
    title: "Beelieve Smart Project — Field Report from Teacher Mante",
    category: "Beekeeping & Livelihoods",
    readTime: "5 min read",
    date: "November 2024",
    image: "/drive2/beeleive1.jpeg",
    excerpt:
      "A deep dive into our inaugural beekeeping cohort, hive colonization rates, and youth training milestones.",
    conversationalNote: "Over 200 hives actively colonized and managed by youth fellows.",
  },
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Climate Justice",
    "Beekeeping & Livelihoods",
    "Indigenous Knowledge",
    "Policy & Advocacy",
  ];

  const filteredStories = stories.filter((s) => {
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.conversationalNote.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300">
      {/* Hero Header (Full Width) */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF5] dark:from-zinc-900 dark:to-zinc-950 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-300/20 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full text-center relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Field Dispatches &amp; Knowledge Hub</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4"
          >
            Insights &amp;{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Field Updates</span>
          </motion.h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Read first-hand accounts, research findings, and community perspectives directly from Ghana&apos;s
            indigenous and rural landscapes.
          </p>

          {/* Search & Filter */}
          <div className="mt-8 space-y-4 max-w-4xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by keyword or topic..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 text-stone-900 dark:text-zinc-100 placeholder-stone-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#D1A054] text-zinc-950 shadow-sm"
                      : "bg-white dark:bg-zinc-900 text-stone-600 dark:text-zinc-400 hover:bg-yellow-50 dark:hover:bg-zinc-800 border border-yellow-200/60 dark:border-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid (Full Width) */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-24">
        {filteredStories.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-3xl border border-yellow-200/60 dark:border-zinc-800 max-w-xl mx-auto">
            <p className="text-stone-600 dark:text-zinc-400 text-sm sm:text-base">
              No articles matched your search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs sm:text-sm font-bold text-[#8B7D6B] dark:text-yellow-400 hover:underline cursor-pointer"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <AnimatePresence>
              {filteredStories.map((story, idx) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="bg-white dark:bg-zinc-900 border border-yellow-200/60 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <Link href={`/pages/news/${story.slug}`} className="block">
                    {/* Image */}
                    <div className="relative h-60 w-full overflow-hidden bg-stone-100 dark:bg-zinc-800">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-yellow-400 text-zinc-950 px-3 py-1 rounded-lg shadow-sm">
                          {story.category}
                        </span>
                        <span className="text-[10px] font-bold bg-black/60 backdrop-blur-md text-stone-200 px-3 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                          <Clock className="w-3 h-3 text-yellow-300" />
                          {story.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-semibold text-stone-400">
                        {story.date}
                      </span>
                      <Link href={`/pages/news/${story.slug}`}>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2D241E] dark:text-white leading-snug group-hover:text-[#D1A054] dark:group-hover:text-yellow-400 transition-colors">
                          {story.title}
                        </h2>
                      </Link>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-300 leading-relaxed font-light line-clamp-3">
                        {story.excerpt}
                      </p>
                    </div>

                    {/* Conversational Insight Box */}
                    <div className="p-3.5 rounded-2xl bg-yellow-50 dark:bg-zinc-800/80 border border-yellow-200/50 dark:border-zinc-700/50 text-xs text-stone-700 dark:text-zinc-300 italic">
                      💬 &ldquo;{story.conversationalNote}&rdquo;
                    </div>

                    <div className="pt-3 border-t border-stone-100 dark:border-zinc-800">
                      <Link
                        href={`/pages/news/${story.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8B7D6B] dark:text-yellow-400 group-hover:text-yellow-600 transition-colors"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </div>
  );
}
