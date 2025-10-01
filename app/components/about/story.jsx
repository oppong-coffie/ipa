"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function OurStoryPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#FFFDF5] py-6 lg:py-24">
      {/* Hero */}
      <section className="text-center mb-16 px-4">
        <h1
          className="text-5xl md:text-6xl font-extrabold text-[#8B7D6B] drop-shadow-md mb-6"
        >
          Our Story 📖
        </h1>
        <p
          className="text-lg md:text-xl text-[#5B3A1A] max-w-3xl"
        >
          Discover how the Indigenous People Alliance empowers indigenous
          communities in Ghana through grassroots initiatives, sustainable
          development, and climate resilience. 🌍
        </p>
      </section>

      {/* Intro Section */}
      <section className="px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#8B7D6B] mb-4">
              How It All Began 🌱
            </h2>
            <p className="text-[#5B3A1A] text-lg mb-4">
              Founded in 2020 by passionate young indigenous leaders, IPA
              emerged to address climate change, economic marginalization, and
              cultural erosion threatening communities.
            </p>
            <p className="text-[#5B3A1A] text-lg mb-4">
              By blending traditional wisdom with modern approaches, IPA creates
              sustainable solutions that empower communities and inspire the
              next generation of leaders. 💪
            </p>
          </div>

          <div className="w-full relative">
            <Image
              src="/drive/d (6).jpg"
              alt="Community Engagement"
              width={800}
              height={400}
              priority
              className="rounded-3xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
  {/* Image */}
  <img
    src="/drive/0.jpeg"
    alt="Youth collaboration"
    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
  />

  {/* Text */}
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#5B3A1A] flex items-center gap-2">
      🌍 Our Theory of Change
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">
      IPA-GH’s approach is grounded in a{" "}
      <span className="font-semibold text-[#5B3A1A]">“co-creation” model of change</span>.
      As a <span className="font-semibold">youth-led organization</span>, we harness 
      <span className="font-semibold"> youth innovation</span> and collaborate with 
      affected groups — especially <span className="font-semibold">women in indigenous communities</span>.
    </p>
    <p className="text-lg leading-relaxed text-gray-700">
      We believe that the people who face challenges hold the strongest power to 
      solve them. By <span className="font-semibold">building capacity</span> and 
      <span className="font-semibold"> creating platforms for participation</span>, 
      communities transform into agents of their own change.
    </p>
    <p className="text-lg leading-relaxed text-gray-700">
      This unique model <span className="text-yellow-500 font-semibold">leverages local knowledge</span> 
      and <span className="text-yellow-500 font-semibold">personal empowerment</span> to achieve 
      inclusive, sustainable, and lasting social change.
    </p>
  </div>
</div>

      </section>


    </div>
  );
}
