"use client";

import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Blog1 from "./blog1/page";
import { motion } from "framer-motion";

export default function NewsPage() {
  return (
    <div>
      {/* START:: Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100 rounded-3xl border border-neutral-200 shadow-md overflow-hidden mb-8">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 bg-[url('/patterns/news-bg.svg')] opacity-5"></div>

  {/* Content */}
  <div className="relative z-10 px-8 py-16 flex flex-col items-center text-center space-y-6">
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold text-neutral-800 leading-tight"
    >
      Stay Informed, Stay Empowered 📰
    </motion.h1>

    {/* Supporting Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl text-lg md:text-xl text-neutral-600 leading-relaxed"
    >
      Stay connected with the pulse of our growing community — where stories,
      opportunities, and innovations come together. Discover{" "}
      <span className="text-amber-700 font-semibold">
        insightful blogs, campaign updates, and the latest projects
      </span>{" "}
      shaping our collective impact.
    </motion.p>

    {/* Floating Badges */}
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="bg-white border border-amber-200 px-4 py-2 rounded-full text-amber-700 font-medium shadow-sm"
      >
        🌿 Community Growth
      </motion.span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="bg-white border border-green-200 px-4 py-2 rounded-full text-green-700 font-medium shadow-sm"
      >
        💡 Innovation
      </motion.span>
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="bg-white border border-blue-200 px-4 py-2 rounded-full text-blue-700 font-medium shadow-sm"
      >
        🗞 News & Insights
      </motion.span>
    </div>

  </div>
</section>

      {/* END:: Hero Section */}

      {/* START:: News Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {/* Left major content area (3 columns) */}
        <div className="col-span-3 rounded-2xl shado">
          <div>
            {/* Top section */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Main large card */}
              {/* <div className="col-span-2">
                <Link href="news/blog1">
                  <article className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src="/drive2/cop3.png"
                        alt="Agricultural Project"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <h2 className="text-white text-lg font-semibold leading-tight drop-shadow">
                          Impacts of Beekeeping in Indigenous Communities
                        </h2>
                        <p className="text-amber-400 text-xs font-bold uppercase tracking-wide mt-1">
                          This research highlights how gender roles shape access
                          to resources and economic outcomes, revealing both
                          barriers and opportunities for women in the sector.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div> */}

              {/* Right mini card */}
              <Link href="news/blog1">
                <motion.article
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden relative group cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-56 md:h-64 overflow-hidden">
                    <Image
                      src="/drive2/cop3.png"
                      alt="Indigenous Knowledge & Climate Justice"
                      width={500}
                      height={350}
                      className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
                    />

                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-white text-base md:text-lg font-semibold drop-shadow-md leading-snug">
                        Belém&apos;s Crucible: Indigenous Demands for the Amazon
                        COP30 🌎
                      </h3>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-4">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      For the first time, this critical global summit is hosted
                      in the Amazon, a biome vital to global climate stability{" "}
                    </p>

                    {/* Animated Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex justify-start"
                    >
                      <span className="inline-flex items-center gap-2 text-amber-700 font-medium text-sm hover:text-amber-800 transition-colors">
                        Read Full News →
                      </span>
                    </motion.div>
                  </div>
                </motion.article>
              </Link>
            </div>

            {/* Bottom grid cards */}
            {/* <div className="grid grid-cols-3 gap-4">
              <Link href="news/blog3">
                <article className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/drive2/m1.png"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Methodologies for Uncovering Indigenous Knowledge
                    </h3>
                  </div>
                </article>
              </Link>
              <Link href="news/blog4">
                <article className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/comp.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Promoting the Use of Indigenous Knowledge
                    </h3>
                  </div>
                </article>
              </Link>
              <Link href="news/blog5">
                <article className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/drive2/f3.webp"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Futere of Integrating Indigenous Knowledge
                    </h3>
                  </div>
                </article>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Right small info box (1 column) */}
        {/* <article className="border border-neutral-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden relative"> */}
        {/* Image section with text overlay */}
        {/* <Link href="news/blog6">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/drive2/intro1.png"
                alt="Agricultural Project"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-9 flex flex-col justify-end">
                <h2 className="text-white text-lg font-semibold leading-tight drop-shadow">
                  Indigenous and Traditional Knowledge in Climate Justice
                </h2>
                <p className="text-amber-400 text-xs font-medium uppercase tracking-wide mt-1">
                  Lessons from Southern Ghana
                </p>
              </div>
            </div>
          </Link> */}
        {/* </article> */}
      </section>
      {/* END:: News Section */}

      {/* START:: Blog Section */}
      <section className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-br from-amber-50 to-white">
        {/* Card 1 */}
        {/* <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <Link href="news/blog7">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/drive2/cop3.png"
                alt="Agricultural Project"
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                Disaster Risk Reduction and Response
              </p>
            </div>
          </Link>
        </article> */}
        {/* Card 2 */}
        {/* <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <Link href="news/blog8">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/drive2/climate1.jpeg"
                alt="Empowering local farmers"
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                Advancing Climate Justice 🌿
              </p>
            </div>
          </Link>
        </article> */}
        {/* Card 3 */}
        {/* <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <Link href="news/blog9">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/drive2/lop2.jpg"
                alt="Climate Smart Agriculture"
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                Lobbying Strategies for Climate-Affected Farmers
              </p>
            </div>
          </Link>
        </article> */}

        {/* Card 4 */}
        {/* <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <Link href="news/blog10">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src="/drive2/beeleive1.jpeg"
                alt="Youth initiatives"
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4">
              <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                Beelieve Smart Project — Teacher Mante
              </p>
            </div>
          </Link>
        </article> */}
      </section>
      {/* END:: Blog Section */}
    </div>
  );
}
