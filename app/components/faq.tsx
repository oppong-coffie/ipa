"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  Plus,
  Minus,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Send,
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  badge?: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqs: FAQItem[] = [
    {
      category: "About Us",
      question: "What is Indigenous People Alliance Ghana (IPA-GH)?",
      answer:
        "IPA Ghana is a youth-led non-governmental organization dedicated to empowering indigenous and marginalized communities. We co-create solutions with local leaders focusing on climate resilience, sustainable livelihoods (like beekeeping), and cultural preservation.",
      badge: "Core Mission",
    },
    {
      category: "Voluntary Projects",
      question: "What is the Ghana Api-Resilience Fund (GARF)?",
      answer:
        "GARF is our flagship beekeeping and pollinator sanctuary initiative. We equip rural farmers and youth in the Eastern Region with modern bee hives, protective gear, and ecological training to generate sustainable income while protecting native biodiversity.",
      badge: "Flagship",
    },
    {
      category: "Volunteering",
      question: "How can I volunteer or contribute to your field drives?",
      answer:
        "We welcome students, youth activists, researchers, and professionals! You can participate in field tree planting, hive maintenance, community workshops, or media documentation. Fill out our contact form to join our volunteer roster.",
      badge: "Get Involved",
    },
    {
      category: "Locations",
      question: "Where are IPA's community projects located?",
      answer:
        "Our headquarters is in Greater Accra, with active field operations in the Eastern Region (Amanokrom mother hub, Teacher Mante) and Bono East Region (Amoma). We plan to expand to the Northern savannah belt in 2025/2026.",
      badge: "Field Hubs",
    },
    {
      category: "Partnerships",
      question: "How do you partner with traditional authorities and chiefs?",
      answer:
        "We strictly adhere to customary community entry protocols. Before starting any project, we sit down with local chiefs, queenmothers, and council elders to secure their blessing, understand community priorities, and ensure local ownership.",
      badge: "Co-Creation",
    },
    {
      category: "Transparency",
      question: "How are donations and grants utilized?",
      answer:
        "Every cedi and dollar is accounted for in our annual reports. Over 85% of program funds go directly to equipment, community training, and youth stipends. You can download our latest audited reports on this website.",
      badge: "Governance",
    },
  ];

  const categories = ["All", "About Us", "Voluntary Projects", "Volunteering", "Locations", "Partnerships"];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesQuery =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="w-full py-20 lg:py-28 bg-[#FAF6EE] dark:bg-zinc-900/60 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300/15 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B7D6B]/15 dark:bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Got Questions? Let&apos;s Talk</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Questions</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 leading-relaxed">
            Everything you need to know about our grassroots philosophy, voluntary drives, and how you can join us.
          </p>
        </div>

        {/* Conversational Search & Category Filter Bar */}
        <div className="mb-10 space-y-4 max-w-3xl mx-auto">
          <div className="relative w-full">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or question..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 text-stone-900 dark:text-zinc-100 placeholder-stone-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#D1A054] text-zinc-950 shadow-sm"
                    : "bg-white dark:bg-zinc-900 text-stone-600 dark:text-zinc-400 hover:bg-yellow-50 dark:hover:bg-zinc-800 border border-yellow-200/50 dark:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Conversational FAQ List (Full Width) */}
        <div className="space-y-4 max-w-4xl mx-auto w-full">
          {filteredFaqs.length === 0 ? (
            <div className="text-center p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-yellow-200/60 dark:border-zinc-800">
              <p className="text-stone-600 dark:text-zinc-400 text-sm">
                No matching answers found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <Link
                href="/pages/contactus"
                className="inline-block mt-3 text-xs font-bold text-[#8B7D6B] dark:text-yellow-400 hover:underline"
              >
                Ask us directly &rarr;
              </Link>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-zinc-900 border-yellow-400 shadow-lg"
                      : "bg-white/80 dark:bg-zinc-900/70 border-yellow-200/60 dark:border-zinc-800 hover:border-yellow-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-yellow-100 dark:bg-zinc-800 text-[#D1A054] dark:text-yellow-400 flex items-center justify-center font-bold text-sm shrink-0">
                        Q
                      </div>
                      <div>
                        {faq.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400 block mb-1">
                            {faq.badge}
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D241E] dark:text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-zinc-800 flex items-center justify-center text-stone-600 dark:text-zinc-300 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-stone-100 dark:border-zinc-800 flex items-start gap-4">
                          <div className="w-9 h-9 rounded-2xl bg-[#8B7D6B] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                            IPA
                          </div>
                          <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-300 leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Conversational Bottom Action Card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-yellow-300/60 dark:border-zinc-800 shadow-md text-center max-w-3xl mx-auto w-full">
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-[#2D241E] dark:text-white mb-2">
            Still have a question we didn&apos;t answer?
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-stone-600 dark:text-zinc-400 mb-6 font-light">
            Our communications and community team in Ghana is always happy to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://wa.me/233508469840"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Chat on WhatsApp</span>
              <span>💬</span>
            </Link>
            <Link
              href="/pages/contactus"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B7D6B] hover:bg-[#7A6B5A] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Send Us an Email</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
