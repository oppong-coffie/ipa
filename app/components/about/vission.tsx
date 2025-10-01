"use client";
import { motion } from "framer-motion";
import React from "react";

const visionPoints = [
  {
    icon: "🌱",
    title: "Sustainable Growth",
    description:
      "Building thriving communities through resilient and eco-friendly practices.",
  },
  {
    icon: "🤝",
    title: "Inclusive Voices",
    description:
      "Empowering youth, women, and marginalized groups in key decisions.",
  },
  {
    icon: "🌍",
    title: "Global Action",
    description:
      "Tackling climate change and global challenges while honoring traditions.",
  },
  {
    icon: "📚",
    title: "Heritage & Knowledge",
    description:
      "Protecting indigenous culture while embracing innovation for progress.",
  },
  {
    icon: "💡",
    title: "Innovative Solutions",
    description:
      "Creating impactful ideas that respect tradition and drive resilience.",
  },
  {
    icon: "🌟",
    title: "Youth Leadership",
    description:
      "Preparing the next generation to lead community-driven change.",
  },
];

  

export default function VisionPage() {
  return (
    <div className="bg-gradient-to-br from-[#F5E0B7] via-[#E2C17D] to-[#D1A054] pb-6">
     {/* Hero Section */}
<section className="py-20 lg:py-28 text-center text-[#5B3A1A]">
  <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg py-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-sm">
      Our Vision 🌟
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      The vision of <span className="font-semibold text-yellow-500">IPA-GH</span> 
      is to create a society where marginalized communities can thrive through sustainable development 
      and active participation. We aspire to empower diverse populations to collaborate on local and 
      international challenges, including climate change, while protecting their rights and cultural heritage. 
      Our commitment is to elevate the voices of Indigenous peoples in decision-making processes to build 
      <span className="text-yellow-400 font-semibold"> resilience and inclusivity at all levels.</span>
    </p>
  </div>
</section>


    {/* Vision Points */}
    <section className="">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 text-center mb-14">
          Key Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visionPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center 
                         flex flex-col items-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-5">{point.icon}</div>
              <h3 className="text-xl font-bold text-[#5B3A1A] mb-3">
                {point.title}
              </h3>
              <p className="text-[#5B3A1A]/80 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}
