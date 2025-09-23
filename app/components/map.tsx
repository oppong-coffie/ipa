"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MapLocation() {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6 text-center"
          whileHover={{ scale: 1.02 }}
        >
          Visit Our Office
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          whileHover={{ scale: 1.01 }}
        >
          Find us at our headquarters in Ghana. Our team is always ready to welcome visitors and partners.
        </motion.p>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-400 relative">
          <Image
            src="/images/map3.jpg" // 🔁 Replace with your actual image path
            alt="Map showing office location"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
