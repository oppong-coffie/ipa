"use client";
import { ArrowLeft, BookOpenCheck, Globe2, Users } from "lucide-react";
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
          Futere of Integrating Indigenous Knowledge 🌍
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/f3.webp"
            alt="Indigenous landscape and resilience"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-teal-700" /> 
            Towards Just & Resilient Climate Futures
          </h2>
          <p>
            The conclusion reaffirms that Indigenous and Traditional Knowledge (ITK)
            stands as a living, dynamic system essential to Ghana&opos;s climate resilience.
            Its power lies in its holistic understanding of ecology, governance, and culture.
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="text-neutral-700 leading-relaxed space-y-4">
        <p>
          This exploration underscores the <strong>indispensable role of Indigenous and Traditional Knowledge (ITK)</strong> 
          in navigating the complex challenges of climate change and achieving genuine climate justice in northern Ghana.
          Far from being an outdated relic, ITK represents a dynamic, sophisticated, and empirically grounded system of 
          understanding and adapting to local ecological realities.
        </p>

        <p>
          The practices detailed—spanning local climate monitoring and forecasting systems, 
          climate-resilient agriculture, sustainable water and ecosystem management, 
          and community-based disaster reduction—form a cohesive worldview that has 
          enabled communities in the northern savannah zone to thrive for generations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <Image
            src="/drive2/f2.jpg"
            alt="Climate-resilient agriculture"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/f1.jpg"
            alt="Water and ecosystem management"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/f4.jpeg"
            alt="Community-based governance"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        </div>

        <p>
          Achieving true climate justice requires moving beyond extractive or tokenistic engagement.
          It demands <strong>genuine partnerships</strong> where ITK holders are not mere informants but
          co-creators and decision-makers in climate governance. 🌿
        </p>

        <blockquote className="italic border-l-4 border-teal-500 pl-4 text-neutral-700 mt-3">
          “Sustainability will only endure where wisdom, rights, and collaboration intersect.” — Adapted from IK Inclusion Report
        </blockquote>

        <p>
          Future climate strategies for Ghana must create collaborative spaces that respect the rights,
          knowledge, and agency of Indigenous Peoples and local communities. Addressing systemic barriers,
          supporting intergenerational transmission of knowledge, and fostering mutual respect between
          scientific and traditional paradigms are essential for truly just and resilient climate policies. 🌾
        </p>
      </div>

      {/* Footer Insight */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 flex items-start gap-3">
        <Users className="w-5 h-5 text-teal-700 mt-0.5" />
        <p>
          Moving forward, Ghana&opos;s climate future will be strongest when grounded in both tradition and innovation —
          when local voices lead, and Indigenous knowledge is recognized as an equal pillar of global climate action. 🌍
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
