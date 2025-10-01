"use client";

import { useState } from "react";
import { Card, Tabs, Badge } from "antd";
import type { TabsProps } from "antd";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

interface RegionData {
  name: string;
  lat: number;
  lng: number;
  population: string;
  projects: number;
  beneficiaries: string;
  keyImpacts: string[];
  stories: { title: string; description: string; metric: string }[];
  challenges: string[];
  futureGoals: string[];
}

// Regions with coordinates
const regionsData: RegionData[] = [
  {
    name: "🌾 Northern Region",
    lat: 9.4,
    lng: -1.0,
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
    futureGoals: ["🏭 Establish 5 new centers by 2026", "🚰 Expand water infrastructure", "💻 Launch digital literacy programs"],
  },
  {
    name: "🌱 Upper East Region",
    lat: 10.9,
    lng: -0.85,
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
    lat: 6.7,
    lng: -1.6,
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
    lat: 5.55,
    lng: -0.2,
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
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel */}
        <div className="space-y-6">
          {selectedRegion ? (
            <>
              <Card
                title={selectedRegion.name}
                extra={<Badge count={`${selectedRegion.projects} Projects`} style={{ backgroundColor: "#065f46" }} />}
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

        {/* Right Panel (Map) */}
        <div className="bg-white rounded-3xl shadow-lg">
          <MapContainer center={[7.8, -1.0]} zoom={6.5} className="rounded-3xl w-full h-[500px]">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {regionsData.map((region, idx) => (
              <Marker
                key={idx}
                position={[region.lat, region.lng]}
                eventHandlers={{
                  click: () => setSelectedRegion(region),
                }}
              >
                <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
                  <span className="text-sm font-semibold text-[#5B3A1A]">{region.name}</span>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
