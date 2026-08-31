"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  HeartHandshake,
  Sprout,
  Compass,
  ArrowRight,
  PhoneCall,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  prompt: string;
  category: string;
  response: string;
  actionText?: string;
  actionHref?: string;
}

const guidedConversations: FAQItem[] = [
  {
    id: "what-is-ipa",
    category: "About Us",
    prompt: "What does Indigenous People Alliance do?",
    response:
      "Akwaaba! 🌿 IPA Ghana is a youth-led organization dedicated to empowering indigenous and marginalized communities. We co-create solutions with local leaders focusing on climate resilience, sustainable beekeeping livelihoods, social equity, and cultural preservation.",
    actionText: "Read Our Full Story",
    actionHref: "/pages/about",
  },
  {
    id: "active-projects",
    category: "Projects",
    prompt: "What are your major active projects?",
    response:
      "We're currently leading several initiatives:\n• 🐝 Ghana Api-Resilience Fund (GARF) & Pollinator Sanctuary\n• 🚐 Climate Beyond Borders Caravan\n• 🏫 Indigenous Green Schools (IGS)\n• 🤝 Amoma Stakeholder Engagement & Traditional Leadership Partnerships.",
    actionText: "Explore Impact & Projects",
    actionHref: "/pages/impart",
  },
  {
    id: "how-to-volunteer",
    category: "Get Involved",
    prompt: "How can I volunteer or partner with IPA?",
    response:
      "We welcome passionate youths, researchers, development partners, and donors! You can join as a field volunteer, research collaborator, or community champion.",
    actionText: "Join / Contact Us",
    actionHref: "/pages/contactus",
  },
  {
    id: "annual-report",
    category: "Transparency",
    prompt: "Where can I view IPA's financial & annual reports?",
    response:
      "We believe in 100% transparency. You can view and download our comprehensive 2024 & upcoming 2025 Annual Impact Reports directly on our homepage.",
    actionText: "Download Reports",
    actionHref: "/#report",
  },
];

export default function ConversationalAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ sender: "bot" | "user"; text: string; action?: { text: string; href: string } }>
  >([
    {
      sender: "bot",
      text: "👋 Hi there! Welcome to Indigenous People Alliance Ghana. How can we help you explore our grassroots impact today?",
    },
  ]);
  const [customInput, setCustomInput] = useState("");

  const handleSelectPrompt = (item: FAQItem) => {
    // Add user message
    const newMessages = [
      ...messages,
      { sender: "user" as const, text: item.prompt },
      {
        sender: "bot" as const,
        text: item.response,
        action: item.actionText && item.actionHref ? { text: item.actionText, href: item.actionHref } : undefined,
      },
    ];
    setMessages(newMessages);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput.trim();
    setCustomInput("");

    // Find match or provide helpful conversational fallback
    const lower = userText.toLowerCase();
    let responseText =
      "Thank you for reaching out! We'd love to discuss this with you directly. You can chat with our team on WhatsApp or send us an email.";
    let action = { text: "Contact Team on WhatsApp", href: "https://wa.me/233508469840" };

    if (lower.includes("volunteer") || lower.includes("join") || lower.includes("work")) {
      responseText =
        "We're always excited to welcome passionate volunteers and collaborators! Check out our contact page or drop us a quick note to get plugged into our upcoming community drives.";
      action = { text: "Get Involved Now", href: "/pages/contactus" };
    } else if (lower.includes("bee") || lower.includes("honey") || lower.includes("garf")) {
      responseText =
        "Our Beekeeping & Api-Resilience initiative has installed over 200 hives across farming clusters in Teacher Mante & the Eastern Region, empowering rural farmers with sustainable incomes!";
      action = { text: "View Beekeeping Project", href: "/pages/impart" };
    } else if (lower.includes("climate") || lower.includes("green") || lower.includes("caravan")) {
      responseText =
        "Our Climate Beyond Borders Caravan and Indigenous Green Schools bring traditional ecological knowledge and youth climate action together at the grassroots level.";
      action = { text: "Read Climate Stories", href: "/pages/impart" };
    } else if (lower.includes("team") || lower.includes("founder") || lower.includes("who")) {
      responseText =
        "IPA Ghana is led by Lord Offei-Darko (Founder), David D. Tawiah (Co-Founder & Project Lead), and an enthusiastic team of youth innovators across Ghana.";
      action = { text: "Meet Our Team", href: "/pages/about" };
    }

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: responseText, action },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-zinc-900 border border-yellow-400/40 shadow-lg text-xs font-semibold text-zinc-800 dark:text-zinc-200 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Got questions? Ask IPA</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open IPA Interactive Guide"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A78B60] via-[#D1A054] to-[#FACC15] text-zinc-950 p-0 flex items-center justify-center shadow-2xl hover:shadow-yellow-500/25 transition-all border-2 border-white/60 dark:border-zinc-800 focus:outline-none"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6 text-zinc-950" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative"
              >
                <MessageSquare className="w-6 h-6 text-zinc-950 fill-zinc-950/20" />
                <Sparkles className="w-3.5 h-3.5 text-zinc-950 absolute -top-1 -right-1 animate-spin-slow" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Interactive Conversational Drawer / Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] max-h-[580px] h-[80vh] flex flex-col rounded-3xl bg-white dark:bg-zinc-900 border border-yellow-500/30 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#8B7D6B] via-[#A78B60] to-[#D1A054] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/40">
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base leading-none text-white">
                    IPA Interactive Guide
                  </h3>
                  <p className="text-[11px] text-yellow-100 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Online • Direct from Ghana
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-[#FFFDF5] to-[#F5EBDD]/40 dark:from-zinc-900 dark:to-zinc-950">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#D1A054] text-zinc-950 font-medium rounded-br-none shadow-md"
                        : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-bl-none border border-yellow-200/50 dark:border-zinc-700/80 shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.action && (
                      <div className="mt-3 pt-2.5 border-t border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
                        <Link
                          href={msg.action.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xs font-semibold text-[#8B7D6B] dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 flex items-center gap-1 group"
                        >
                          <span>{msg.action.text}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Guided Prompt Chips */}
              <div className="pt-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8B7D6B] dark:text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-yellow-500" />
                  Quick Topics to Explore:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {guidedConversations.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectPrompt(item)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 hover:bg-yellow-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-yellow-300/40 dark:border-zinc-700 transition-all text-left flex items-center gap-1.5 shadow-2xs hover:scale-102"
                    >
                      <span>💬</span>
                      <span>{item.prompt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Footer / Input Form */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-yellow-200/50 dark:border-zinc-800 space-y-2">
              <form onSubmit={handleCustomSend} className="flex items-center gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask a question or type a message..."
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FFFDF5] dark:bg-zinc-800 border border-yellow-300/60 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-[#D1A054] hover:bg-yellow-400 text-zinc-950 font-bold transition-colors flex items-center justify-center shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Direct Quick WhatsApp shortcut */}
              <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
                <span>Want to speak to a real human?</span>
                <Link
                  href="https://wa.me/233508469840"
                  target="_blank"
                  className="text-[#8B7D6B] dark:text-yellow-400 hover:underline font-semibold flex items-center gap-1"
                >
                  WhatsApp Us 🟢
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
