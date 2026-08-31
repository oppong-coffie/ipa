"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  PhoneCall,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState("Volunteer with IPA");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const intentChips = [
    "Volunteer with IPA",
    "Partner on Voluntary Project",
    "Support GARF Beekeeping Fund",
    "Invite to Policy Dialogue",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300">
      {/* Hero Header (Full Width) */}
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF5] dark:from-zinc-900 dark:to-zinc-950 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-300/20 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full text-center relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Community Channel</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4"
          >
            Let&apos;s Start a{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Conversation</span>
          </motion.h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Whether you want to volunteer, fund a beekeeping hive, or co-design a voluntary climate resilience program,
            we are ready to listen and build with you.
          </p>
        </div>
      </section>

      {/* Main Content: Conversational Builder & Direct Channels (Full Width) */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 w-full">
          {/* Left Column: Conversational Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D241E] dark:text-white">
                    Medaase! Your message is received.
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold">{name}</span>. A member of our community team in Ghana will respond to <span className="font-semibold">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-7 py-3 rounded-full bg-[#8B7D6B] hover:bg-[#7A6B5A] text-white font-bold text-xs sm:text-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2D241E] dark:text-white mb-2">
                      Send a Message to the IPA Team
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-zinc-400">
                      Select your intent or write your custom inquiry below:
                    </p>
                  </div>

                  {/* Intent Selection Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-zinc-300 mb-2.5">
                      What are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {intentChips.map((chip) => (
                        <button
                          type="button"
                          key={chip}
                          onClick={() => setIntent(chip)}
                          className={`text-xs sm:text-sm px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                            intent === chip
                              ? "bg-[#D1A054] text-zinc-950 font-bold shadow-sm scale-102"
                              : "bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-zinc-300 hover:bg-yellow-100 dark:hover:bg-zinc-700"
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border border-yellow-200/80 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. kwame@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border border-yellow-200/80 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-zinc-300 mb-1.5">
                      Phone Number (Optional / WhatsApp)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +233 50 846 9840"
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border border-yellow-200/80 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-zinc-300 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about yourself, your organization, or questions you have..."
                      className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-zinc-800/80 border border-yellow-200/80 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-[#D1A054] hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-yellow-400/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Message to IPA</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#2D241E] dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span>Instant Direct Channels</span>
              </h3>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/233508469840"
                target="_blank"
                className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 hover:scale-102 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Fastest Response
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400">+233 50 846 9840</p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Phone */}
              <a
                href="tel:+233508469840"
                className="flex items-center gap-4 p-5 rounded-2xl bg-stone-50 dark:bg-zinc-800/50 border border-yellow-200/60 dark:border-zinc-700/60 hover:scale-102 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8B7D6B] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-zinc-400">
                    Direct Line
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                    Voice Call
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400">+233 50 846 9840</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-600 dark:text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Email */}
              <a
                href="mailto:info@ipa.org"
                className="flex items-center gap-4 p-5 rounded-2xl bg-stone-50 dark:bg-zinc-800/50 border border-yellow-200/60 dark:border-zinc-700/60 hover:scale-102 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D1A054] text-zinc-950 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-zinc-400">
                    Official Inquiries
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-stone-900 dark:text-white">
                    Send Email
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-400">info@ipa.org</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-600 dark:text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Field Office Locations & Timings */}
            <div className="bg-[#FAF6EE] dark:bg-zinc-900 border border-yellow-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-900 dark:text-white text-sm">
                    Operational Hubs
                  </h5>
                  <p className="text-stone-600 dark:text-zinc-400 mt-0.5">
                    Accra Central &amp; Amanokrom Mother Hub, Eastern Region, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-stone-200/60 dark:border-zinc-800">
                <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-stone-900 dark:text-white text-sm">
                    Office &amp; Field Hours
                  </h5>
                  <p className="text-stone-600 dark:text-zinc-400 mt-0.5">
                    Monday – Friday: 8:30 AM – 5:30 PM (GMT)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
