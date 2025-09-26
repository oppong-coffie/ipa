"use client"

import { useState } from "react"
import { Card, Tabs, Badge, Tooltip } from "antd"
import type { TabsProps } from "antd"
import { motion } from "framer-motion"
import Image from "next/image"


interface RegionData {
  svgId: string
  name: string
  population: string
  projects: number
  beneficiaries: string
  keyImpacts: string[]
  stories: { title: string; description: string; metric: string }[]
  challenges: string[]
  futureGoals: string[]
}

// 💡 Richer data
const regionsData: RegionData[] = [
  {
    svgId: "GHNP",
    name: "🌾 Northern Region",
    population: "2.7M",
    projects: 12,
    beneficiaries: "45,000+",
    keyImpacts: [
      "🌾 Sustainable farming for 15,000 farmers",
      "💧 Clean water access for 25 communities",
      "🏫 Education support for 8,000 children",
      "🌳 10,000 trees planted 🌱",
    ],
    stories: [
      { title: "👩🏾‍🌾 Shea Cooperative", description: "Women’s cooperative increased income by 300%", metric: "500 women" },
      { title: "🔆 Solar Water Pumps", description: "Solar systems providing year-round clean water", metric: "15 communities" },
    ],
    challenges: ["🚚 Market access", "🔥 Seasonal water scarcity", "🛠️ Need technical training"],
    futureGoals: ["🏭 Establish 5 new centers by 2026", "🚰 Expand water infrastructure", "💻 Launch digital literacy programs"],
  },
  {
    svgId: "GHUE",
    name: "🌱 Upper East Region",
    population: "1.3M",
    projects: 8,
    beneficiaries: "20,000+",
    keyImpacts: [
      "🌱 New irrigation schemes",
      "🏥 Rural clinics construction",
      "🚜 Farmer capacity building",
    ],
    stories: [{ title: "💧 Irrigation Boost", description: "Better yields & drought resilience", metric: "3,000 farmers" }],
    challenges: ["☀️ Drought resilience", "📉 Limited extension officers"],
    futureGoals: ["🌊 Expand irrigation coverage", "🚚 Develop new market hubs"],
  },
  {
    svgId: "GHAH",
    name: "🏫 Ashanti Region",
    population: "5.4M",
    projects: 20,
    beneficiaries: "100,000+",
    keyImpacts: [
      "🏫 STEM labs for 50 schools",
      "💊 Health outreach programs",
      "📈 SME capacity support",
    ],
    stories: [{ title: "🔬 STEM Labs", description: "Equipped 50 schools with labs", metric: "10,000 students" }],
    challenges: ["🌍 Urban-rural divide", "🚧 Inadequate infrastructure"],
    futureGoals: ["🏫 Expand coverage", "⚡ Increase access to solar power"],
  },
  {
    svgId: "GHAA",
    name: "🏙️ Greater Accra",
    population: "6.0M",
    projects: 25,
    beneficiaries: "200,000+",
    keyImpacts: [
      "🚰 Sanitation upgrades",
      "🏥 Mobile clinics",
      "🚦 Urban planning initiatives",
    ],
    stories: [{ title: "🚰 Sanitation Project", description: "Upgraded 10 markets with modern sanitation", metric: "50,000 people" }],
    challenges: ["🏢 Urban density", "♻️ Waste management"],
    futureGoals: ["🏥 Expand mobile clinics", "🌿 Green city programs"],
  },
  {
    svgId: "GHWP",
    name: "🌊 Western Region",
    population: "2.0M",
    projects: 10,
    beneficiaries: "30,000+",
    keyImpacts: [
      "🌊 Coastal defence",
      "🏞️ Forestry programs",
      "🛳️ Port development",
    ],
    stories: [{ title: "🌿 Coastal Project", description: "Shore protection & mangrove restoration", metric: "5km coastline" }],
    challenges: ["🌊 Erosion", "⚓ Oil spill risk"],
    futureGoals: ["🌳 Mangrove restoration", "🏭 Sustainable port expansion"],
  },
]
export default function ImpactPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null)

  const tabs: TabsProps["items"] = selectedRegion
    ? [
        {
          key: "overview",
          label: "📊 Overview",
          children: (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-emerald-700">✨ Key Impacts & Stories</h3>
              {selectedRegion.keyImpacts.map((imp, idx) => (
                <p key={idx} className="p-2 bg-emerald-50 rounded text-emerald-800">{imp}</p>
              ))}
              {selectedRegion.stories.map((st, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-3 bg-emerald-50 rounded">
                  <h4 className="font-semibold text-emerald-800">{st.title}</h4>
                  <p className="text-emerald-700 text-sm">{st.description}</p>
                  <Badge count={st.metric} style={{ backgroundColor: '#065f46' }} />
                </div>
              ))}
            </div>
          ),
        },
        {
          key: "challenges",
          label: "⚠️ Challenges",
          children: (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-red-700">⚠️ Challenges</h3>
              {selectedRegion.challenges.map((c, idx) => (
                <p key={idx} className="p-2 bg-red-50 rounded text-red-700">{c}</p>
              ))}
            </div>
          ),
        },
        {
          key: "future",
          label: "🎯 Future Goals",
          children: (
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-indigo-700">🎯 Future Goals</h3>
              {selectedRegion.futureGoals.map((g, idx) => (
                <p key={idx} className="p-2 bg-indigo-50 rounded text-indigo-800">{g}</p>
              ))}
            </div>
          ),
        },
      ]
    : []

  const handleRegionClick = (svgId: string) => {
    const region = regionsData.find((r) => r.svgId === svgId)
    if (region) setSelectedRegion(region)
  }

  return (
    <div className="min-h-screen bg-emerald-50">
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
  <h1 className="flex items-center justify-center gap-3 text-5xl font-extrabold text-yellow-800 drop-shadow-md mb-3">
    <Image
      src="/images/gh3.jpg" // your image path here
      alt="Ghana Map Icon"
      width={60}
      height={60}
      className="inline-block rounded-full shadow-md"
    />
    Ghana Impact Map
  </h1>
  <p className="text-base md:text-lg font-semibold text-yellow-900 drop-shadow-sm max-w-2xl mx-auto">
    ✨ <span className="text-yellow-700">Discover</span> impactful projects, inspiring stories & bold goals across every region.  
    <br />
    🗺️ <span className="text-yellow-800">Tap a region</span> to explore detailed insights.
  </p>
</div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="🗺️ Ghana Map" headStyle={{ color: '#065f46', fontWeight: 'bold' }}>
          <div
            className="relative w-full h-96 rounded-lg overflow-hidden bg-center bg-cover"
            style={{
              backgroundImage: "url('/images/ghana.jpg')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <svg viewBox="0 0 960 1280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {regionsData.map((region) => (
                <Tooltip key={region.svgId} title={region.name} mouseEnterDelay={0.2}>
                  <motion.path
                    id={region.svgId}
                    d={
                      region.svgId === "GHNP" ? "M250,200 L400,180 L380,320 L260,350 Z"
                      : region.svgId === "GHUE" ? "M420,100 L520,140 L500,220 L430,200 Z"
                      : region.svgId === "GHAH" ? "M300,400 L450,380 L460,500 L340,520 Z"
                      : region.svgId === "GHAA" ? "M500,900 L600,880 L620,1000 L520,1020 Z"
                      : "M120,700 L250,650 L260,800 L140,820 Z"
                    }
                    fill={
                      region.svgId === "GHNP" ? "#6ee7b7"
                      : region.svgId === "GHUE" ? "#a5f3fc"
                      : region.svgId === "GHAH" ? "#93c5fd"
                      : region.svgId === "GHAA" ? "#c084fc"
                      : "#f9a8d4"
                    }
                    stroke="none"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    onClick={() => handleRegionClick(region.svgId)}
                  />
                </Tooltip>
              ))}
            </svg>
          </div>
        </Card>

        <div className="space-y-6">
          {selectedRegion ? (
            <>
              <Card
                title={selectedRegion.name}
                extra={<Badge count={`${selectedRegion.projects} Projects`} style={{ backgroundColor: '#065f46' }} />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-emerald-100 rounded">
                    <div className="text-2xl font-bold text-emerald-700">{selectedRegion.population}</div>
                    <div className="text-sm text-emerald-800">Population</div>
                  </div>
                  <div className="text-center p-3 bg-emerald-200 rounded">
                    <div className="text-2xl font-bold text-emerald-900">{selectedRegion.beneficiaries}</div>
                    <div className="text-sm text-emerald-800">Beneficiaries</div>
                  </div>
                </div>
              </Card>

              <Card>
                <Tabs defaultActiveKey="overview" items={tabs} />
              </Card>
            </>
          ) : (
            <Card>
              <p className="text-center py-12 text-emerald-800 text-lg">🗺️ Click a region on the map to view details</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
