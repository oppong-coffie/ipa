"use client";

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import { Sprout, Users, Building2, HeartHandshake } from "lucide-react";

// Dynamically import the MapComponent to avoid SSR error
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});
const metrics = [
  { icon: <Users className="w-6 h-6 text-teal-700" />, label: "Farmers Trained", value: 120 },
  { icon: <Building2 className="w-6 h-6 text-teal-700" />, label: "Policy Engagements", value: 5 },
  { icon: <HeartHandshake className="w-6 h-6 text-teal-700" />, label: "Advocacy Groups Formed", value: 3 },
  { icon: <HeartHandshake className="w-6 h-6 text-teal-700" />, label: "Women Empowered", value: 45 },
  { icon: <Sprout className="w-6 h-6 text-teal-700" />, label: "Hives Installed", value: 200 },
  { icon: <Users className="w-6 h-6 text-teal-700" />, label: "Workshops Held", value: 4 },
  { icon: <HeartHandshake className="w-6 h-6 text-teal-700" />, label: "Participants Reached", value: 300 },
  { icon: <HeartHandshake className="w-6 h-6 text-teal-700" />, label: "Women Trained", value: 60 },
];
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
      <section className="py-12 bg-white">
      <h1 className="text-3xl font-bold text-center text-neutral-900 mb-10">
        Real Impact in Numbers 📈
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-teal-50 p-4 rounded-lg shadow-sm border border-teal-100"
          >
            {m.icon}
            <p className="text-2xl font-bold text-teal-800 mt-2">{m.value}</p>
            <p className="text-sm text-neutral-700 text-center mt-1">{m.label}</p>
          </div>
        ))}
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
