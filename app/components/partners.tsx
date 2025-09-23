"use client";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const partners = [
  { name: "UNICEF", logo: "/images/partner1.png" },
  { name: "UNIEF", logo: "/images/partner1.avif" },
  { name: "World Bank", logo: "/images/partner2.png" },
  { name: "Green Climate Fund", logo: "/images/partner3.jpg" },
  { name: "Local NGO", logo: "/images/partner4.png" },
  { name: "Local NG", logo: "/images/partner5.png" },
];

export default function Partners() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="pb-24 bg-gray-50 relative">
      {/* Decorative yellow accent circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Our Partners
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            We collaborate with local and international organizations to empower communities, preserve indigenous knowledge, and drive sustainable change.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.25 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
