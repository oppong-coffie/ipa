"use client";

import React from "react";
import { motion } from "framer-motion";

const MissionPage = () => {
  const missionPoints = [
    {
      icon: "🌱",
      title: "Sustainable Livelihoods",
      description:
        "Empowering marginalized and indigenous communities with climate-resilient livelihoods, sustainable income sources, and grassroots mobilization.",
    },
    {
      icon: "🤝",
      title: "Inclusive Collaboration",
      description:
        "Working with youth, women, and vulnerable populations to co-create solutions that address social, environmental, and economic challenges.",
    },
    {
      icon: "🌍",
      title: "Climate & Environmental Protection",
      description:
        "Promoting conservation of natural resources, climate-smart practices, and resilience to global challenges like climate change.",
    },
    {
      icon: "📚",
      title: "Education & Awareness",
      description:
        "Equipping communities with knowledge, tools, and advocacy skills to protect their rights, adapt to change, and preserve cultural heritage.",
    },
    {
      icon: "🚀",
      title: "Leadership & Advocacy",
      description:
        "Nurturing youth and community leaders to actively participate in sustainable development discussions and drive lasting change locally and globally.",
    },
    {
      icon: "🎨",
      title: "Cultural Preservation",
      description:
        "Protecting and promoting indigenous traditions, languages, and arts to ensure heritage is passed on to future generations.",
    },
  ];

  return (
    <div className="bg-[#FFFDF5] min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-20 text-center relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#D1A054] mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission 🚀
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[#8B7D6B] max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          IPA-GH’s mission is to foster inclusive and sustainable development by
          empowering marginalized communities through grassroots mobilization.
          We promote social justice and resilience so that diverse populations can
          actively address global challenges like climate change while protecting
          their unique rights and cultural heritage. Youth and vulnerable voices
          are at the center of sustainable development discussions.
        </motion.p>
      </section>

      {/* Mission Points */}
      <section className="py-16 lg:py-4 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8B7D6B] mb-12 text-center drop-shadow-sm">
          Key Areas of Our Mission 🌟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionPoints.map((point) => (
            <motion.div
              key={point.title}
              className="bg-white rounded-3xl shadow-lg p-6 border border-yellow-100 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-2xl">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-[#8B7D6B] mb-2">
                {point.title}
              </h3>
              <p className="text-[#5B3A1A] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
