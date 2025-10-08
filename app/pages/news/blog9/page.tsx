"use client";
import { ArrowLeft, BookOpen, Landmark, Users, Sprout } from "lucide-react";
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
            <BookOpen className="w-7 h-7 text-teal-700" />
            <h1 className="text-3xl font-bold text-neutral-900">
              Lobbying Strategies for Climate-Affected Farmers 🌍
            </h1>
          </div>

          {/* Hero */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/drive2/lop2.jpg"
                alt="Farmers in Klotekpo"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Landmark className="w-5 h-5 text-teal-700" />
                Klotekpo, Volta Region
              </h2>
              <p>
                Conducted by researchers from the University of Ghana, this
                study highlights how rural farmers in Klotekpo—whose livelihoods
                depend on rain-fed agriculture—are organizing and lobbying for
                climate-responsive agricultural policies that reflect their
                lived realities.
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="text-neutral-700 leading-relaxed space-y-4">
            <p>
              Klotekpo farmers rely on rain-fed agriculture and are highly
              exposed to erratic rainfall and drought. This study introduces
              practical lobbying strategies to help them advocate for
              irrigation, input access, and fair representation in climate
              policies.
            </p>

            <p>
              Using interviews and participatory workshops, the researchers
              found that unpredictable weather patterns have led to{" "}
              <strong>reduced yields</strong> and{" "}
              <strong>food insecurity</strong>. Farmers often lack awareness of
              government initiatives and depend on informal networks for
              information — highlighting a critical communication gap with
              policymakers.
            </p>

            <blockquote className="italic border-l-4 border-teal-500 pl-4">
              “Climate justice begins where local farmers find their collective
              voice.” — Lord Offei-Darko
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
              <Image
                src="/drive2/lob4.jpg"
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
                src="/drive2/lob3.jpg"
                alt="Participant group"
                width={400}
                height={250}
                className="rounded-lg object-cover shadow-sm"
              />
            </div>

            <p>
              Empowering these farmers through training and advocacy ensures
              that climate action is grounded in lived realities — transforming
              vulnerability into resilience across Ghana’s rural heartlands. 🌾
            </p>
          </div>
        </div>
        {/* END:: Main content area */}

        {/* START:: Right Side */}
        <div className="col-span-1 bg-neutral-200 rounded-xl shadow-inner p-4">
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
                    Advancing Climate Justice
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
            <Link href="blog5">
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
        </div>
        {/* END:: Right Side */}
      </div>
    </div>
  );
};

export default Blog1;
