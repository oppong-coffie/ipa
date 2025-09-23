"use client";

import { useState, useEffect } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export function VideoHero() {

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Init AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* --- Background Video --- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/poor.mp4" type="video/mp4" />
      </video>

      {/* --- Gradient Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[1px]" />

      {/* --- Hero Content --- */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="max-w-6xl mx-auto px-6 lg:px-12 text-center"
          data-aos="fade-up"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-6 drop-shadow-md"
          >
            Empowering Marginalized Communities for an Equitable Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto drop-shadow-sm"
          >
            <span className="text-yellow-400 font-semibold">
              Indigenous People Alliance (IPA)
            </span>{" "}
            is a youth-led organization fostering climate resilience,
            sustainable livelihoods, and social equity in{" "}
            <span className="text-yellow-400 font-semibold">
              Ghana's indigenous regions
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="large"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 text-lg font-semibold"
            >
              Get Involved
            </Button>
            <Button
              variant="outline"
              size="large"
              className="bg-black/30 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black backdrop-blur-sm px-8 py-4 text-lg"
            >
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
}