"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, BookOpen, Leaf, ArrowRight } from "lucide-react";

const BlogCOP30: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 bg-[#FDFBF7]">
        {/* MAIN CONTENT AREA */}
        <div className="col-span-4 space-y-6 relative">
          {/* Back Button */}
          <Link
            href="/pages/news"
            className="inline-flex items-center text-neutral-600 hover:text-yellow-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News Home
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-neutral-900"
          >
            Beléms Crucible: Indigenous Demands for the Amazon COP30 🌎
          </motion.h1>

          {/* Image + Summary */}
          <div
            className="flex flex-col md:flex-row gap-4 items-start"
            data-aos="fade-up"
          >
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-m">
              <Image
                src="/drive2/cop3.png"
                alt="COP30 Amazon Summit"
                width={600}
                height={300}
                className="w-full h-64 object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="md:w-1/2 rounded-lg p-4 text-neutral-700 leading-relaxed">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Indigenous Leadership at the Center
              </h2>
              <p className="text-justify text-xl leading-relaxed text-neutral-700 pt-4">
                The upcoming COP30 in Belém, in the Brazilian Amazon, has been
                dubbed the People&apos;s COP, creating immense expectations for
                Indigenous Peoples and other marginalized groups who are on the
                front lines of the climate crisis. 
              </p>
            </div>
          </div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-neutral-700 leading-relaxed space-y-4"
          >
            <p className="text-justify text-xl leading-relaxed text-neutral-700 pt-4">
            For the first time, this
                critical global summit is hosted in the Amazon, a biome vital to
                global climate stability and home to millions of Indigenous
                Peoples and Local Communities (IPLCs). Drawing on momentum from
                COP29, where Indigenous leaders launched the Indigenous Peoples&apos;
                Troika to strengthen participation across COPs, the clear demand
                for COP30 is a decisive shift from pledges to concrete,
                rights-based, and locally-led action that directly addresses the
                disproportionate impacts of climate change on vulnerable
                populations.
            </p>

            <p className="text-justify text-xl leading-relaxed text-neutral-700 pt-4">
              At the IWGIA booth in Baku, Azerbaijan, a discussion featuring the
              Founder of Indigenous People Alliance Ghana emphasized that true
              climate justice requires a structural transformation — recognizing
              Indigenous rights, equitable climate finance, and authentic
              participation in decision-making.
            </p>

            <h3 className="text-xl font-semibold text-green-700 mt-6">
              🌿 Recognition of Territorial Rights as Climate Action
            </h3>
            <motion.p
  data-aos="fade-up"
  transition={{ duration: 0.6 }}
  className="text-neutral-700 leading-relaxed"
>
  A primary and urgent expectation is the{" "}
  <span className="font-semibold">
    formal and legal demarcation and protection of Indigenous Lands (ILs)
  </span>{" "}
  and territories by states. Studies consistently show that
  <span className="italic text-emerald-700 pl-2">
    Indigenous-managed lands are the world&apos;s most effective carbon sinks
  </span>
  , making territorial protection one of the most cost-effective mitigation
  and biodiversity strategies available. IPLCs are demanding that the protection
  of their territories be explicitly recognized within national climate plans,
  or{" "}
  <strong className="text-yellow-700">
    Nationally Determined Contributions (NDCs)
  </strong>
  , of the host country Brazil and other nations.{" "}
  <span className="font-medium text-neutral-800">
    This is viewed not as an act of charity, but as a crucial global climate and
    biodiversity policy.
  </span>
</motion.p>


            <h3 className="text-xl font-semibold text-yellow-700 mt-6">
              💰 Direct Climate Finance and Ending Green Colonialism
            </h3>
            <motion.p
  data-aos="fade-up"
  transition={{ duration: 0.7 }}
  className="text-neutral-700"
>
    Marginalized groups
  are demanding{" "}
    direct, accessible, and rights-based climate finance
  that bypasses complex institutional requirements and intermediary{" "}
  <em className="text-neutral-800">&quot;gatekeepers.&quot;</em>  
  Initiatives like the{" "}
  <strong className="text-emerald-700">
    Tropical Forest Forever Facility (TFFF)
  </strong>
  , which will be launched at COP30 and proposes reserving at least{" "}
  <span className="text-yellow-700 font-medium">20% of its funds</span> for IPLCs,
  set a new global benchmark for equitable finance mechanisms.
  <br />
  <br />
  <span className="font-semibold text-neutral-800">
    Critically,
  </span>{" "}
  there&apos;s a strong call to regulate and halt funding for extractive activities —
  such as{" "}
  <span className="text-red-600 font-semibold">fossil fuel</span> and
  <span className="text-red-600 font-semibold">mining projects</span> —
  occurring in or near Indigenous territories, often framed as
  <em className="text-neutral-800">`sustainable development`</em> or
  <em className="text-neutral-800"> green colonialism.</em>  
  The message is clear:<br />
    true climate transition cannot be built on the destruction of Indigenous
    livelihoods and cultures.<br />
</motion.p>


            <h3 className="text-xl font-semibold text-emerald-700 mt-6">
              🗣 Meaningful Participation and Institutional Power
            </h3>
            <p>
              Inclusion must translate into meaningful decision-making power.
              COP30 needs to strengthen the role of the Local Communities and
              Indigenous Peoples Platform (LCIPP) and its Facilitative Working
              Group (FWG)—which had its mandate renewed at COP29. Beyond this,
              IPLCs are demanding full and effective participation, including
              co-presidency in decision-making, and securing the right to Free,
              Prior, and Informed Consent (FPIC) for any measure affecting their
              lands or cultures. Brazil has shown positive intent by creating
              the International Indigenous Commission as part of its &quot;People&apos;s
              Circle' leadership, but the expectation is for this to translate
              into influence on core negotiation outcomes, not just side events.
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-6">
              ⚖️ Indigenizing the Rulebook & Just Transition
            </h3>
              <p>
                Finally, COP30 is expected to &quot;Indigenize the Rulebook&quot;, enriching
                the Paris Agreement with Indigenous contributions, particularly in
                defining global adaptation indicators under the Global Goal on
                Adaptation (GGA). The Just Transition Work Programme must ensure
                that the global shift to a low-carbon economy guarantees that
                marginalized groups, who are already disproportionately harmed,
                are not further disadvantaged by transition policies. The
                consensus is that climate justice can only be achieved by fully
                recognizing the cultural and territorial rights of all Indigenous
                Peoples and other structurally excluded groups, like women and
                youth, placing their traditional knowledge and leadership at the
                very center of the global climate response.
              </p>
          </motion.div>

          {/* Sub-images */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4"
            data-aos="fade-up"
          >
            {[
              "/drive2/cop4.png",
              // "/drive2/indigenous1.jpg",
              // "/drive2/indigenous2.jpg",
              // "/drive2/forest.jpg",
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-sm"
              >
                <Image
                  src={img}
                  alt={`COP30 sub image ${i + 1}`}
                  width={300}
                  height={200}
                  className="rounded-md object-cover hover:opacity-90 transition-all"
                />
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center mt-6"
          >
            <Link
              href="https://docs.google.com/document/d/1qxuwD4JyNSarYlT0as4f5iMaHUTIllTLEYvoz24Z7hw/edit?pli=1&tab=t.0#heading=h.7m5j1rz4d1kd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-full font-semibold shadow-md hover:bg-yellow-700 transition-all duration-300"
            >
              Read Full News
              <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
            </Link>
          </motion.div>

          {/* Author */}
          <motion.div
            data-aos="fade-up"
            className="mt-6 border-t pt-4 text-sm text-neutral-700 space-y-1"
          >
            <h3 className="font-semibold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-yellow-700" />
              Author Information
            </h3>
            <p>
              <strong>Author:</strong> Lord Offei-Darko (
              <a
                href="mailto:lord@ipagh.org"
                className="text-blue-600 underline"
              >
                lord@ipagh.org
              </a>
              )
            </p>
            <p>
              <strong>Affiliation:</strong> Founder & CEO, Indigenous People
              Alliance Ghana
            </p>
            <p>
              <strong>Event:</strong> Discussion at IWGIA Booth — COP29, Baku,
              Azerbaijan
            </p>
          </motion.div>
        </div>

        {/* SIDEBAR */}
        {/* <div
          className="col-span-1 bg-neutral-200 rounded-xl shadow-inner p-4"
          data-aos="fade-left"
        >
          <h3 className="text-lg font-semibold text-neutral-800 mb-3">
            Related Stories 📚
          </h3>
          {[
            {
              href: "blog1",
              src: "/drive2/bee1.jpeg",
              title: "Beelieve Smart Project — Teacher Mante",
            },
            {
              href: "blog2",
              src: "/drive2/j1.png",
              title: "Indigenous Knowledge & Climate Justice",
            },
            {
              href: "blog5",
              src: "/drive2/f3.webp",
              title: "Future of Integrating Indigenous Knowledge",
            },
          ].map((post, i) => (
            <motion.article
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-neutral-200 mb-7 rounded-2xl shadow-md hover:shadow-lg overflow-hidden relative group"
            >
              <Link href={post.href}>
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={post.src}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-white text-sm font-semibold drop-shadow">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BlogCOP30;
