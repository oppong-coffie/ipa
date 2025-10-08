"use client";

import { ArrowLeft, ShieldCheck, Droplets, Users, Hammer } from "lucide-react";
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
        <ShieldCheck className="w-7 h-7 text-teal-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Disaster Risk Reduction and Response 🚨
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/intro4.png"
            alt="Community resilience and disaster preparation"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Hammer className="w-5 h-5 text-teal-700" />
            Local Wisdom for Climate Resilience
          </h2>
          <p>
            Indigenous and Traditional Knowledge (ITK) systems offer time-tested strategies for 
            anticipating, responding to, and recovering from disasters. They transform lived experience 
            into early-warning systems, resilience practices, and community solidarity.
          </p>
        </div>
      </div>

      {/* Section 1: Early Warning Systems */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Community-Based Early Warning Systems 🌦️
        </h2>
        <p>
          Local environmental indicators — such as animal behavior, plant flowering, or changes 
          in wind direction — serve as reliable early-warning signs. These signals help communities 
          prepare in advance, whether by moving livestock, securing homes, or protecting crops 
          from floods and storms.
        </p>

      
      </div>

      {/* Section 2: Coping Mechanisms and Mutual Support */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Coping Mechanisms and Mutual Support 🤝
        </h2>
        <p>
          When disasters strike, ITK guides community responses through shared coping mechanisms. 
          Knowledge of wild edibles and traditional water purification methods sustains families 
          during droughts and floods. Community-based support systems ensure that households 
          share resources and care for vulnerable members.
        </p>

        <div className="bg-white border-l-4 border-teal-500 p-4 shadow-sm">
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Identifying and consuming <strong>wild edible plants</strong> during food scarcity.</li>
            <li>Using <strong>plant roots for water purification</strong> in flood-affected regions.</li>
            <li><strong>Community-led safety nets</strong> for shared labor, rebuilding, and emotional recovery.</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Post-Disaster Recovery and Rehabilitation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Post-Disaster Recovery and Rehabilitation 🛠️
        </h2>
        <p>
          After disasters, communities rely on ITK for rebuilding and restoring social cohesion. 
          Traditional construction using local materials offers natural insulation and wind resistance. 
          Rituals and communal activities promote psychological recovery and renew collective identity.
        </p>

        <blockquote className="italic border-l-4 border-teal-600 pl-4 text-neutral-700">
          “When the earth cracks, we rebuild together — stone by stone, heart by heart.” — Local Elder, Northern Ghana
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
         
        
          <Image
            src="/drive2/risk2.jpeg"
            alt="Mutual aid in recovery"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Section 4: The Importance of Recognizing Local DRR Strategies */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Recognizing and Supporting Local DRR Strategies 🌾
        </h2>
        <p>
          These community-led disaster risk reduction practices are often collective, sustainable, 
          and deeply rooted in place-based knowledge. Recognizing, documenting, and integrating 
          them into formal policy frameworks enhances national disaster preparedness while 
          honoring cultural resilience.
        </p>
      </div>

      {/* Footer Insight */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 flex items-start gap-3">
        <Users className="w-5 h-5 text-teal-700 mt-0.5" />
        <p>
          Indigenous Knowledge offers practical, low-cost, and locally appropriate pathways to 
          disaster preparedness and recovery. Supporting these systems is essential to achieving 
          climate resilience and social equity. 🌍
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
