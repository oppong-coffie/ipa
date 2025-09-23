"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <footer className="relative bg-black text-white py-16">
      {/* Decorative yellow circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12"
          data-aos="fade-up"
        >
          {/* Logo & tagline */}
          <motion.div whileHover={{ scale: 1.02 }} className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-yellow-400 flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="IPA Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-bold text-xl text-yellow-400">IPA</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Empowering indigenous communities for a sustainable and equitable future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="font-semibold text-yellow-400 mb-2">Quick Links</h3>
            <a href="/" className="hover:text-yellow-300 transition-colors">Home</a>
            <a href="/about" className="hover:text-yellow-300 transition-colors">About</a>
            <a href="/projects" className="hover:text-yellow-300 transition-colors">Projects</a>
            <a href="/resources" className="hover:text-yellow-300 transition-colors">Resources</a>
            <a href="/contact" className="hover:text-yellow-300 transition-colors">Contact</a>
          </motion.div>

          {/* Social / Contact */}
          <motion.div whileHover={{ scale: 1.02 }} className="text-center md:text-left">
            <h3 className="font-semibold text-yellow-400 mb-2">Connect With Us</h3>
            <p className="text-gray-300 mb-4">info@ipa.org | +233 24 000 0000</p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="#" className="hover:text-yellow-300 transition-colors">🌐</Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">🐦</Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">📘</Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors">📸</Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-yellow-400/30 pt-6 text-center text-sm text-gray-400"
          data-aos="fade-up"
        >
          © {new Date().getFullYear()} Indigenous People Alliance. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
}
