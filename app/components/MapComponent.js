"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Modal, Card, Badge, Tabs, List } from "antd";
import L from "leaflet";

// ✅ Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// ✅ Your dataset
const regionsData = [
  {
    name: "🌾 Northern Region",
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
    futureGoals: [
      "🏭 Establish 5 new centers by 2026",
      "🚰 Expand water infrastructure",
      "💻 Launch digital literacy programs",
    ],
  },
  {
    name: "🌱 Upper East Region",
    lat: 10.7082,
    lng: -0.9821,
    population: "1.3M",
    projects: 8,
    beneficiaries: "20,000+",
    keyImpacts: ["🌱 New irrigation schemes", "🏥 Rural clinics construction", "🚜 Farmer capacity building"],
    stories: [
      {
        title: "💧 Irrigation Boost",
        description: "Better yields & drought resilience",
        metric: "3,000 farmers",
      },
    ],
    challenges: ["☀️ Drought resilience", "📉 Limited extension officers"],
    futureGoals: ["🌊 Expand irrigation coverage", "🚚 Develop new market hubs"],
  },
  {
    name: "🏫 Ashanti Region",
    lat: 6.6931,
    lng: -1.6169,
    population: "5.4M",
    projects: 20,
    beneficiaries: "100,000+",
    keyImpacts: ["🏫 STEM labs for 50 schools", "💊 Health outreach programs", "📈 SME capacity support"],
    stories: [
      {
        title: "🔬 STEM Labs",
        description: "Equipped 50 schools with labs",
        metric: "10,000 students",
      },
    ],
    challenges: ["🌍 Urban-rural divide", "🚧 Inadequate infrastructure"],
    futureGoals: ["🏫 Expand coverage", "⚡ Increase access to solar power"],
  },
  {
    name: "🏙️ Greater Accra",
    lat: 5.56,
    lng: -0.2057,
    population: "6.0M",
    projects: 25,
    beneficiaries: "200,000+",
    keyImpacts: ["🚰 Sanitation upgrades", "🏥 Mobile clinics", "🚦 Urban planning initiatives"],
    stories: [
      {
        title: "🚰 Sanitation Project",
        description: "Upgraded 10 markets with modern sanitation",
        metric: "50,000 people",
      },
    ],
    challenges: ["🏢 Urban density", "♻️ Waste management"],
    futureGoals: ["🏥 Expand mobile clinics", "🌿 Green city programs"],
  },
];

export default function MapComponent() {
    const [selectedRegion, setSelectedRegion] = useState(null);

  // ✅ Tabs dynamically use the dataset
  const tabs = [
    {
      key: "overview",
      label: "Overview",
      children: (
        <>
          <h3 className="font-semibold mb-2">Key Impacts</h3>
          <ul className="list-disc ml-5 space-y-1">
          {selectedRegion?.keyImpacts.map((impact, i) => (
  <li key={i}>{impact}</li>
))}
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Stories</h3>
          <List
            dataSource={selectedRegion?.stories}
            renderItem={(story, i) => (
              <List.Item key={i}>
                <div>
                  <p className="font-medium">{story.title}</p>
                  <p className="text-gray-600">{story.description}</p>
                  <span className="text-emerald-700 text-sm">{story.metric}</span>
                </div>
              </List.Item>
            )}
          />
        </>
      ),
    },
    {
      key: "challenges",
      label: "Challenges",
      children: (
        <ul className="list-disc ml-5 space-y-1">
          {selectedRegion?.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      ),
    },
    {
      key: "goals",
      label: "Future Goals",
      children: (
        <ul className="list-disc ml-5 space-y-1">
          {selectedRegion?.futureGoals.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* 🌍 Ghana Map */}
      <MapContainer
        center={[7.9465, -1.0232]} // Ghana center
        zoom={6}
        style={{ height: "600px", width: "100%", borderRadius: "1rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {regionsData.map((region, idx) => (
          <Marker
            key={idx}
            position={[region.lat, region.lng]}
            icon={customIcon}
            eventHandlers={{ click: () => setSelectedRegion(region) }}
          >
            <Popup>{region.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 📍 Modal for Region Details */}
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

            <Card className="mt-4">
              <Tabs defaultActiveKey="overview" items={tabs} />
            </Card>
          </>
        )}
      </Modal>
    </>
  );
}
