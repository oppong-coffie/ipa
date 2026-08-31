"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Send, Heart, Sparkles, MapPin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#8B7D6B] dark:bg-zinc-950 text-white pt-20 pb-12 transition-colors duration-300 overflow-hidden border-t border-white/10 dark:border-zinc-800 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-yellow-400/5 blur-3xl rounded-full pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Top Conversational Newsletter Box (Full Width) */}
        <div className="w-full bg-black/20 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/15 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Field Dispatches &amp; Stories</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Stay in the loop with grassroots progress.
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-stone-200 font-light max-w-2xl">
                Get monthly updates on new voluntary beekeeping sanctuaries, youth fellowships, and community milestones directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-yellow-400/20 border border-yellow-400/40 text-yellow-200 text-sm font-semibold text-center">
                  🎉 Thank you for joining our community movement!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-5 py-4 rounded-2xl bg-white/10 dark:bg-zinc-800 border border-white/20 dark:border-zinc-700 text-white placeholder-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="px-7 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links (Full Width 5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16 w-full">
          {/* Col 1: Organization Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-400 flex items-center justify-center p-1 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="IPA Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl lg:text-2xl text-yellow-300 tracking-wide block">
                  IPA Ghana
                </span>
                <span className="text-xs text-stone-200 font-light">
                  Indigenous People Alliance
                </span>
              </div>
            </div>

            <p className="text-stone-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md font-light">
              A youth-led NGO advancing climate resilience, sustainable beekeeping livelihoods,
              and social equity across Ghana&apos;s indigenous and rural communities through voluntary co-creation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://wa.me/233508469840"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <img src="/icons/wh.png" alt="WhatsApp" className="w-5 h-5 rounded" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/indigenous-people-alliance-ghana"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/ipa.gh?igsh=MTZkOHR2Ym9qMGR3eQ%3D%3D&utm_source=qr"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <img src="/icons/ig.svg" alt="Instagram" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-yellow-300 text-sm uppercase tracking-wider">
              Explore IPA
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-light">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="hover:text-yellow-300 transition-colors">
                  Our Story &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/pages/impart" className="hover:text-yellow-300 transition-colors">
                  Impact &amp; Voluntary Projects
                </Link>
              </li>
              <li>
                <Link href="/#report" className="hover:text-yellow-300 transition-colors">
                  Annual Reports (2024)
                </Link>
              </li>
              <li>
                <Link href="/pages/news" className="hover:text-yellow-300 transition-colors">
                  Field Stories &amp; Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div className="space-y-3">
            <h4 className="font-bold text-yellow-300 text-sm uppercase tracking-wider">
              Voluntary Drives
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-light">
              <li>
                <Link href="/pages/impart" className="hover:text-yellow-300 transition-colors">
                  🐝 GARF Beekeeping Fund
                </Link>
              </li>
              <li>
                <Link href="/pages/impart" className="hover:text-yellow-300 transition-colors">
                  🚐 Climate Beyond Borders
                </Link>
              </li>
              <li>
                <Link href="/pages/impart" className="hover:text-yellow-300 transition-colors">
                  🏫 Indigenous Green Schools
                </Link>
              </li>
              <li>
                <Link href="/pages/impart" className="hover:text-yellow-300 transition-colors">
                  👑 Amoma Chieftaincy Dialogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Out */}
          <div className="space-y-3">
            <h4 className="font-bold text-yellow-300 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Accra &amp; Amanokrom Hub, Ghana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="tel:+233508469840" className="hover:text-yellow-300 transition-colors">
                  +233 50 846 9840
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a href="mailto:info@ipa.org" className="hover:text-yellow-300 transition-colors">
                  info@ipa.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-300">
          <p>
            © {new Date().getFullYear()} Indigenous People Alliance (IPA Ghana). All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span>Co-created with love for indigenous communities</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
