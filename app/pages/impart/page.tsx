"use client";

import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sprout,
  Users,
  Building2,
  HeartHandshake,
  HandHeart,
  TreePine,
  GraduationCap,
  ArrowRight,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Tag,
} from "lucide-react";
import CountUp from "react-countup";
import Link from "next/link";

// Dynamically import the MapComponent to avoid SSR error
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const metrics = [
  {
    icon: <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Farmers Trained",
    value: 120,
  },
  {
    icon: <Building2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Policy Engagements",
    value: 5,
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Advocacy Groups Formed",
    value: 3,
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Women Empowered",
    value: 45,
  },
  {
    icon: <Sprout className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Hives Installed",
    value: 25,
  },
  {
    icon: <Users className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Workshops Held",
    value: 4,
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Participants Reached",
    value: 400,
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    label: "Women Trained",
    value: 60,
  },
];

interface VoluntaryProject {
  id: number;
  title: string;
  projectCode: string;
  category: string;
  status: string;
  timeline: string;
  beneficiaries: string;
  location: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  keyDeliverables: string[];
  metricsBadge: string;
  quote: string;
}

const voluntaryProjects: VoluntaryProject[] = [
  {
    id: 1,
    title: "Beekeeping & Pollinator Sanctuary Project",
    projectCode: "GARF-VOL-01",
    category: "Sustainable Livelihoods & Ecology",
    status: "Active Field Drive",
    timeline: "2024",
    beneficiaries: "120+ Rural Farmers & Women Cooperatives",
    location: "Teacher Mante & Eastern Region, Ghana",
    image: "/drive2/bee11.jpeg",
    icon: <Sprout className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    description:
      "Installing high-capacity sustainable bee hives and planting indigenous floral corridors across rural farming clusters to boost crop pollination, restore micro-ecosystems, and generate dependable organic honey revenues.",
    keyDeliverables: [
      "200+ modernized Kenyan top-bar & Langstroth hives installed",
      "Full protective gear and smoker units distributed to youth fellows",
      "Api-Resilience value-chain & organic honey processing workshops",
    ],
    metricsBadge: "200+ Hives Managed",
    quote: "Beekeeping gives our women and youth reliable economic security while protecting our forest corridors.",
  },
  {
    id: 2,
    title: "Climate Beyond Borders Caravan",
    projectCode: "CBC-VOL-02",
    category: "Cross-Border Youth & Climate Advocacy",
    status: "Active Community Campaign",
    timeline: "2026",
    beneficiaries: "400+ Indigenous Youths, Activists & Elders",
    location: "Amanokrom Mother Hub, Eastern Region",
    image: "/images/climate.jpg",
    icon: <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    description:
      "Hosted the multinational Climate Beyond Borders Caravan at IPA-GH’s mother community, Amanokrom. Unites indigenous elders with youth climate activists to bridge ancestral ecological indicators with international climate policy.",
    keyDeliverables: [
      "Intergenerational knowledge transfer sessions with council elders",
      "Grassroots climate adaptation manifesto drafted with youth delegates",
      "Cross-regional climate justice solidarity network established",
    ],
    metricsBadge: "400+ Youth Reached",
    quote: "Ancestral climate wisdom combined with youth digital tools creates an unstoppable advocacy force.",
  },
  {
    id: 3,
    title: "Community Entry & Traditional Leadership Engagement",
    projectCode: "TRAD-GOV-03",
    category: "Chieftaincy Governance & Land Stewardship",
    status: "Institutional Partnership",
    timeline: "2026",
    beneficiaries: "Traditional Council & Amoma Townships",
    location: "Amoma, Bono East Region",
    image: "/images/chirf.jpg",
    icon: <HandHeart className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    description:
      "A landmark community entry protocol conducted with the Chief of Amoma, Nana Djomo Ameyaw IV, securing traditional blessings and customary land allocation for Indigenous Green Schools and Api-Resilience apiary clusters.",
    keyDeliverables: [
      "Formal traditional council endorsement and land allocation",
      "Community stakeholder advisory committee established",
      "Co-creation roadmap for youth green enterprise incubation",
    ],
    metricsBadge: "Chieftaincy Council Endorsement",
    quote: "True grassroots development begins with honoring traditional leadership and customary land tenure.",
  },
  {
    id: 4,
    title: "Farmer Apiary Set-Up & Incubation Program",
    projectCode: "AP-INC-04",
    category: "Agro-Enterprise & Smallholder Support",
    status: "Field Demonstration Phase",
    timeline: "2026",
    beneficiaries: "Smallholder Agrarian Families",
    location: "Makyini Mabre, Kintampo South District",
    image: "/images/apiary.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Equipping local smallholder farmers in Makyini Mabre to establish a pilot 10-hive apiary through a hands-on learning-by-doing model in swarm attraction, colony inspection, and stingless bee colony management.",
    keyDeliverables: [
      "Hands-on site preparation, hive positioning, and shading setup",
      "Practical swarm baiting and pest prevention training",
      "Direct mentorship from seasoned IPA apiary technicians",
    ],
    metricsBadge: "10-Hive Pilot Apiary",
    quote: "Learning by doing builds lifelong self-reliance for rural farming households.",
  },
  {
    id: 5,
    title: "Indigenous Green Schools Initiative (IGS)",
    projectCode: "IGS-EDU-05",
    category: "Ecological Education & Youth Leadership",
    status: "Curriculum Pilot & Field Labs",
    timeline: "2026",
    beneficiaries: "Basic & Junior High School Learners",
    location: "Kintampo South District, Bono East Region",
    image: "/images/green.jpg",
    icon: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "An experiential, outdoor-based ecological curriculum integrating traditional environmental folklore, botany, climate science, and school garden stewardship to nurture the next generation of indigenous environmental stewards.",
    keyDeliverables: [
      "Outdoor classroom field labs in local forests and community farms",
      "School native tree nursery and vegetable plots established",
      "Young environmental champions fellowship & debate clubs",
    ],
    metricsBadge: "Rural School Cohorts",
    quote: "Equipping young learners in indigenous schools with pride in their heritage and climate stewardship.",
  },
  {
    id: 6,
    title: "Culture Global Stocktake for Climate Action",
    projectCode: "CGST-POL-06",
    category: "Heritage & International Policy",
    status: "Policy Dialogue & Documentation",
    timeline: "2026",
    beneficiaries: "Cultural Practitioners, Artists & Civil Society",
    location: "National & Regional Policy Hubs",
    image: "/images/cli.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Elevating the role of Ghanaian indigenous heritage, oral traditions, sacred grove conservation, and creative arts within national and multilateral Climate Global Stocktake mechanisms.",
    keyDeliverables: [
      "Policy papers highlighting indigenous knowledge frameworks",
      "Submissions to national climate adaptation review forums",
      "Multi-stakeholder roundtables with cultural custodians",
    ],
    metricsBadge: "Policy Advocacy & Submissions",
    quote: "Culture and heritage are vital pathways connecting global climate targets with lived local realities.",
  },
  {
    id: 7,
    title: "SAFE Project – Climate-Resilient Beekeeping",
    projectCode: "SAFE-LIV-07",
    category: "Disaster Risk Reduction & Adaptation",
    status: "Savannah Belt Pilot",
    timeline: "2024 – Ongoing",
    beneficiaries: "Savannah Agro-Pastoralists & Farmers",
    location: "Northern Ghana Savannah Belt",
    image: "/images/farmer.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Providing alternative livelihood protection for farmers in drought-prone Northern Ghana under the SAFE (Safeguarding Livelihoods of Rural Communities from Climate-Induced Disasters) program through climate-smart beekeeping.",
    keyDeliverables: [
      "Drought-resilient apiary equipment adapted to savannah heat",
      "Rainfall-independent supplemental income streams for families",
      "Bi-weekly field monitoring and colony health tracking",
    ],
    metricsBadge: "Savannah Resilience Model",
    quote: "Diversifying rural income cushions farming families against erratic rainfall and harvest losses.",
  },
  {
    id: 8,
    title: "National Farmers’ Day Celebration & Advocacy",
    projectCode: "FARM-ADV-08",
    category: "Social Equity & Farmer Recognition",
    status: "Annual Nationwide Campaign",
    timeline: "Annual National Event",
    beneficiaries: "Smallholder Agrarian Communities",
    location: "Nationwide Community Hubs",
    image: "/images/day.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Celebrating and amplifying the voices of smallholder indigenous food producers across Ghana, advocating for equitable input subsidies, organic certification pathways, and fair-trade market access.",
    keyDeliverables: [
      "Farmer appreciation events and recognition awards",
      "Public advocacy on indigenous crop preservation and seed sovereignty",
      "Community dialogues on equitable land tenure for women farmers",
    ],
    metricsBadge: "Nationwide Smallholder Outreach",
    quote: "Smallholder farmers feed the nation; they deserve modern climate protection and fair market access.",
  },
  {
    id: 9,
    title: "Northern Ghana Climate Action Convergence",
    projectCode: "NG-CONV-09",
    category: "Regional Coalitions & Grassroots Strategy",
    status: "Multi-Regional Coalition",
    timeline: "2024 – 2025",
    beneficiaries: "45 Delegates across 5 Northern Regions",
    location: "Northern Ghana (5 Regions)",
    image: "/images/north.jpg",
    icon: <TreePine className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Convening 45 grassroots representatives, youth organizers, women leaders, and elders from 5 Northern regions to synchronize localized climate adaptation action plans and disaster risk mitigation strategies.",
    keyDeliverables: [
      "5-region climate adaptation consensus document compiled",
      "Community flood & drought early-warning communications protocol",
      "Regional youth climate taskforce formed and active",
    ],
    metricsBadge: "45 Delegates • 5 Regions",
    quote: "Frontline communities know what they need. Our convergence created a united policy roadmap.",
  },
];

export default function Impart2Page() {
  return (
    <div className="w-full min-h-screen bg-[#FFFDF5] dark:bg-zinc-950 text-[#2D241E] dark:text-zinc-100 transition-colors duration-300">
      {/* 🌍 Full-Width Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF5] dark:from-zinc-900 dark:to-zinc-950 py-20 lg:py-28 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-yellow-300/20 dark:bg-yellow-500/5 blur-3xl rounded-full pointer-events-none" />

        <div className="w-full text-center relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-950/60 border border-yellow-300/60 dark:border-yellow-700/50 text-[#8B7D6B] dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Grassroots Impact &amp; Volunteer Drives</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-4"
          >
            Grassroots Impact &amp;{" "}
            <span className="text-[#D1A054] dark:text-yellow-400">Voluntary Projects</span>
          </motion.h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-600 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Every project below is an active, verified grassroots field initiative co-created with Ghanaian communities.
            Explore all our live voluntary projects below.
          </p>
        </div>
      </section>

      {/* 📈 Full-Width Impact Metrics Counters */}
      <section className="w-full py-14 bg-white dark:bg-zinc-900 border-y border-yellow-200/60 dark:border-zinc-800 transition-colors duration-300 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D241E] dark:text-white">
              Cumulative Verified Field Metrics 📊
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-5 w-full">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-[#FAF6EE] dark:bg-zinc-800/80 p-5 rounded-2xl border border-yellow-200/50 dark:border-zinc-700/50 text-center hover:scale-103 transition-transform shadow-xs"
              >
                <div className="p-2.5 bg-yellow-100 dark:bg-zinc-700 rounded-xl mb-2">
                  {m.icon}
                </div>
                <p className="text-2xl sm:text-3xl font-black text-[#D1A054] dark:text-yellow-400">
                  <CountUp end={m.value} duration={2.5} separator="," suffix="+" />
                </p>
                <p className="text-xs font-semibold text-stone-600 dark:text-zinc-400 mt-1 leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Voluntary Projects Showcase (Display All at Once with Real Project Dossier Cards) */}
      <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-yellow-400 text-xs font-semibold mb-3">
            <HandHeart className="w-4 h-4 text-amber-600 dark:text-yellow-400 animate-pulse" />
            <span>Community Field Portfolios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-3">
            Voluntary Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-400 leading-relaxed font-light">
            Comprehensive overview of all 9 active community-led voluntary projects in Ghana. Driven by volunteers, traditional leaders, and youth champions.
          </p>
        </div>

        {/* Real Projects Grid - All 9 displayed simultaneously */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full">
          {voluntaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 border border-yellow-200/70 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Top Image & Badges */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-stone-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

                {/* Top Status & Code Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-yellow-400 text-zinc-950 px-3 py-1 rounded-lg shadow-sm">
                    {project.status}
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-black/65 backdrop-blur-md text-stone-300 px-2.5 py-1 rounded-lg border border-white/15">
                    {project.projectCode}
                  </span>
                </div>

                {/* Location on image bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-stone-200 flex items-center justify-between z-10">
                  <span className="flex items-center gap-1.5 truncate max-w-[65%]">
                    <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </span>
                  <span className="bg-yellow-500/90 text-zinc-950 font-bold px-2.5 py-0.5 rounded-full text-[10px] shadow-sm">
                    {project.metricsBadge}
                  </span>
                </div>
              </div>

              {/* Project Body: Structured Project Profile */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Category & Timeline */}
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-zinc-400 pb-1 border-b border-stone-100 dark:border-zinc-800">
                    <span className="font-semibold text-[#8B7D6B] dark:text-yellow-400">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#2D241E] dark:text-white leading-tight group-hover:text-[#D1A054] dark:group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-zinc-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Key Deliverables Checklist */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-zinc-300">
                      Key Deliverables &amp; Outcomes:
                    </p>
                    <ul className="space-y-1.5 text-xs text-stone-600 dark:text-zinc-300">
                      {project.keyDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Beneficiaries Tag & Quote */}
                <div className="space-y-3 pt-3 border-t border-stone-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-stone-600 dark:text-zinc-400">
                    <Users className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400 shrink-0" />
                    <span>Target: {project.beneficiaries}</span>
                  </div>

                  {/* Quote */}
                  <div className="p-3.5 rounded-2xl bg-yellow-50 dark:bg-zinc-800/80 border border-yellow-200/50 dark:border-zinc-700/50 text-xs text-stone-700 dark:text-zinc-300 italic">
                    &ldquo;{project.quote}&rdquo;
                  </div>

                  {/* Action Link */}
                  <Link
                    href="/pages/contactus"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#8B7D6B] hover:bg-[#7A6B5A] dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all group-hover:bg-[#D1A054] group-hover:text-zinc-950"
                  >
                    <span>Volunteer or Support Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversational Full-Width CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-r from-[#8B7D6B] via-[#A78B60] to-[#7A6B5A] text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Want to Join or Sponsor a Voluntary Project?
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-yellow-100 max-w-2xl font-light">
              Your support directly funds hives, beekeeping suits, native tree saplings, and school ecological kits across Ghanaian communities.
            </p>
          </div>

          <Link
            href="/pages/contactus"
            className="px-8 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-extrabold text-sm sm:text-base shadow-lg hover:scale-103 active:scale-97 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Get Involved Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 🗺️ Full-Width Interactive Regional Map Explorer */}
      <section className="w-full py-20 bg-[#FAF6EE] dark:bg-zinc-900/60 border-t border-yellow-200/60 dark:border-zinc-800 transition-colors duration-300 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D241E] dark:text-white tracking-tight mb-3">
              🗺️ Explore Our Field Map Across Ghana
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 dark:text-zinc-400">
              Interactive map of our active voluntary beekeeping clusters, partner communities, and educational centers.
            </p>
          </div>

          <div className="h-[65vh] min-h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-yellow-200/80 dark:border-zinc-800">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
