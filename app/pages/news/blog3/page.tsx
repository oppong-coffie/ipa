"use client";
import { Lightbulb, Brain, Droplets, Quote, ArrowLeft } from "lucide-react";
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
        <Brain className="w-7 h-7 text-teal-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Methodologies for Uncovering Indigenous Knowledge🧠
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/m1.png"
            alt="Design thinking workshop"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-teal-700" />
            Design Thinking Approaches
          </h2>
          <p>
            The workshop <em>“Best Practices of Indigenous and Traditional Knowledge Inclusion in Climate Justice”</em> 
            adopted innovative design thinking methods — <strong>Opposite Thinking</strong> and <strong>Analogy Thinking</strong> — 
            to surface local wisdom, challenge entrenched assumptions, and spark new ideas for climate adaptation and resilience.
          </p>
        </div>
      </div>

      {/* Section 1: Opposite Thinking */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">Challenging Assumptions through Opposite Thinking 🔄</h2>
        <p>
          Opposite Thinking encouraged participants to identify and reverse commonly held beliefs about Indigenous and 
          Traditional Knowledge (ITK) in climate adaptation. By flipping assumptions, new insights and locally relevant 
          solutions emerged from the community itself.
        </p>

      

        <div className="bg-white border-l-4 border-teal-500 p-4 shadow-sm">
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li><strong>Unpredictable rains</strong> — Planting schedules no longer match delayed wet seasons, leading to failed crops.</li>
            <li><strong>Seed and soil challenges</strong> — Farmers note that indigenous seeds are more resilient than imported hybrid/GMO types.</li>
            <li><strong>Pests and nutrition</strong> — Lower yields mean poorer diets, aligning with UNDP’s findings on malnutrition among vulnerable communities.</li>
          </ul>
        </div>

        <blockquote className="italic border-l-4 border-teal-600 pl-4 text-neutral-700 mt-3">
          “Our knowledge is like the roots of the Baobab tree.” — Elder participant, Northern Ghana 🌳
        </blockquote>
      </div>

      {/* Section 2: Analogy Thinking */}
      <div className="space-y-4">
       
      

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <Image
            src="/drive2/m2.png"
            alt="Traditional water management"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        
          <Image
            src="/drive2/8.jpg"
            alt="Knowledge sharing and adaptation"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        </div>

        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-2">Lessons Learned 📘</h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-1">
            <li>Local ITK reveals deep understanding of <strong>hydrology</strong> and equitable water distribution.</li>
            <li>Traditional systems model <strong>decentralized knowledge management</strong> and community-led resilience.</li>
            <li><strong>Diversity and sharing</strong> are key to agricultural adaptation and sustainability in Northern Ghana.</li>
          </ul>
        </div>

        <blockquote className="italic border-l-4 border-teal-500 pl-4 text-neutral-700 mt-3">
          “Forefathers sowed seeds and got bountiful harvests regardless of soil quality — today’s hybrid seeds fail without predictable rains.”
        </blockquote>
      </div>

      {/* Footer Insight */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700">
        <p>
          This participatory design approach demonstrates how <strong>Indigenous Knowledge (IK)</strong> can guide equitable climate justice
          policies when communities lead the problem-solving process. 🌾
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
