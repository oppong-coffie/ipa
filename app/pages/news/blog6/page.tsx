"use client";

import { ArrowLeft, BookText, Users, Building2, Leaf } from "lucide-react";
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
        <BookText className="w-7 h-7 text-teal-700" />
        <h1 className="text-3xl font-bold text-neutral-900">
          Indigenous and Traditional Knowledge in Climate Justice
        </h1>
      </div>

      {/* Hero Row */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/intro1.png"
            alt="IPA-GH Climate Workshop"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-teal-700" />
            Lessons from Southern Ghana
          </h2>
          <p>
            IPA-GH is a youth-led NGO empowering marginalized and indigenous communities across Ghana.
            The organization promotes sustainable livelihoods and inclusive climate justice for low-income,
            ethnic minority, and climate-vulnerable populations. For more information:{" "}
            <a href="mailto:info@ipagh.org" className="text-teal-700 underline">
              info@ipagh.org
            </a>
            .
          </p>
        </div>
      </div>

      {/* Section 1: Workshop Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">
          Workshop Overview 🧭
        </h2>
        <p>
          The <em>“Best Practices of Indigenous and Traditional Knowledge Inclusion in Climate Justice”</em> workshop,
          funded by the <strong>Youth Climate Justice Fund</strong> under the Marginalized Group Empowerment for Climate Justice Project,
          brought together community leaders, policy experts, and youth advocates to co-create solutions for inclusive climate action.
        </p>
        <p>
          Recognizing that indigenous communities possess rich ecological wisdom honed through generations,
          the event sought to integrate <strong>Indigenous and Traditional Knowledge (ITK)</strong> into national climate policies
          and promote <strong>Indigenous leadership</strong> over token consultation.
        </p>

      

        <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
          <h3 className="font-semibold text-teal-800 mb-2">Special Appreciation 🙌</h3>
          <p className="text-sm text-neutral-700">
            The success of the workshop was made possible by the contributions of participants such as
            Patience Agyekum, Pearl Awudor, George Quinaoo, Ibrahim Latif, Akosua Korang, Doris Dzafeda,
            Diana Akorsu, Samuel Dzafeda, Ezekiel Satanga, Patricia Quayson, David Dantina, Azumah Samuel,
            and many others who shared lived experiences and community wisdom.
          </p>
        </div>
      </div>

      {/* Section 2: Foreword */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-neutral-800">Foreword 🌿</h2>
        <p>
          The Earth&opos;s climate system is experiencing unprecedented fluctuations driven largely by human activity.
          Scientific consensus from the <strong>Intergovernmental Panel on Climate Change (IPCC)</strong> confirms that
          industrialization and fossil fuel dependence have accelerated greenhouse gas accumulation, causing
          widespread warming, drought, and extreme weather.
        </p>
        <p>
          In Ghana, climate change directly threatens agriculture, water resources, and health systems.
          The workshop&opos;s foreword stresses the need for inclusive strategies that go beyond scientific and technical fixes
          to embrace <strong>ethical, social, and cultural dimensions</strong> of climate justice.
        </p>
        <blockquote className="italic border-l-4 border-teal-600 pl-4 text-neutral-700">
          “Climate justice is not only about emissions — it’s about fairness, equity, and the right to thrive in a changing world.” 🌎
        </blockquote>
      </div>

   

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <Image
            src="/drive2/intro2.png"
            alt="Workshop session"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/intro3.png"
            alt="Community collaboration"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
          <Image
            src="/drive2/intro4.png"
            alt="Participant group"
            width={400}
            height={250}
            className="rounded-lg object-cover shadow-sm"
          />
        </div>

      {/* Footer Insight */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 flex items-start gap-3">
        <Leaf className="w-5 h-5 text-teal-700 mt-0.5" />
        <p>
          This report reinforces that achieving climate justice requires inclusive collaboration,
          scientific-traditional synergy, and the amplification of indigenous leadership.
          Ghana&opos;s sustainable future depends on valuing both innovation and heritage. 🌾
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
