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
                      src="/images/agric.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <h2 className="text-white text-lg font-semibold leading-tight drop-shadow">
                        Exciting News Headline
                      </h2>
                      <p className="text-amber-400 text-xs font-medium uppercase tracking-wide mt-1">
                        Discover the latest updates on sustainable farming
                        projects and how technology is shaping the future of
                        agriculture.
                      </p>
                    </div>
                  </div>
                </article>
                </Link>
               
              </div>

              {/* Right mini card */}
              <div>
                <article className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/agric.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                      <h3 className="text-white text-sm font-semibold drop-shadow">
                        Exciting News Headline 3
                      </h3>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      Discover the latest updates on sustainable farming
                      projects and how technology is shaping the future of
                      agriculture.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Bottom grid cards */}
            <div className="grid grid-cols-3 gap-4">
                <article
                  className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/agric.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Discover the latest updates on sustainable farming
                      projects
                    </h3>
                  </div>
                </article>
                <article
                  className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/agric.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Discover the latest updates on sustainable farming
                      projects
                    </h3>
                  </div>
                </article>
                <article
                  className="border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src="/images/agric.jpg"
                      alt="Agricultural Project"
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-neutral-800">
                      Discover the latest updates on sustainable farming
                      projects
                    </h3>
                  </div>
                </article>
            </div>
          </div>
        </div>

        {/* Right small info box (1 column) */}
          <article className="border border-neutral-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
            {/* Image section with text overlay */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/images/agric.jpg"
                alt="Agricultural Project"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient and text */}
              <div className="absolute inset-9 flex flex-col justify-end">
                      <h2 className="text-white text-lg font-semibold leading-tight drop-shadow">
                        Exciting News Headline
                      </h2>
                      <p className="text-amber-400 text-xs font-medium uppercase tracking-wide mt-1">
                        Discover the latest updates on sustainable farming
                        projects and how technology is shaping the future of
                        agriculture.
                      </p>
                    </div>
            </div>
          </article>
      </section>

      <section className="flex flex-wrap justify-center gap-6 p-6 bg-gradient-to-br from-amber-50 to-white">
        {/* Card 1 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/images/agric.jpg"
              alt="Agricultural Project"
              width={500}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-4">
            <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
              Discover the latest updates on sustainable farming projects
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/images/agric.jpg"
              alt="Empowering local farmers"
              width={500}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-4">
            <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
              Empowering local farmers with digital tools and innovation
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/images/agric.jpg"
              alt="Climate Smart Agriculture"
              width={500}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-4">
            <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
              How climate-smart agriculture is reshaping communities
            </p>
          </div>
        </article>

        {/* Card 4 */}
        <article className="w-full sm:w-[48%] lg:w-[23%] bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="/images/agric.jpg"
              alt="Youth initiatives"
              width={500}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-4">
            <p className="text-base font-semibold text-neutral-800 leading-snug group-hover:text-amber-700 transition-colors duration-300">
              Youth-led initiatives driving agri-tech transformation
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
