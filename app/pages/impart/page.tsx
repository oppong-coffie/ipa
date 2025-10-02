"use client";

import { useState } from "react";
import { Card, Tabs, Badge, Modal } from "antd";
import type { TabsProps } from "antd";

interface RegionData {
  name: string;
  x: number; // X position on the image map
  y: number; // Y position on the image map
  population: string;
  projects: number;
  beneficiaries: string;
  keyImpacts: string[];
  stories: { title: string; description: string; metric: string }[];
  challenges: string[];
  futureGoals: string[];
}

const regionsData: RegionData[] = [
  {
    name: "🌾 Northern Region",
    x: 120,
    y: 150,
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
      {
        title: "👩🏾‍🌾 Shea Cooperative",
        description: "Women’s cooperative increased income by 300%",
        metric: "500 women",
      },
      {
        title: "🔆 Solar Water Pumps",
        description: "Solar systems providing year-round clean water",
        metric: "15 communities",
      },
    ],
    challenges: ["🚚 Market access", "🔥 Seasonal water scarcity", "🛠️ Need technical training"],
    futureGoals: [
      "🏭 Establish 5 new centers by 2026",
      "🚰 Expand water infrastructure",
      "💻 Launch digital literacy programs",
    ],
  },
  {
    name: "🌱 Upper East Region",
    x: 240,
    y: 50,
    population: "1.3M",
    projects: 8,
    beneficiaries: "20,000+",
    keyImpacts: ["🌱 New irrigation schemes", "🏥 Rural clinics construction", "🚜 Farmer capacity building"],
    stories: [{ title: "💧 Irrigation Boost", description: "Better yields & drought resilience", metric: "3,000 farmers" }],
    challenges: ["☀️ Drought resilience", "📉 Limited extension officers"],
    futureGoals: ["🌊 Expand irrigation coverage", "🚚 Develop new market hubs"],
  },
  {
    name: "🏫 Ashanti Region",
    x: 180,
    y: 320,
    population: "5.4M",
    projects: 20,
    beneficiaries: "100,000+",
    keyImpacts: ["🏫 STEM labs for 50 schools", "💊 Health outreach programs", "📈 SME capacity support"],
    stories: [{ title: "🔬 STEM Labs", description: "Equipped 50 schools with labs", metric: "10,000 students" }],
    challenges: ["🌍 Urban-rural divide", "🚧 Inadequate infrastructure"],
    futureGoals: ["🏫 Expand coverage", "⚡ Increase access to solar power"],
  },
  {
    name: "🏙️ Greater Accra",
    x: 220,
    y: 420,
    population: "6.0M",
    projects: 25,
    beneficiaries: "200,000+",
    keyImpacts: ["🚰 Sanitation upgrades", "🏥 Mobile clinics", "🚦 Urban planning initiatives"],
    stories: [{ title: "🚰 Sanitation Project", description: "Upgraded 10 markets with modern sanitation", metric: "50,000 people" }],
    challenges: ["🏢 Urban density", "♻️ Waste management"],
    futureGoals: ["🏥 Expand mobile clinics", "🌿 Green city programs"],
  },
];

export default function ImpactPage() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

  const tabs: TabsProps["items"] = selectedRegion
    ? [
        {
          key: "overview",
          label: "📊 Overview",
          children: (
            <div className="space-y-4">
              {selectedRegion.keyImpacts.map((imp, idx) => (
                <p key={idx} className="p-2 bg-emerald-50 rounded text-emerald-800">
                  {imp}
                </p>
              ))}
              {selectedRegion.stories.map((st, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-3 bg-emerald-50 rounded">
                  <h4 className="font-semibold text-emerald-800">{st.title}</h4>
                  <p className="text-emerald-700 text-sm">{st.description}</p>
                  <Badge count={st.metric} style={{ backgroundColor: "#065f46" }} />
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
              {selectedRegion.challenges.map((c, idx) => (
                <p key={idx} className="p-2 bg-red-50 rounded text-red-700">
                  {c}
                </p>
              ))}
            </div>
          ),
        },
        {
          key: "future",
          label: "🎯 Future Goals",
          children: (
            <div className="space-y-3">
              {selectedRegion.futureGoals.map((g, idx) => (
                <p key={idx} className="p-2 bg-indigo-50 rounded text-indigo-800">
                  {g}
                </p>
              ))}
            </div>
          ),
        },
      ]
    : [];

  return (
    <div className="bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Right Panel (Static Image Map with markers) */}
        <div className="relative bg-white rounded-3xl shadow-lg p-4">
          <img
            src="/images/ghana.jpg"
            alt="Ghana Map"
            className="rounded-3xl w-full h-[500px] object-cover"
          />

          {/* Markers */}
          {regionsData.map((region, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRegion(region)}
              className="absolute cursor-pointer group"
              style={{
                top: `${region.y}px`,
                left: `${region.x}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-72 h-6 drop-shadow-md group-hover:scale-110 transition"
              >
                <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 
                0-2.5-1.12-2.5-2.5s1.12-2.5 
                2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>

              <span className="absolute left-1/2 -translate-x-1/2 mt-1 text-xs font-semibold bg-white px-1 py-0.5 rounded shadow">
                {region.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for region details */}
      <Modal
        open={!!selectedRegion}
        title={selectedRegion?.name}
        onCancel={() => setSelectedRegion(null)}
        footer={null}
        width={700}
      >
        {selectedRegion && (
          <>
            <Card
              title={selectedRegion.name}
              extra={<Badge count={`${selectedRegion.projects} Projects`} style={{ backgroundColor: "#065f46" }} />}
            >
              <div className="grid grid-cols-2 gap-4 mt-4">
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

            <Card className="mt-4">
              <Tabs defaultActiveKey="overview" items={tabs} />
            </Card>
          </>
        )}
      </Modal>
    </div>
  );
}
  