"use client";

import { ArrowLeft, Globe2, BookOpenCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog1: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">

        {/* START:: Main content area */}
        <div className="col-span-3 space-y-8">
      {/* Back Button */}
      <Link
        href="/pages/news"
        className="inline-flex items-center text-neutral-600 hover:text-teal-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to News Home
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3">
        <BookOpenCheck className="w-7 h-7 text-teal-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Advancing Climate Justice
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/climate1.jpeg"
            alt="Community collaboration and resilience"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-teal-700" />
            Integrating Local Wisdom for a Just Climate Future
          </h2>
          <p>
            Indigenous and Traditional Knowledge (ITK) remains an invaluable pillar in addressing the
            intertwined crises of climate change and social inequity. Its holistic worldview unites ecology,
            community, and justice — offering pathways toward sustainable resilience. 🌍
          </p>
        </div>
      </div>

      {/* Conclusion Text */}
      <div className="text-neutral-700 leading-relaxed space-y-4">
        <p>
          This exploration underscores the <strong>profound and indispensable role of Indigenous and Traditional Knowledge (ITK)</strong> 
          in navigating the complex challenges of climate change and achieving genuine climate justice in Ghana.
          Far from being an outdated relic, ITK represents a dynamic, sophisticated, and empirically grounded
          system of understanding and living sustainably within specific ecological contexts.
        </p>

        <p>
          The practices detailed — including <strong>local climate forecasting, climate-resilient agriculture, sustainable water and ecosystem management,</strong> 
          and <strong>community-based disaster risk reduction</strong> — together form an integrated knowledge system that has enabled
          Ghanaian communities to thrive amid environmental change for generations.
        </p>

        <p>
          Recognizing the validity and power of ITK is only the first step. True climate justice requires moving
          beyond extractive or tokenistic consultation to <strong>genuine partnerships</strong> that respect the rights,
          knowledge, and agency of Indigenous Peoples and local communities.
        </p>

        <blockquote className="italic border-l-4 border-teal-500 pl-4 text-neutral-700">
          “Sustainability thrives where tradition and innovation meet — when Indigenous knowledge leads
          alongside modern science.” 🌾
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
         
        
         <Image
           src="/drive2/risk2.jpeg"
           alt="Mutual aid in recovery"
           width={400}
           height={250}
           className="rounded-lg object-cover shadow-sm"
         />
         <Image
           src="/drive2/risk3.jpg"
           alt="Mutual aid in recovery"
           width={400}
           height={250}
           className="rounded-lg object-cover shadow-sm"
         />
       </div>

        <p>
          The future of climate governance in Ghana depends on the creation of <strong>collaborative spaces</strong> 
          where ITK holders are empowered as <strong>co-creators of climate solutions</strong>. 
          These spaces must be rooted in mutual respect, cultural relevance, and equity, ensuring that 
          policies are both effective and inclusive.
        </p>

        <p>
          Moving forward, it is imperative to <strong>address systemic barriers</strong> that hinder ITK integration,
          while promoting intergenerational knowledge transfer. Such collaboration will forge 
          a climate strategy that is not only resilient but also deeply just — one that truly reflects 
          Ghana&opos;s cultural and ecological wisdom. 🌿
        </p>
      </div>

      {/* Footer Insight */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 flex items-start gap-3">
        <Users className="w-5 h-5 text-teal-700 mt-0.5" />
        <p>
          As Ghana moves forward, Indigenous voices must remain central in shaping its climate future.
          Recognizing ITK as both heritage and innovation is the cornerstone of a fair, resilient, and sustainable tomorrow. 🌍
        </p>
      </div>
    </div>
        {/* END:: Main content area */}

        {/* START:: Right Side */}
        <div className="col-span-1 bg-neutral-200 rounded-xl shadow-inner p-4">
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog2">
              <div className="relative h-32 w-full overflow-hidden">
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
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog7">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/intro4.png"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    Disaster Risk Reduction and Response
                  </h3>
                </div>
              </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog10">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/beeleive1.jpeg"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    Beelieve Smart Project — Teacher Mante
                  </h3>
                </div>
              </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
          <Link href="blog5">
            <div className="relative h-32 w-full overflow-hidden">
              <Image
                src="/drive2/f3.webp"
                alt="Agricultural Project"
                width={500}
                height={300}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2">
                <h3 className="text-white text-sm font-semibold drop-shadow">
                  Futere of Integrating Indigenous Knowledge
                </h3>
              </div>
            </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog4">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/p1.png"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    Discover the latest updates on sustainable farming projects
                  </h3>
                </div>
              </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog3">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/m1.png"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    Methodologies for Uncovering Indigenous Knowledge
                  </h3>
                </div>
              </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog3">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/lop2.jpg"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                  Lobbying Strategies for Climate-Affected Farmers
                  </h3>
                </div>
              </div>
            </Link>
          </article>
          <article className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
            <Link href="blog1">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/bee1.jpeg"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                  Impacts of Beekeeping in Indigenous Communities
                  </h3>
                </div>
              </div>
            </Link>
          </article>
        </div>
        {/* END:: Right Side */}
      </div>
    </div>
  );
};

export default Blog1;
