"use client";

import React from "react";
import { Card } from "antd";

const values = [
  {
    emoji: "🙏",
    title: "Respect",
    description:
      "We honor the traditions, opinions, and voices of all community members.",
  },
  {
    emoji: "✨",
    title: "Integrity",
    description:
      "We act honestly, ethically, and transparently in all our initiatives.",
  },
  {
    emoji: "🤝",
    title: "Collaboration",
    description:
      "We believe in teamwork and co-creating solutions with communities and partners.",
  },
  {
    emoji: "💡",
    title: "Innovation",
    description:
      "We embrace creative ideas that foster sustainable and scalable impact.",
  },
  {
    emoji: "🌱",
    title: "Sustainability",
    description:
      "We prioritize initiatives that protect the environment and promote long-term community resilience.",
  },
  {
    emoji: "🌟",
    title: "Empowerment",
    description:
      "We equip youth and marginalized populations to lead change in their communities.",
  },
];

export default function ValuesPage() {
  return (
    <div className="bg-[#FFFDF0] dark:bg-zinc-950 min-h-screen py-16 lg:py-24 transition-colors duration-300">
      {/* Header */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] dark:text-yellow-500 mb-4 drop-shadow-md">
          Our Values 💎
        </h1>
        <p className="text-lg md:text-xl text-[#5B3A1A] dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Indigenous People Alliance Ghana is guided by core values that shape
          our work, influence our decisions, and define the way we engage with
          communities. These values ensure that every project, initiative, and
          partnership reflects our mission and vision.
        </p>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value) => (
          <Card
            key={value.title}
            variant="borderless"
            className="rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 bg-[#FDDC5C] dark:bg-zinc-900 border border-transparent dark:border-zinc-800"
          >
            <div className="text-4xl mb-4 text-[#8B7D6B] dark:text-yellow-500">
              {value.emoji}
            </div>
            <h3 className="text-xl font-bold text-[#8B7D6B] dark:text-yellow-500 mb-2">
              {value.title}
            </h3>
            <p className="text-[#5B3A1A] dark:text-zinc-400 leading-relaxed">
              {value.description}
            </p>
          </Card>
        ))}
      </section>
    </div>
  );
}
