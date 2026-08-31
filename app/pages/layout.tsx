"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, MessageSquareText, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Footer from "../components/footer";
import SplashScreen from "../components/SplashScreen";
import ConversationalAssistant from "../components/ConversationalAssistant";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user has already seen splash screen this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShowSplash(true);
    }
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleCloseSplash = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/pages/about" },
    { name: "Impact & Projects", href: "/pages/impart" },
    { name: "Annual Reports", href: "/#report" },
    { name: "Stories & News", href: "/pages/news" },
  ];

  const DarkModeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="relative w-13 h-7 rounded-full bg-black/20 dark:bg-zinc-800 border border-white/30 dark:border-zinc-700 p-1 flex items-center cursor-pointer transition-all duration-300 hover:bg-black/30"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        animate={{ x: isDarkMode ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative z-10 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        {isDarkMode ? (
          <Moon size={11} className="text-zinc-900" />
        ) : (
          <Sun size={11} className="text-amber-500" />
        )}
      </motion.div>
      <div className="absolute inset-0 flex justify-between items-center px-2 opacity-40">
        <Sun size={10} className="text-yellow-300" />
        <Moon size={10} className="text-zinc-300" />
      </div>
    </button>
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300 selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      {/* Splash Screen Overlay */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleCloseSplash} />}
      </AnimatePresence>

      {/* --- Conversational Global Full-Width Top Banner --- */}
      <div className="w-full bg-gradient-to-r from-[#8B7D6B] via-[#A78B60] to-[#7A6B5A] text-white py-2 px-4 sm:px-8 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 relative z-50">
        <span>
          Empowering Ghana&apos;s indigenous communities through innovation &amp; co-creation.
        </span>
        <Link
          href="/pages/contactus"
          className="hidden sm:inline-flex items-center gap-1 text-yellow-300 hover:text-white underline font-semibold transition-colors ml-1"
        >
          Join our mission &rarr;
        </Link>
      </div>

      {/* --- Header / Navbar (Full Width) --- */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#8B7D6B]/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border-b border-white/10 dark:border-zinc-800"
            : "bg-[#8B7D6B] dark:bg-zinc-900/95"
        }`}
      >
        <nav className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3.5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 flex items-center justify-center overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 p-1">
              <Image
                src="/images/logo.png"
                alt="IPA Ghana Logo"
                width={42}
                height={42}
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-base sm:text-lg lg:text-xl text-yellow-300 tracking-wide flex items-center gap-1.5">
                <span>IPA Ghana</span>
                <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full hidden sm:inline-block">
                  NGO
                </span>
              </div>
              <div className="text-[11px] sm:text-xs text-stone-200 font-light">
                Indigenous People Alliance
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-black/15 dark:bg-zinc-800/60 p-1.5 rounded-full backdrop-blur-sm border border-white/10 dark:border-zinc-700/50">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-yellow-400 text-zinc-950 font-bold shadow-sm"
                      : "text-white hover:text-yellow-300 hover:bg-white/10"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Area: Let's Talk CTA & Dark Mode */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <DarkModeToggle />

            {/* Conversational "Let's Talk" CTA */}
            <Link
              href="/pages/contactus"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-zinc-950 font-extrabold text-xs sm:text-sm shadow-md hover:shadow-yellow-500/20 hover:scale-103 active:scale-97 transition-all duration-200"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </Link>
            <span className="text-5xl animate-pulse">🌱</span>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Open Navigation Menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#7A6B5A]/98 dark:bg-zinc-900/98 backdrop-blur-xl border-b border-white/10 dark:border-zinc-800 shadow-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-yellow-300">
                  Explore IPA Ghana
                </p>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-white hover:text-yellow-300 py-2.5 text-base font-semibold border-b border-white/10 dark:border-zinc-800"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Link>
                ))}

                <div className="pt-4">
                  <Link
                    href="/pages/contactus"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-400 text-zinc-950 font-extrabold text-sm shadow-md"
                  >
                    <MessageSquareText className="w-4 h-4" />
                    <span>Get in Touch with Us</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- Dynamic Page Body (Full Width) --- */}
      <main className="flex-1 w-full">{children}</main>

      {/* --- Global Floating Conversational Assistant --- */}
      <ConversationalAssistant />

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}
