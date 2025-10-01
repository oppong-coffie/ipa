"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const partners = [
  { name: "UNI", logo: "/partners/p (1).png" },
  { name: "UNIC", logo: "/partners/p (2).png" },
  { name: "UNICE", logo: "/partners/p (3).png" },
  { name: "UNICEF", logo: "/partners/p (4).png" }
];

export default function Partners() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="pb-24 bg-[#fdfaf5] relative">
      {/* Decorative brown & yellow accent circles */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#8B4513]/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="text-center mb-16" data-aos="fade-up">
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-4 drop-shadow-md"
    whileHover={{ scale: 1.02, color: '#FDDC5C' }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 250 }}
  >
    Our Partners
  </motion.h2>
  <motion.p
    className="text-lg text-[#5C4033] max-w-2xl mx-auto leading-relaxed"
    whileHover={{ scale: 1.01 }}
  >
    We collaborate with local and international organizations to empower communities, preserve indigenous knowledge, and drive sustainable change.
  </motion.p>
</div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md border border-yellow-200 hover:border-[#8B4513] hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={64}
                className="object-contain max-h-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
