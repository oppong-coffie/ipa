"use client";

import { ArrowLeft, Sprout, Users, Droplets } from "lucide-react";
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
            <Sprout className="w-7 h-7 text-teal-700" />
            <h1 className="text-3xl font-bold text-neutral-900">
              Beelieve Smart Project — Teacher Mante 🐝
            </h1>
          </div>

          {/* Hero */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/drive2/beeleive1.jpeg"
                alt="Beekeeping training at Teacher Mante"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="md:w-1/2 p-5 rounded-lg text-neutral-700">
              <h2 className="text-xl font-semibold mb-1">
                Eastern Region, Ghana — 2023
              </h2>
              <p>
                In the growing town of <strong>Teacher Mante</strong>, the
                Beelieve Smart project is training young farmers and women in
                climate-smart beekeeping to promote sustainable livelihoods and
                food security.
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="text-neutral-700 leading-relaxed space-y-4">
            <p>
              Located near Nsawam, Teacher Mante benefits from fertile land and
              proximity to Accra. The local economy thrives on both farming and
              trade, with major crops including pineapple, cassava, and oranges.
              However, the community still faces challenges related to access to
              potable water, sanitation, and youth employment.
            </p>

            <p>
              The <strong>Beelieve Smart project</strong> introduces beekeeping
              and honey production as a sustainable alternative livelihood.
              Participants learn how pollination improves crop yields while
              earning income from honey, wax, and propolis. The approach
              emphasizes gender equity and youth inclusion, empowering locals to
              become both environmental stewards and entrepreneurs.
            </p>

            <blockquote className="italic border-l-4 border-teal-600 pl-4">
              “Every hive built in Teacher Mante is more than a box for bees —
              it’s a promise of resilience and independence.” — Project Mentor
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4">
              {[
                "beeleive2.jpg",
                "beeleive3.jpg",
                "beeleive4.jpg",
                "beeleive6.jpg",
              ].map((img) => (
                <Image
                  key={img}
                  src={`/drive2/${img}`}
                  alt="Beelieve Smart project"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover shadow-sm"
                />
              ))}
            </div>

            <p>
              Through collaboration with local leaders, the initiative aims to
              build a circular, self-sustaining beekeeping enterprise that
              supports youth innovation, promotes biodiversity, and strengthens
              community resilience in the face of climate change. 🌍
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t pt-4 text-sm text-neutral-700 flex items-start gap-2">
            <Users className="w-5 h-5 text-teal-700 mt-0.5" />
            <p>
              Publication: <em>(under review)</em> — A project by the Beelieve
              Smart Initiative, fostering inclusive and sustainable development
              in Eastern Ghana.
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
            <Link href="blog6">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src="/drive2/intro1.png"
                  alt="Agricultural Project"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="text-white text-sm font-semibold drop-shadow">
                    Indigenous and Traditional Knowledge in Climate Justice
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
