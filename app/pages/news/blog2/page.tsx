"use client";
import {
  ArrowLeft,
  Globe2,
  Scale,
  Users,
  Handshake,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog1: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">

        {/* START:: Main content area */}
        <div className="col-span-3 space-y-6">
      {/* Back Button */}
      <Link
        href="/climate"
        className="inline-flex items-center text-neutral-600 hover:text-green-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Climate Reports
      </Link>

      {/* Title */}
      <div className="flex items-center gap-3">
        <Scale className="w-7 h-7 text-green-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Indigenous Knowledge & Climate Justice 🌍
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Image */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/j1.png"
            alt="Indigenous knowledge and climate justice"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Handshake className="w-5 h-5 text-green-700" /> 
            Co-Creation & Respect 🌱
          </h2>
          <p>
            Recognizing, respecting, and integrating Indigenous and Traditional Knowledge (ITK)
            is not just beneficial—it&opos;s an ethical cornerstone of climate justice. Doing so upholds
            Indigenous Peoples&opos; rights to self-determination, cultural integrity, and participation
            in decisions affecting their lands and livelihoods.
          </p>
        </div>
      </div>

   

      {/* Content Text */}
      <div className="text-neutral-700 leading-relaxed space-y-4">
        <p>
          Genuine integration of ITK requires moving beyond symbolic consultation toward
          <strong> true co-creation of solutions</strong> and shared leadership in climate
          governance. Communities must not only be heard—they must help design and own the
          outcomes.
        </p>

        <p>
          In northern Ghana, integrating Indigenous knowledge into climate strategies demands
          formal acknowledgment of ITK&opos;s validity alongside scientific approaches. It also means
          addressing entrenched <strong>power imbalances</strong> between local knowledge holders
          and external institutions.
        </p>

        <p>
          Processes should ensure <strong>Free, Prior, and Informed Consent (FPIC)</strong> and
          include mechanisms for equitable benefit-sharing and community ownership of knowledge.
          These principles are essential for fostering reciprocal partnerships and achieving
          inclusive, lasting climate justice. 🌿
        </p>

        <blockquote className="border-l-4 border-green-500 pl-4 italic text-neutral-600">
          “According to UNDP, Indigenous peoples—stewarding roughly 80% of global biodiversity—
          face increasing threats to their lives, livelihoods, and traditional knowledge under
          climate change.”
        </blockquote>
      </div>
         {/* Sub-images */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <Image
          src="/drive2/6.jpg"
          alt="Community discussion"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
        <Image
          src="/drive2/7.jpg"
          alt="Cultural landscape"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
        <Image
          src="/drive2/18.jpg"
          alt="Elders meeting"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
        <Image
          src="/drive2/16.jpg"
          alt="Biodiversity and traditional lands"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
      </div>

      {/* Reference */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 space-y-2">
        <h3 className="font-semibold flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-green-700" /> 
          Reference
        </h3>
        <p>
          Gorjestani, Nicolas. “Indigenous knowledge for development.” In <em>Protecting and
          Promoting Traditional Knowledge: Systems, National Experiences and International
          Dimensions</em>, p. 265 (2004).
        </p>
      </div>
      
    </div>
        {/* END:: Main content area */}

        {/* START:: Right Side */}
        <div className="col-span-1 bg-neutral-200 rounded-xl shadow-inner p-4">
      
        
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
          <article className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
