    "use client";

    import { useState, useEffect } from "react";
    import { Menu, X } from "lucide-react";
    import { Button } from "antd";
    import { motion } from "framer-motion";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import Image from "next/image";

import Footer from "../components/footer";

    export default function PagesLayout({ children }: { children: React.ReactNode }) {
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
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
        { name: "News", href: "/news" },
    ];
    

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
      {/* --- Header / Navbar --- */}
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-black/70 backdrop-blur-sm shadow-md" : ""
  }`}
>
  <nav
    className="
      flex items-center justify-between
      px-4 py-3 sm:px-6 md:px-8 lg:px-12
    "
  >
    {/* Logo */}
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-yellow-400 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="leading-tight">
        <div className="font-bold text-base sm:text-lg text-yellow-400">
          IPA
        </div>
        <div className="text-[10px] sm:text-xs opacity-80">EST. 2024</div>
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
          className={`transition-colors duration-200 text-sm xl:text-base ${
            item.name === "Home"
              ? "text-yellow-400"
              : "text-white hover:text-yellow-400"
          }`}
        >
          {item.name}
        </motion.a>
      ))}
    </div>

    {/* Buttons / Mobile Menu Toggle */}
    <div className="flex items-center space-x-3 sm:space-x-4">
      <Button
        className="
          hidden lg:flex 
          bg-yellow-400 hover:bg-yellow-300 
          text-black font-semibold 
          px-4 py-1.5 text-sm xl:text-base
        "
      >
        Login
      </Button>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white p-2"
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
      className="lg:hidden bg-black/95 backdrop-blur-sm"
    >
      <div className="px-4 sm:px-6 py-6 space-y-4">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-white hover:text-yellow-400 transition-colors duration-200 text-base sm:text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black text-base sm:text-lg">
          Login
        </Button>
      </div>
    </motion.div>
  )}
</motion.header>


        {/* --- Dynamic Page Body --- */}
        <main className="flex-1 pt-20">{children}</main>

        {/* --- Footer --- */}
       < Footer />
        </div>
    );
    }
