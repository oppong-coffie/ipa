"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MapLocation() {
  return (
    <section className="py-24 bg-[#FDF8F4] relative"> 
      {/* warm cream/brown background */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <motion.h2
  className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-6 text-center"
  whileHover={{ scale: 1.02, color: '#FDDC5C' }}
>
  Visit Our Office
</motion.h2>

<motion.p
  className="text-center text-[#8B7D6B] mb-12 max-w-2xl mx-auto leading-relaxed"
  whileHover={{ scale: 1.01 }}
>
  Find us at our headquarters in Ghana. Our team is always ready{' '}
  <span className="text-yellow-400 font-semibold">to welcome visitors and partners.</span>
</motion.p>


        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-500 relative bg-[#7B4B2A]/10">
          <Image
            src="/images/map3.png" // replace with your map image path
            alt="Map showing office location"
            fill
            className="object-cover"
            priority
          />

          {/* Optional brown overlay to tie into theme */}
          <div className="absolute inset-0 bg-[#7B4B2A]/10 mix-blend-multiply"></div>
        </div>
      </div>
    </section>
  );
}
  