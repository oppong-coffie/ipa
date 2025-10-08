"use client";

import { Sprout, Droplets, Trees, ShieldCheck, HeartHandshake, ArrowLeft } from "lucide-react";
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
        className="inline-flex items-center text-neutral-600 hover:text-emerald-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to News Home
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3">
        <ShieldCheck className="w-7 h-7 text-emerald-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Promoting the Use of Indigenous Knowledge 🌱
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/comp.jpg"
            alt="Indigenous farming practices"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-emerald-700" />
            Indigenous Knowledge in Agriculture
          </h2>
          <p>
            Traditional ecological knowledge (TEK) in Ghana represents generations of adaptive strategies.
            Indigenous farmers integrate ecosystem-based methods — agroforestry, composting, and seed
            exchange — to sustain fertility, retain water, and reduce erosion. These “climate-smart” methods
            provide enduring lessons for resilience. 🌾
          </p>
        </div>
      </div>

      {/* Section 1: Sustainable Water Resource Management */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Sustainable Water Resource Management 💧
        </h2>
        <p>
          Northern Ghana$opos;s Indigenous communities have long developed techniques for capturing and storing
          rainwater — from simple rooftop harvesting to community-managed earth dams. Their knowledge of
          landscape hydrology ensures equitable access and water cleanliness through customary governance
          systems.
        </p>


        <div className="bg-white border-l-4 border-emerald-500 p-4 shadow-sm">
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Community ponds and weirs conserve runoff and recharge groundwater.</li>
            <li>Customary rules promote fair usage and maintenance.</li>
            <li>Local governance fosters shared stewardship of scarce resources.</li>
          </ul>
        </div>
      </div>

    

      {/* Section 3: Traditional Ecosystem Management */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-neutral-800">
          <Trees className="w-5 h-5 text-green-700" />
          Traditional Ecosystem Management and Conservation 🌳
        </h2>
        <p>
          ITK in northern Ghana contributes directly to climate mitigation and adaptation. Practices such
          as selective tree harvesting, protection of sacred groves, and fire management safeguard
          biodiversity and enhance carbon sequestration. 🌲
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <Image
            src="/drive2/45.jpg"
            alt="Sacred grove"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/4.jpg"
            alt="Community forest"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/3.jpg"
            alt="Controlled fire management"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        </div>

        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-800 mb-2">Cultural Conservation Practices 🌾</h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Protection of sacred groves as biodiversity sanctuaries.</li>
            <li>Taboos against overharvesting ensure forest regeneration.</li>
            <li>Community fire management reduces wildfire risks.</li>
          </ul>
        </div>
      </div>

      {/* Section 4: Disaster Risk Reduction */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-neutral-800">
          <ShieldCheck className="w-5 h-5 text-amber-700" />
          ITK for Disaster Risk Reduction and Response 🚨
        </h2>
        <p>
          Traditional forecasting — like bird migrations or the flowering of specific plants — acts as a
          natural early-warning system. Communities prepare by storing food, preserving water, and
          relying on wild edibles like baobab leaves during crises. These strategies reduce vulnerability
          and build resilience after climate shocks.
        </p>
        <blockquote className="italic border-l-4 border-amber-500 pl-4 text-neutral-700">
          “Vulnerable groups possess a unique capacity to address global challenges. Their adaptability and
          innovation empower them to create meaningful solutions.” — Lord Offei-Darko, Founder, IPA-GH
        </blockquote>
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
            <Link href="blog8">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/climate1.jpeg"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                  Advancing Climate Justice 🌿
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
                  Promoting the Use of Indigenous Knowledge                  </h3>
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
          <article className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
