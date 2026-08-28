"use client";

import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sprout, Users, Building2, HeartHandshake, HandHeart, TreePine, GraduationCap, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import Link from "next/link";

// Dynamically import the MapComponent to avoid SSR error
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const metrics = [
  {
    icon: <Users className="w-6 h-6 text-teal-700" />,
    label: "Farmers Trained",
    value: 120,
  },
  {
    icon: <Building2 className="w-6 h-6 text-teal-700" />,
    label: "Policy Engagements",
    value: 5,
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-teal-700" />,
    label: "Advocacy Groups Formed",
    value: 3,
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-teal-700" />,
    label: "Women Empowered",
    value: 45,
  },
  {
    icon: <Sprout className="w-6 h-6 text-teal-700" />,
    label: "Hives Installed",
    value: 200,
  },
  {
    icon: <Users className="w-6 h-6 text-teal-700" />,
    label: "Workshops Held",
    value: 4,
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-teal-700" />,
    label: "Participants Reached",
    value: 400,
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-teal-700" />,
    label: "Women Trained",
    value: 60,
  },
];

const voluntaryProjects = [
  {
    id: 1,
    title: "Beekeeping & Pollinator Sanctuary",
    category: ".",
    image: "/drive2/bee11.jpeg",
    icon: <Sprout className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    bgGradient: "from-amber-50 to-yellow-100/50 dark:from-amber-950/30 dark:to-zinc-900",
    borderColor: "border-amber-200 dark:border-amber-900/40",
    badgeBg: "bg-amber-100/90 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200",
    description: "Installing sustainable bee hives and planting native nectar flora in rural farming clusters to boost crop pollination and honey yields.",
    location: "Teacher Mante & Eastern Region",
    volunteers: "45 Active Volunteers",
    status: "Ongoing Drive",
    metrics: "200+ Hives Managed",
  },
  {
    id: 2,
    title: "Climate Beyond Borders Caravan",
    category: "Education & Tech",
    image: "/images/climate.jpg",
    icon: <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    bgGradient: "from-teal-50 to-emerald-100/50 dark:from-teal-950/30 dark:to-zinc-900",
    borderColor: "border-teal-200 dark:border-teal-900/40",
    description: "Hosted the multinational Climate Beyond Borders Caravan at IPA-GH’s mother community, Amanokrom, Eastern Region. The engagement brought together indigenous elders, youth climate activists, and community leaders to connect traditional ecological knowledge with cross-border climate advocacy and strengthen grassroots climate action.",
    location: "Amanokrom, Eastern Region",
    metrics: "400+ Youth Reached",
  },
  {
    id: 3,
    title: "Community Entry & Stakeholder Engagement",
    category: "Community Engagement",
    image: "/images/chirf.jpg",
    icon: <HandHeart className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    bgGradient: "from-rose-50 to-orange-100/50 dark:from-rose-950/30 dark:to-zinc-900",
    borderColor: "border-rose-200 dark:border-rose-900/40",
    description: "Conducted a community entry visit to the Chief of Amoma, Nana Djomo Ameyaw IV, to introduce IPA-GH, present the organisation’s development programmes, and establish a strong foundation for community collaboration. The engagement focused on building trust, securing traditional leadership support, and strengthening community ownership of the Indigenous Green Schools (IGS) and Ghana Api-Resilience Fund (GARF) initiatives.",
    location: "Amoma, Bono East Region",
    metrics: "Strong Community Trust",
  },
  {
    id: 4,
    title: "Apiary Set-up",
    category: "Climate Action",
    image: "/images/apiary.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "Supported a farmer in Makyini Mabre, Kintampo South District, to establish a 10-hive apiary through a hands-on, learning-by-doing approach. The farmer participated in site preparation, hive positioning, apiary layout, and installation, building the practical skills and confidence needed to manage the apiary independently.",
    location: "Makyini Mabre, Kintampo South District",
    metrics: "10-Hive Farmer Apiary",
  },
  {
    id: 5,
    title: "Indigenous Green Schools Initiative",
    category: "Education",
    image: "/images/school.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "The Indigenous Green Schools (IGS) Initiative is an innovative, outdoor-based education programme that integrates traditional ecological knowledge, climate change science, and sustainable agriculture to empower rural youth. Through hands-on learning in forests, farms, and natural ecosystems, IGS equips young learners with ecological literacy, critical thinking, and leadership skills to become stewards of their environment.",
    location: "Kintampo South District, Bono East Region",
    metrics: "10-Hive Farmer Apiary",
  },
  {
    id: 6,
    title: "Culture Global Stocktake for Climate Action",
    category: "Education",
    image: "/images/cli.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "Contributed to conversations on the Culture Global Stocktake for Climate Action, highlighting the role of indigenous knowledge, cultural practitioners, artists, creatives, and heritage actors in advancing climate action. The initiative recognizes culture and heritage as important pathways for connecting climate solutions with local knowledge, identity, and community resilience.",
    location: "",
    metrics: "10-Hive Farmer Apiary",
  },
  {
    id: 7,
    title: "SAFE Project – Climate-Resilient Beekeeping",
    category: "Education",
    image: "/images/farmer.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "Supported Mr. Alhassan, the pioneer beekeeper of the SAFE (Safeguarding Livelihoods of Rural Communities from Climate-Induced Disasters) Project in Northern Ghana, to adopt beekeeping as a climate-resilient livelihood. The project provides practical support and monitoring to help rural farmers diversify their incomes while adapting to climate-related challenges.",
    location: "Northern Ghana",
    metrics: "1 Farmer Supported",
  },
  {
    id: 8,
    title: "Farmers’ Day – Supporting Climate-Resilient Farmers",
    category: "Education",
    image: "/images/day.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "Recognized and celebrated farmers across Ghana while highlighting IPA Ghana’s commitment to supporting rural and marginalized farmers through climate resilience, social equity, and sustainable livelihoods. The initiative amplified farmers’ voices and acknowledged their role in sustaining communities and national food systems",
    location: "Ghana",
    metrics: "Farmers Across Ghana",
  },
  {
    id: 9,
    title: "Northern Ghana Climate Action Convergence",
    category: "Education",
    image: "/images/north.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    bgGradient: "from-emerald-50 to-green-100/50 dark:from-emerald-950/30 dark:to-zinc-900",
    borderColor: "border-emerald-200 dark:border-emerald-900/40",
    description: "Convened 45 participants from five regions of Northern Ghana, bringing together youth leaders, farmers, elders, and indigenous voices to strengthen community-driven climate action. The engagement focused on amplifying frontline perspectives, integrating Indigenous Knowledge into climate policy, and developing practical approaches to climate resilience.",
    location: "Northern Ghana",
    metrics: "45 Participants from 5 Regions",
  },
  
];

export default function Impart2Page() {
  return (
    <div className="w-full bg-[#FAFAF7] dark:bg-zinc-950 transition-colors duration-300">
      {/* 🌍 Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] dark:from-zinc-900 dark:to-zinc-950 py-20 lg:py-28 overflow-hidden transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold text-[#D1A054] dark:text-yellow-500 drop-shadow-sm"
          >
            🌍 Our Global Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-[#6B5E4A] dark:text-zinc-400 leading-relaxed"
          >
            Empowering communities with technology, knowledge, and innovation.
          </motion.p>
        </div>
        {/* Subtle gradient decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      {/* 🌍 Impact Summary Section */}
      <section className="py-12 bg-white dark:bg-zinc-900 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-neutral-900 dark:text-zinc-100 mb-10">
          Real Impact in Numbers 📈
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-teal-50 dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-teal-100 dark:border-zinc-700 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-3">
                {m.icon}
              </div>
              <p
                className="text-3xl font-bold text-teal-800 dark:text-teal-400 mt-2"
                suppressHydrationWarning
              >
                <CountUp end={m.value} duration={2.5} separator="," />
                {m.label.includes("Rate") || m.label.includes("Percentage")
                  ? "%"
                  : "+"}
              </p>
              <p className="text-sm text-neutral-600 dark:text-zinc-400 text-center font-medium">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🤝 Voluntary Projects Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto transition-colors duration-300">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-yellow-400 text-xs sm:text-sm font-semibold mb-4"
          >
            <HandHeart className="w-4 h-4 text-amber-600 dark:text-yellow-400 animate-pulse" />
            <span>Grassroots Impact &amp; Volunteer Initiatives</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-zinc-100 tracking-tight"
          >
            🤝 Voluntary Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base md:text-lg text-neutral-600 dark:text-zinc-400 leading-relaxed font-light"
          >
            Driven by passionate volunteers, community leaders, and local champions dedicated to advancing sustainable agriculture, indigenous empowerment, and ecological resilience across Ghana.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {voluntaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border ${project.borderColor} shadow-md hover:shadow-2xl transition-all duration-300 group`}
            >
              {/* Project Cover Image */}
              <div className="relative w-full h-52 sm:h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                
                {/* Category & Status Badges on image top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="p-2.5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
                    {project.icon}
                  </div>
             
                </div>

                {/* Location & Metrics on image bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium z-10">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-mono">
                    📍 {project.location}
                  </span>
                  <span className="bg-amber-500/90 backdrop-blur-md text-zinc-950 font-bold px-3 py-1 rounded-full shadow-sm">
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-zinc-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-neutral-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 dark:from-amber-600 dark:via-yellow-600 dark:to-amber-700 text-zinc-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
              Want to Join or Sponsor a Voluntary Project?
            </h3>
            <p className="text-zinc-900/90 text-sm md:text-base max-w-xl font-medium">
              Whether you are a volunteer, partner, or community advocate, your support directly empowers sustainable agriculture and rural development.
            </p>
          </div>
          <Link
            href="/pages/contactus"
            className="px-7 py-3.5 rounded-2xl bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-sm md:text-base shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Get Involved Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* 🌍 Map Section */}
      <section className="bg-gradient-to-tr from-[#F5F0E5] to-[#EDEAE3] dark:from-zinc-900 dark:to-zinc-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4B4B4B] dark:text-yellow-500 mb-10">
            🗺️ Explore Our Impact Across Regions
          </h2>
          <div className="h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
