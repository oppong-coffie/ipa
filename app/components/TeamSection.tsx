"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Lord Offei-Darko",
      position: "Youth Officer",
      image: "/images/team7.png",
    },
    {
      name: "David D. Tawiah",
      position: "Team Member",
      image: "/images/team21.jpg",
    },
    {
      name: "Gabriel O. Akyaw",
      position: "Team Member",
      image: "/images/team31.jpg",
    },
    {
      name: "Hilda Darko",
      position: "Communications Officer",
      image: "/images/team6.png",
    },
    {
      name: "Ekow Freeman",
      position: "Media officer",
      image: "/images/team81.jpg",
    },
    {
      name: "Jacqueline Okine",
      position: "Knowledge & Impact Officer",
      image: "/resolve/jack.jpg",
    },
    {
      name: "Emmanuel Oppong Oppong",
      position: "Software Engineer",
      image: "/images/me2.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/teamwork41.jpg"
          alt="Teamwork"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Meet the Change Makers
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
              The dedicated individuals behind our mission to empower
              communities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#2D241E] dark:text-[#A78B60] mb-6"
          >
            Our Dedicated Team
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-yellow-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#5C4033] dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Passionate professionals driving impact across Ghana&apos;s
            indigenous communities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 dark:border-zinc-800"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-medium text-sm tracking-wide uppercase">
                    {member.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-20">
          <motion.a
            href="/pages/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#8B7D6B] dark:bg-zinc-800 rounded-full shadow-lg hover:bg-[#7A6B5A] dark:hover:bg-zinc-700 hover:shadow-xl transition-all duration-300 group"
          >
            <span>View Full Team</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
