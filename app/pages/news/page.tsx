"use client";

import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="">
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-neutral-200">
        {/* Left side - Title */}
        <div className="relative flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 tracking-tight">
            📰 Latest News
          </h2>
        </div>

        {/* Right side - Scrolling text */}
        <div className="flex gap-2 flex-wrap justify-center w-full md:w-auto overflow-hidden">
          <div className="w-full whitespace-nowrap overflow-hidden relative">
            <div className="animate-marquee text-amber-700 font-medium text-sm md:text-base">
              🌾 Sustainable farming projects launching soon • 🌍 Empowering
              local farmers • 💡 New agricultural innovations unveiled!
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {/* Left major content area (3 columns) */}
        <div className="col-span-3 rounded-2xl shadow-lg">
          <div>
            {/* Top section */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Main large card */}
              <div className="col-span-2">
                <Link href="news/blog1">
                  <article className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src="/drive2/bee1.jpeg"
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
              </div>

              {/* Right mini card */}
              <Link href="news/blog2">
              <div>
                <article className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/drive2/j1.png"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-2">
                      <h3 className="text-white text-sm font-semibold drop-shadow">
                      Indigenous Knowledge & Climate Justice 
                                           </h3>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-sm text-neutral-600 line-clamp-2">
                    Genuine integration of ITK requires moving beyond symbolic
                     consultation toward true co-creation of solutions
                    </p>
                  </div>
                </article>
              </div>
              </Link>
            </div>

            {/* Bottom grid cards */}
            <div className="grid grid-cols-3 gap-4">
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
            </div>
          </div>
        </div>

        {/* Right small info box (1 column) */}
        <article className="border border-neutral-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
          {/* Image section with text overlay */}
        <Link href="news/blog6">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/drive2/intro1.png"
              alt="Agricultural Project"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />

            {/* Overlay gradient and text */}
            <div className="absolute inset-9 flex flex-col justify-end">
              <h2 className="text-white text-lg font-semibold leading-tight drop-shadow">
              Indigenous and Traditional Knowledge in Climate Justice
              </h2>
              <p className="text-amber-400 text-xs font-medium uppercase tracking-wide mt-1">
              Lessons from Southern Ghana
              </p>
            </div>
          </div>
        </Link>
        </article>
      </section>

      <section className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-br from-amber-50 to-white">
        {/* Card 1 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
        <Link href="news/blog7">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/drive2/intro4.png"
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
        </article>

        {/* Card 2 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
        </article>

        {/* Card 3 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
        </article>

        {/* Card 4 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
        </article>
      </section>
    </div>
  );
}
