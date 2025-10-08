"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "antd";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import Footer from "../components/footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about" },
    { name: "Impact", href: "/pages/impart" },
    { name: "Contact", href: "/pages/contactus" },
    { name: "News&Blog", href: "/pages/news" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
  {/* --- Header / Navbar --- */}
  <motion.header
  initial={{ y: -120 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-[#8B7D6B]/90 backdrop-blur-md shadow-lg" : "bg-[#A78B60]"
  }`}
>
  <nav className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12">
    {/* Logo */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center overflow-hidden shadow-lg">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="leading-tight">
        <div className="font-bold text-base sm:text-lg text-yellow-400 tracking-wide">IPA</div>
        <div className="text-[10px] sm:text-xs opacity-70">EST. 2024</div>
      </div>
    </div>

    {/* Desktop Links */}
    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
      {navigationItems.map((item, i) => (
        <motion.a
          key={item.name}
          href={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="transition-colors duration-200 text-white font-medium text-sm xl:text-base hover:text-yellow-400"
        >
          {item.name}
        </motion.a>
      ))}
    </div>

    {/* Mobile Menu Toggle */}
    <div className="flex items-center space-x-3 sm:space-x-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white p-2 hover:text-yellow-400 transition-colors duration-200"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
    </div>
  </nav>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4 }}
      className="lg:hidden bg-[#8B7D6B]/95 backdrop-blur-md shadow-lg"
    >
      <div className="px-4 sm:px-6 py-6 space-y-4">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-white hover:text-yellow-400 transition-colors duration-200 text-base sm:text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.div>
  )}
</motion.header>



      {/* --- Dynamic Page Body --- */}
      <main className="flex-1 pt-20">{children}</main>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}
