"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";

// Dynamically import the MapComponent to avoid SSR error
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Impart2Page() {
  return (
    <div className="w-full bg-[#FAFAF7]">
      {/* 🌍 Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-20 lg:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-[#D1A054] drop-shadow-sm"
          >
            🌍 Our Global Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-[#6B5E4A] leading-relaxed"
          >
            Empowering communities with technology, knowledge, and innovation.
          </motion.p>
        </div>
        {/* Subtle gradient decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      {/* 🌍 Impact Summary Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center mb-14">
            🌟 Impact at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "📚 Education",
                color: "emerald",
                items: [
                  "🎓 25,000+ students trained",
                  "👩🏽‍🏫 300 teachers supported",
                  "💻 25 solar-powered labs",
                ],
              },
              {
                title: "🌱 Sustainability",
                color: "green",
                items: [
                  "🌳 50,000 trees planted",
                  "♻️ 2,000 households recycling",
                  "💧 10,000L clean water monthly",
                ],
              },
              {
                title: "💼 Business Empowerment",
                color: "indigo",
                items: [
                  "📈 500 SMEs onboarded",
                  "👩🏾‍💼 200 women-led startups funded",
                  "🚜 1,200 farmers connected",
                ],
              },
              {
                title: "🤝 Community Growth",
                color: "yellow",
                items: [
                  "✌️ 5,000+ youth in peacebuilding",
                  "💵 1,500 women supported",
                  "🔆 3,200 families with solar power",
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`rounded-2xl shadow-lg p-6 border-t-4 border-${card.color}-400 bg-${card.color}-50 hover:shadow-xl transition`}
              >
                <h3 className={`text-xl font-semibold text-${card.color}-900 mb-4`}>
                  {card.title}
                </h3>
                <ul className={`space-y-2 text-${card.color}-700`}>
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 Map Section */}
      <section className="bg-gradient-to-tr from-[#F5F0E5] to-[#EDEAE3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B4B4B] mb-10">
            🗺️ Explore Our Impact Across Regions
          </h2>
          <div className="h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
