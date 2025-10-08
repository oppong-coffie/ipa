import React from "react";
import Image from "next/image";
import { ArrowLeft, Leaf, BookOpen, Mail } from "lucide-react";
import Link from "next/link";

const Blog1: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
        {/* START:: Main content area */}
        
    <div className="col-span-3 space-y-6 relative">
      {/* Back Button */}
      <Link
        href="/pages/news"
        className="inline-flex items-center text-neutral-600 hover:text-yellow-700 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to News Home
      </Link>

      {/* Title */}
      <div className="flex items-center gap-3">
        {/* <Bee className="w-7 h-7 text-yellow-600" /> */}
        <h1 className="text-3xl font-bold text-neutral-900">
          Impacts of Beekeeping in Indigenous Communities 🐝
        </h1>
      </div>

      {/* Two sub-boxes side by side */}
      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Main Image */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/drive2/bee1.jpeg"
            alt="Indigenous women beekeepers"
            width={500}
            height={300}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Summary Text */}
        <div className="md:w-1/2 rounded-lg p-4 text-neutral-700 leading-relaxed">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-green-600" /> 
            Beekeeping: A Climate-Resilient Livelihood
          </h2>
          <p>
            In Ghana$opos;s Bono East region, Indigenous women are embracing beekeeping
            as a sustainable and climate-resilient livelihood. This research highlights
            how gender roles shape access to resources and economic outcomes, revealing
            both barriers and opportunities for women in the sector.
          </p>
        </div>
      </div>

  

      {/* Description */}
      <div className="text-neutral-700 leading-relaxed space-y-4">
        <p>
          Conducted in the rural community of <strong>Amoma</strong> (Bono East Region),
          this study explored how beekeeping affects household income through a gendered lens.
          Using qualitative interviews and focus group discussions, the research revealed
          that while men control hive ownership and market access, women—though owning fewer hives—
          often achieve higher productivity and income efficiency.
        </p>

        <p>
          Analysis via <em>NVivo software</em> exposed deep gendered inequalities shaped by
          traditional structures of power and labor division. The findings emphasize that
          beekeeping can only be truly transformative if interventions are gender-sensitive—
          offering women access to training, credit, and income control.
        </p>

        <p>
          Such empowerment ensures that climate-resilient livelihoods contribute to both
          ecological adaptation 🌱 and equitable economic development 💪—uplifting
          marginalized voices in the face of climate adversity.
        </p>
      </div>

          {/* START::Sub-images section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <Image
          src="/drive2/bee2.jpg"
          alt="Beehives"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
    
        <Image
          src="/drive/d (11).jpg"
          alt="Honey extraction process"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
        <Image
          src="/drive/d (13).jpg"
          alt="Community meeting"
          width={300}
          height={200}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
            <Image
          src="/drive/p.jpg"
          alt="Indigenous women farmers"
          width={300}
          height={100}
          className="rounded-md object-cover shadow-sm hover:scale-105 transition-transform"
        />
      </div>
                {/* END::Sub-images section */}


      {/* START:: Author & Organization */}
      <div className="mt-6 border-t pt-4 text-sm text-neutral-700 space-y-1">
        <h3 className="font-semibold flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-yellow-700" /> 
          Research Information
        </h3>
        <p>
          <strong>Organization:</strong> Indigenous People Alliance Ghana, P.O.Box AF 79, Adenta-Accra
        </p>
        <p>
          <strong>Lead Author:</strong> Lord Offei-Darko (
          <a href="mailto:lord@ipagh.org" className="text-blue-600 underline">
            lord@ipagh.org
          </a>
          )
        </p>
        <p>
          <strong>Co-authors:</strong> Jacqueline Okine (
          <a href="mailto:jacqueline@ipagh.org" className="text-blue-600 underline">
            jacqueline@ipagh.org
          </a>
          ), David Djangmah Tawiah (
          <a href="mailto:david@ipagh.org" className="text-blue-600 underline">
            david@ipagh.org
          </a>
          )
        </p>
      </div>
            {/* END:: Author & Organization */}

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
          <article className="bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
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
        </div>
        {/* END:: Right Side */}


      </div>
    </div>
  );
};

export default Blog1;
