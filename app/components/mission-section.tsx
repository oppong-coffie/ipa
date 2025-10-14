"use client";

import { Card } from "antd";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

const MotionImage = motion(Image);

export function MissionSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const missions = [
    {
      number: "01",
      title: "Climate Resilience",
      description:
        "Helping communities adapt to climate change using traditional knowledge and modern solutions.",
      image: "/resolve/so.jpg",
    },
    {
      number: "02",
      title: "Sustainable Lives",
      description:
        "Creating income opportunities that preserve culture and sustain communities.",
      image: "/drive/d(15).jpg",
    },
    {
      number: "03",
      title: "Social Equity",
      description:
        "Advocating for indigenous rights and representation in decisions.",
      image: "/images/missio.jpg",
    },
    {
      number: "04",
      title: "Cultural Preservation",
      description:
        "Supporting initiatives celebrating indigenous languages, traditions, and practices for next generations.",
      image: "/images/missi.jpg",
    },
  ];

  return (
    <section className="py-20 bg-[#E2D0BA] text-[#3e2723]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#3e2723]">
            Our Core Mission
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#5d4037]">
            We work at the intersection of traditional wisdom and innovative
            solutions to create lasting change in Ghana&apos;s indigenous
            communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.number}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group"
            >
              <Card
                hoverable
                className="border-border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-[#F5EBDD] overflow-hidden"
                cover={
                  <div className="relative">
                    <MotionImage
                      alt={mission.title}
                      src={mission.image}
                      width={800}
                      height={192}
                      className="w-full object-cover rounded-t-lg"
                      whileHover={{
                        scale: 1.05,
                        filter: "brightness(1.1)",
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.2 },
                      }}
                    />

                    {/* Number badge */}
                    <div className="absolute top-3 left-3 bg-[#FACC15] text-[#3e2723] font-bold px-3 py-1 rounded-lg shadow-md text-sm">
                      {mission.number}
                    </div>
                  </div>
                }
              >
                <div className="text-center px-2">
                  <h3 className="text-xl font-semibold text-[#8B7D6B] group-hover:text-[#A67C52] mb-3 transition-colors duration-300">
                    {mission.title}
                  </h3>
                  <p className="text-base text-[#5d4037] group-hover:text-[#8B5E3C] leading-relaxed transition-colors duration-300">
                    {mission.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center flex justify-center mt-16" data-aos="fade-up">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="/pages/about">

            <div className="bg-[#8B7D6B] hover:bg-[#A67C52] border border-[#FACC15] text-[#3e2723] rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-96">
              Learn More About Our Work
            </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
