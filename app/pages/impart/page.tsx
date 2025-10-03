"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Badge, Card, Modal } from "antd";
import { Tabs } from "antd";

interface RegionData {
  name: string;
  x: number;
  y: number;
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

// ✅ Fix Leaflet default marker issue in Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const regionsData: RegionData[] = [
  {
    name: "🌾 Northern Region",
    x: 120,
    y: 150,
    lat: 9.4071,
    lng: -0.8539,
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
    x: 240,
    y: 50,
    lat: 10.7082,
    lng: -0.9821,
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
    lat: 6.6931,
    lng: -1.6169,
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
    lat: 5.5600,
    lng: -0.2057,
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

  // ✅ Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* 🌍 Hero Section */}
      <section className="bg-gradient-to-br from-[#EDEAE3] to-[#F5F0E5] py-16 lg:py-24">
        <div
          className="max-w-4xl mx-auto px-6 sm:px-8 text-center bg-white/80 backdrop-blur-md rounded-3xl shadow-lg py-16"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#D1A054] mb-6 drop-shadow-sm">
            🌍 Our Global Impact
          </h1>
          <p className="text-xl text-[#8B7D6B] leading-relaxed">
            Empowering communities with technology, knowledge, and innovation.
          </p>
        </div>
      </section>

      {/* 🌍 Impact Summary Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">
            🌍 Our Global Impact at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards with AOS */}
            <div className="bg-emerald-50 rounded-xl shadow p-6 hover:shadow-lg transition" data-aos="zoom-in">
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">📚 Education</h3>
              <ul className="space-y-2 text-emerald-700">
                <li>🎓 25,000+ students trained</li>
                <li>👩🏽‍🏫 300 teachers supported</li>
                <li>💻 25 solar-powered labs</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl shadow p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-green-900 mb-3">🌱 Sustainability</h3>
              <ul className="space-y-2 text-green-700">
                <li>🌳 50,000 trees planted</li>
                <li>♻️ 2,000 households recycling</li>
                <li>💧 10,000L clean water monthly</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-xl shadow p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">💼 Business Empowerment</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>📈 500 SMEs onboarded</li>
                <li>👩🏾‍💼 200 women-led startups funded</li>
                <li>🚜 1,200 farmers connected</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl shadow p-6 hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">🤝 Community Growth</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✌️ 5,000+ youth in peacebuilding</li>
                <li>💵 1,500 women supported</li>
                <li>🔆 3,200 families with solar power</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ Country Map with Markers */}
      <section className="py-12 bg-gradient-to-tr from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-8">
            🗺️ Explore Our Impact in Ghana
          </h2>

          <MapContainer
            center={[7.9465, -1.0232]}
            zoom={6.5}
            style={{ height: "600px", width: "100%", borderRadius: "1rem" }}
            className="shadow-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {regionsData.map((region, idx) => (
              <Marker
                key={idx}
                position={[region.lat, region.lng]}
                icon={customIcon}
                eventHandlers={{ click: () => setSelectedRegion(region) }}
              >
                <Popup>
                  <strong>{region.name}</strong> <br />
                  Projects: {region.projects} <br />
                  Beneficiaries: {region.beneficiaries}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </section>

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
      {/* Summary Card */}
      <Card
        title={selectedRegion.name}
        extra={
          <Badge
            count={`${selectedRegion.projects} Projects`}
            style={{ backgroundColor: "#065f46" }}
          />
        }
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center p-3 bg-emerald-100 rounded">
            <div className="text-2xl font-bold text-emerald-700">
              {selectedRegion.population}
            </div>
            <div className="text-sm text-emerald-800">Population</div>
          </div>
          <div className="text-center p-3 bg-emerald-200 rounded">
            <div className="text-2xl font-bold text-emerald-900">
              {selectedRegion.beneficiaries}
            </div>
            <div className="text-sm text-emerald-800">Beneficiaries</div>
          </div>
        </div>
      </Card>

      {/* Tabs Section */}
      <Card className="mt-4">
        <Tabs
          defaultActiveKey="overview"
          items={[
            {
              key: "overview",
              label: "📖 Overview",
              children: (
                <div className="text-gray-700 space-y-3">
                  <p>{selectedRegion.name}</p>
                </div>
              ),
            },
            {
              key: "challenges",
              label: "⚠️ Challenges",
              children: (
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {selectedRegion.challenges?.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              ),
            },
            {
              key: "future",
              label: "🚀 Future Goals",
              children: (
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {selectedRegion.futureGoals?.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              ),
            },
          ]}
        />
      </Card>
    </>
  )}
</Modal>
  
    </div>
  );
}
