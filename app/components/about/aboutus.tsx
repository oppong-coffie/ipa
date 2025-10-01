import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full opacity-30 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B7D6B] rounded-full opacity-10 translate-x-32 translate-y-32"></div>

      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-3xl font-extrabold text-center text-[#8B7D6B] mb-4 drop-shadow-md"
        >
          Grassroots Empowerment 🌱
        </motion.h2>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-[#5B3A1A] max-w-3xl mx-auto leading-relaxed">
          Indigenous People Alliance Ghana (IPA-GH) is a youth-led NGO built on
          a <span className="text-yellow-500 font-semibold">co-creation theory of change</span>. 
          We source youth innovation and co-create solutions with affected groups,
          empowering marginalized and indigenous communities to lead their own 
          <span className="text-yellow-500 font-semibold"> sustainable development</span>.
        </p>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-lg p-6 border border-yellow-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-2xl">
              🌍
            </div>
            <h3 className="text-xl font-bold text-[#8B7D6B] mb-2">Sustainable & Inclusive Impact</h3>
            <p className="text-[#5B3A1A] leading-relaxed">
              Addressing climate change, social inequity and promoting climate justice
              by leveraging local knowledge to design lasting, sustainable solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-lg p-6 border border-yellow-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-[#8B7D6B] mb-2">Co-Creation with Communities</h3>
            <p className="text-[#5B3A1A] leading-relaxed">
              Partnering with women, youth and indigenous groups to co-create
              solutions — because those who face the problems have the power to solve them.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-3xl shadow-lg p-6 border border-yellow-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold text-[#8B7D6B] mb-2">Empowering Local Leaders</h3>
            <p className="text-[#5B3A1A] leading-relaxed">
              Building capacity of community members so they become active
              participants in social inclusion efforts and drivers of change.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action */}
        <motion.div whileHover={{ scale: 1.02 }} className="text-center mt-12">
          <p className="text-xl md:text-2xl text-[#8B7D6B] font-semibold">
            Join our mission and become part of a community that values{" "}
            <span className="text-yellow-500">equity</span>,{" "}
            <span className="text-yellow-500">sustainability</span> and{" "}
            <span className="text-yellow-500">impact</span>! ✨
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
