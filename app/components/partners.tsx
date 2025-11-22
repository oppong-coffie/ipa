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
  const partners = [
    { name: "UNI", logo: "/partners/p (1).png" },
    { name: "UNIC", logo: "/partners/p (2).png" },
    { name: "UNICE", logo: "/partners/p (3).png" },
    { name: "UNICEF", logo: "/partners/p (4).png" }
  ];

  return (
    <section className="py-24 bg-[#fdfaf5] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-yellow-200/30 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#8B4513]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#2D241E] mb-6 tracking-tight"
          >
            Our Trusted Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#5C4033] max-w-2xl mx-auto leading-relaxed"
          >
            Collaborating with leading organizations to drive sustainable change and empower communities worldwide.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex items-center justify-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-stone-100 hover:border-yellow-200 transition-all duration-300 w-40 h-32 sm:w-48 sm:h-36"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={80}
                  className="object-contain max-h-16 w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
