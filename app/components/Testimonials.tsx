"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const testimonials = [
  {
    name: "Ama Owusu",
    position: "Community Leader",
    text: "IPA's initiatives transformed our community, creating sustainable livelihoods and empowering women and youth alike.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Kwame Mensah",
    position: "Youth Advocate",
    text: "Working with IPA allows us to preserve indigenous knowledge while embracing modern solutions for climate resilience.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Efua Adom",
    position: "Environmental Specialist",
    text: "IPA connects grassroots communities with global initiatives for lasting impact.",
    image: "/images/testimonial3.jpg",
  },
  {
    name: "Kojo Asante",
    position: "Social Entrepreneur",
    text: "IPA’s programs address real community needs while fostering innovation and sustainable growth.",
    image: "/images/testimonial4.jpg",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative py-32 bg-[#fdfaf5] overflow-hidden">
      {/* Diagonal background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-100 -skew-y-6 origin-top-left"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="text-center mb-20">
  <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-4 drop-shadow-md"
    whileHover={{ scale: 1.02, color: '#FDDC5C' }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: 'spring', stiffness: 250 }}
  >
    What People Are Saying
  </motion.h2>
  <motion.p
    className="text-lg text-[#5C4033] max-w-2xl mx-auto leading-relaxed"
    whileHover={{ scale: 1.01 }}
  >
    Stories from community members, partners, and experts about the impact of Indigenous People Alliance.
  </motion.p>
</div>


        {/* Continuous sliding carousel */}
        <div className="overflow-hidden relative pb-7">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <motion.div
                key={i}
                className="group bg-[#fffaf5] rounded-3xl shadow-xl p-6 min-w-[280px] max-w-[280px] relative border border-yellow-200 hover:border-[#8B4513] transition-colors duration-300"
              >
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2">
                  <MotionImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={80}
                    className="rounded-full w-20 h-20 border-4 border-yellow-400 shadow-lg object-cover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </div>

                <p className="text-[#5C4033] group-hover:text-[#8B4513] mt-16 text-center mb-4 transition-colors duration-300">
                  {testimonial.text}
                </p>
                <div className="text-center">
                  <div className="font-semibold text-yellow-600 group-hover:text-[#8B4513] transition-colors duration-300">
                    {testimonial.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
