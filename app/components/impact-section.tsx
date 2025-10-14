"use client";

import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";

const MotionImage = motion(Image);


const images = [
  "/images/community2.jpg",
  "/images/community1.jpg",
  "/images/community3.jpg",
  "/images/community4.jpg",
  "/images/community5.jpg",
  "/images/community6.jpg",
  "/images/community7.jpg",
  "/images/community9.jpg",
  "/images/community10.jpg",
  "/drive/d(1).jpg",
  "/drive/d(2).jpg",
  "/drive/d(5).jpg",
  "/drive/d(6).jpg",
  "/drive/d(7).jpg",
  "/drive/d(8).jpg",
  "/drive/d(9).jpg",
  "/drive/d(10).jpg",
  "/drive/d(11).jpg",
  "/drive/d(12).jpg",
  "/drive/d(13).jpg",
  "/drive/d(14).jpg",
  "/drive/d(15).jpg",
];

export function ImpactSection() {
  const [startCounting, setStartCounting] = useState(false);
  const [current, setCurrent] = useState(0);

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });

    const handleScroll = () => {
      const section = document.getElementById("impact-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setStartCounting(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: 500, suffix: "+", label: "Community Members Reached" },
    { number: 12, suffix: "", label: "Active Projects" },
    { number: 8, suffix: "", label: "Partner Organizations" },
    { number: 3, suffix: "", label: "Regions Served" },
  ];

  return (
<section
  id="impact-section"
  className="relative py-24 bg-amber-50 text-gray-900 overflow-hidden"
>
  {/* Soft glowing accents */}
  <div className="absolute -top-24 -right-24 w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full"></div>

  <div className="max-w-6xl mx-auto px-6 lg:px-12 relative grid lg:grid-cols-2 gap-16 items-center">
    {/* --- Left Text & Stats --- */}
    <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  data-aos="fade-right"
>
  {/* Heading */}
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-6 leading-tight drop-shadow-md"
    whileHover={{ scale: 1.03, color: '#FDDC5C' }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 250 }}
  >
    Creating Lasting Impact Together
  </motion.h2>

  {/* Description */}
  <motion.p
    className="text-lg text-gray-700 mb-10 leading-relaxed max-w-xl"
    whileHover={{ scale: 1.01 }}
  >
    We collaborate with communities and partners to build a future that honors
    indigenous knowledge while embracing sustainable innovation.
  </motion.p>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-6 mb-10">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: i * 0.1 }}
        className="text-center rounded-xl bg-yellow-50 hover:bg-yellow-100 px-5 py-6 shadow-md border border-yellow-200"
      >
        <div className="text-4xl font-extrabold text-yellow-700 mb-2">
          {startCounting ? (
            <CountUp
              end={stat.number}
              duration={15.5}
              separator=","
              suffix={stat.suffix}
            />
          ) : (
            "0"
          )}
        </div>
        <div className="text-sm uppercase tracking-wide text-gray-700">
          {stat.label}
        </div>
      </motion.div>
    ))}
  </div>

  {/* Call-to-Action Button */}
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
   <a href="/pages/about">
   
    <div className="
      bg-[#8B7D6B] 
      text-center 
      hover:bg-[#FDDC5C] 
      text-[#F5EBDD] 
      px-8 py-4 
      font-semibold 
      rounded-xl 
      shadow-md 
      cursor-pointer 
      transition-all duration-300
    ">
      Learn About Our Work
    </div>
   </a>
  </motion.div>
</motion.div>


    {/* --- Right Image Carousel --- */}
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
      <AnimatePresence>
        <MotionImage
          key={images[current]}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          width={800}
          height={450}
          className="rounded-2xl object-cover w-full h-full"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          priority={true}
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-700/80 hover:bg-yellow-700 text-white px-3 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-700/80 hover:bg-yellow-700 text-white px-3 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  </div>
</section>

  );
}
