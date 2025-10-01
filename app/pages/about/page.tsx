"use client";

import { Card, Button } from "antd";
import Aboutus from "@/app/components/about/aboutus";
import MissionPage from "@/app/components/about/mission";
import VisionPage from "@/app/components/about/vission";
import ValuesPage from "@/app/components/about/values";
import TeamPage from "@/app/components/about/team";
import Story from "@/app/components/about/story";
import Galery from "@/app/components/about/galary";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#D1A054] drop-shadow-sm">
            About Indigenous People Alliance 🌍
          </h1>
          <p className="text-lg md:text-xl text-[#8B7D6B] max-w-3xl mx-auto leading-relaxed">
            Discover our story, mission, and the passionate team working to
            empower Ghana&apos;s indigenous communities.
            <span className="text-yellow-400 font-semibold">
              {" "}
              Together, we create lasting impact and sustainable growth.
            </span>
          </p>
        </div>
      </section>

      < Aboutus />
      < MissionPage />
      < VisionPage />
      < ValuesPage />
      <TeamPage />
      <Story />
      < Galery />


    </div>
  );
}
