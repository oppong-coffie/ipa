"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="relative bg-[#D9CFC1] dark:bg-zinc-950 text-[#5B4636] dark:text-zinc-300 py-20 transition-colors duration-300 overflow-hidden">
      {/* Decorative yellow circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5C04E]/30 dark:bg-yellow-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F5C04E]/20 dark:bg-yellow-500/5 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-16"
          data-aos="fade-up"
        >
          {/* Logo & tagline */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="h-14 w-14 rounded-lg bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="IPA Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl text-yellow-500 dark:text-yellow-400 tracking-wide">
                IPA
              </span>
            </div>
            <p className="text-[#5B4636] dark:text-zinc-400 max-w-xs text-sm md:text-base leading-relaxed">
              Empowering indigenous communities for a sustainable and equitable
              future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col space-y-3 text-center md:text-left"
          >
            <h3 className="font-semibold text-yellow-500 dark:text-yellow-400 mb-2 text-lg">
              Quick Links
            </h3>
            <Link
              href="/"
              className="hover:text-[#FFD966] dark:hover:text-yellow-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#FFD966] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#FFD966] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/resources"
              className="hover:text-[#FFD966] transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FFD966] transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          {/* Social / Contact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-center md:text-left"
          >
            <h3 className="font-semibold text-[#F5C04E] dark:text-yellow-400 mb-2 text-lg">
              Connect With Us
            </h3>
            <p className="text-[#5B4636] dark:text-zinc-400 mb-4 text-sm md:text-base">
              info@ipa.org | +233 50 846 9840
            </p>
            <div className="flex justify-center md:justify-start gap-5">
              <Link
                href="https://wa.me/233508469840"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/wh.png"
                  alt="Website"
                  className="w-6 h-6 hover:scale-110 rounded transition-transform duration-300"
                />
              </Link>
              {/* <Link href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/x.webp"
                  alt="Twitter"
                  className="w-6 h-6 rounded hover:scale-110 transition-transform duration-300"
                />
              </Link> */}
              {/* <Link href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="/icons/fb.webp"
                  alt="Facebook"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                />
              </Link> */}
              <Link
                href="https://www.instagram.com/ipa.gh?igsh=MTZkOHR2Ym9qMGR3eQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons/ig.svg"
                  alt="Instagram"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-[#F5C04E]/40 dark:border-zinc-800 pt-6 text-center text-sm md:text-base text-[#5B4636] dark:text-zinc-500 tracking-wide transition-colors duration-300"
          data-aos="fade-up"
        >
          © {new Date().getFullYear()} Indigenous People Alliance. All Rights
          Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
