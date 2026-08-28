"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, MousePointer, Compass, RotateCcw, Timer, Pause, Play } from "lucide-react";
import Link from "next/link";

// Deterministic particle values to prevent SSR hydration mismatches
const getParticleData = (i: number) => {
  const p1 = Math.abs((Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1);
  const p2 = Math.abs((Math.sin(i * 4.1414 + 12.989) * 23421.1231) % 1);
  const p3 = Math.abs((Math.sin(i * 7.5123 + 45.123) * 54321.9876) % 1);
  const p4 = Math.abs((Math.sin(i * 9.8765 + 32.109) * 12345.6789) % 1);

  const size = (p1 * 5 + 2).toFixed(1) + "px";
  const top = (p2 * 100).toFixed(1) + "%";
  const left = (p3 * 100).toFixed(1) + "%";
  const xOffset = Math.round(p4 * 40 - 20);
  const duration = Number((4 + p1 * 5).toFixed(2));
  const delay = Number((p2 * 3).toFixed(2));

  return { size, top, left, xOffset, duration, delay };
};

interface SplashScreenProps {
  onComplete?: () => void;
  isStandalone?: boolean;
}

export default function SplashScreen({ onComplete, isStandalone = false }: SplashScreenProps) {
  const [flightMode, setFlightMode] = useState<"auto" | "cursor">("auto");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);
  const [flightStep, setFlightStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Automatic redirect timer (5s countdown)
  useEffect(() => {
    if (isExiting || isPaused) return;

    if (timeLeft <= 0) {
      handleEnter();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isExiting, isPaused]);

  // Handle mouse position for cursor flight mode
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Replay flight animation
  const handleReplay = () => {
    setFlightStep((prev) => prev + 1);
  };

  // Enter site action
  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-gradient-to-br from-zinc-950 via-[#1a1307] to-zinc-950 text-white select-none"
        >
          {/* Top Auto-Redirect Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-950/40 z-50 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_10px_#F59E0B]"
              initial={{ width: "0%" }}
              animate={{ width: `${((5 - timeLeft) / 5) * 100}%` }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </div>

          {/* Animated Honeycomb Grid Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="honeycomb-pattern" width="56" height="100" patternUnits="userSpaceOnUse">
                  <path
                    d="M28 0 L56 16.5 L56 49.5 L28 66 L0 49.5 L0 16.5 Z M28 100 L56 83.5 L56 50.5 L28 34 L0 50.5 L0 83.5 Z"
                    fill="none"
                    stroke="#EAB308"
                    strokeWidth="1.2"
                    strokeDasharray="4 2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#honeycomb-pattern)" />
            </svg>
          </div>

          {/* Ambient Glowing Sunburst / Orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Floating Pollen Dust Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => {
              const particle = getParticleData(i);
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-yellow-400/60 shadow-[0_0_10px_#F59E0B]"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    top: particle.top,
                    left: particle.left,
                  }}
                  animate={{
                    y: [0, -60, 0],
                    x: [0, particle.xOffset, 0],
                    opacity: [0.2, 0.9, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: particle.delay,
                  }}
                />
              );
            })}
          </div>

          {/* Dynamic Flight Trail (Auto mode SVG Path) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient id="bee-trail-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#EAB308" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
            {flightMode === "auto" && (
              <motion.path
                key={flightStep}
                d="M 100,250 C 350,50 650,450 900,200 S 1300,350 1500,200"
                fill="none"
                stroke="url(#bee-trail-grad)"
                strokeWidth="3"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              />
            )}
          </svg>

          {/* --- TOP NAVBAR BRANDING --- */}
          <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div
              onClick={handleEnter}
              className="flex items-center space-x-3 cursor-pointer group"
              title="Click logo to enter site immediately"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                  <Image src="/images/logo.png" alt="IPA Logo" width={28} height={28} className="object-contain" />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 group-hover:text-yellow-300 transition-colors">
                  IPA GHANA
                </span>
                <span className="block text-[10px] text-amber-200/60 font-mono uppercase tracking-widest">
                  Integrated Development Initiatives
                </span>
              </div>
            </div>

            {/* Top Controls */}
            <div className="flex items-center space-x-3">
              {/* Auto Redirect Timer Counter */}
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs backdrop-blur-md">
                <Timer className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                <span>Redirecting in <strong className="font-mono text-yellow-400 text-sm">{timeLeft}s</strong></span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="ml-1 p-1 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
                  title={isPaused ? "Resume auto-redirect" : "Pause auto-redirect"}
                >
                  {isPaused ? <Play className="w-3 h-3 text-green-400" /> : <Pause className="w-3 h-3 text-amber-300" />}
                </button>
              </div>
            </div>
          </header>

          {/* --- FLYING BEE ANIMATION CONTAINER --- */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {flightMode === "auto" ? (
              /* AUTO FLIGHT PATH ALONG CURVES WITH WING VIBRATION */
              <motion.div
                key={flightStep}
                onClick={handleEnter}
                className="absolute w-24 h-24 md:w-32 md:h-32 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.65)] pointer-events-auto cursor-pointer group"
                title="Click splash image to enter site immediately"
                initial={{
                  x: "10vw",
                  y: "25vh",
                  rotate: -15,
                  scale: 0.8,
                }}
                animate={{
                  x: ["10vw", "35vw", "65vw", "85vw", "50vw", "15vw", "10vw"],
                  y: ["25vh", "15vh", "55vh", "30vh", "70vh", "40vh", "25vh"],
                  rotate: [-15, 10, 25, -10, -35, 15, -15],
                  scale: [0.85, 1.1, 0.95, 1.15, 1.0, 0.9, 0.85],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Micro wing flutter effect wrapper */}
                <motion.div
                  className="w-full h-full relative"
                  animate={{
                    scaleY: [1, 0.88, 1.05, 0.92, 1],
                    rotate: [-3, 3, -2, 4, -3],
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Flying Bee"
                    fill
                    priority
                    className="object-contain transform group-hover:scale-115 transition-transform"
                  />
                  {/* Bee Golden Glow Ring */}
                  <div className="absolute -inset-2 bg-amber-400/20 group-hover:bg-amber-400/40 rounded-full blur-md -z-10 animate-pulse transition-colors" />
                </motion.div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/90 text-amber-300 text-[10px] px-2 py-0.5 rounded whitespace-nowrap border border-amber-500/30 font-medium pointer-events-none">
                  Click to enter site
                </div>
              </motion.div>
            ) : (
              /* MOUSE CURSOR TRACKING FLIGHT */
              <motion.div
                onClick={handleEnter}
                className="absolute w-24 h-24 md:w-32 md:h-32 filter drop-shadow-[0_0_25px_rgba(245,158,11,0.7)] pointer-events-auto cursor-pointer group"
                title="Click splash image to enter site immediately"
                animate={{
                  x: mousePos.x - 60,
                  y: mousePos.y - 60,
                  rotate: (mousePos.x % 30) - 15,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                  mass: 0.6,
                }}
              >
                <motion.div
                  className="w-full h-full relative"
                  animate={{
                    scaleY: [1, 0.85, 1.05, 0.9, 1],
                  }}
                  transition={{
                    duration: 0.12,
                    repeat: Infinity,
                  }}
                >
                  <Image src="/images/logo.png" alt="Flying Bee" fill priority className="object-contain transform group-hover:scale-115 transition-transform" />
                  <div className="absolute -inset-2 bg-yellow-400/30 group-hover:bg-yellow-400/50 rounded-full blur-md -z-10 transition-colors" />
                </motion.div>
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/90 text-amber-300 text-[10px] px-2 py-0.5 rounded whitespace-nowrap border border-amber-500/30 font-medium pointer-events-none">
                  Click to enter site
                </div>
              </motion.div>
            )}
          </div>

          {/* --- MAIN HERO CONTENT --- */}
          <main className="relative z-20 max-w-4xl mx-auto px-6 text-center my-auto flex flex-col items-center justify-center">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6"
            >
              I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 decoration-amber-500/40 decoration-wavy decoration-2">
                P
              </span>{" "}
              A
            </motion.h1>

          </main>

          {/* --- FOOTER HIGHLIGHTS --- */}
          <footer className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-amber-500/10 text-xs text-amber-200/60">
            <div className="flex items-center space-x-6">
              <span>EST. 2024</span>
              <span>•</span>
              <span>Sustainable Farming</span>
              <span>•</span>
              <span>Community Impact</span>
            </div>
            <div className="text-amber-400/80 font-mono">
              Click splash image or wait for auto-redirect • Flying Bee Splash Engine
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
