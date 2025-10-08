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
    lat: 10.4124,
    lng: -0.8393,
    population: "2.7M",
    projects: 1,
    beneficiaries: "150+ community participants",
    keyImpacts: [
      "🧠 Indigenous Knowledge workshop on climate adaptation",
      "🌦 Strengthened community-based early warning systems",
      "🌾 Improved drought-resilient agricultural practices",
      "🤝 Promoted inclusion of traditional leaders in policy dialogues",
    ],
    stories: [
      {
        title: "🌿 IK Inclusion Workshop — Sankpala",
        description:
          "Documented traditional forecasting and water management practices supporting climate resilience",
        metric: "150 participants",
      },
    ],
    challenges: [
      "🔥 Increased frequency of drought and dry spells",
      "💧 Depleted water sources and soil fertility loss",
      "🧩 Limited integration of Indigenous Knowledge in policy",
    ],
    futureGoals: [
      "📘 Establish community climate knowledge hubs",
      "🏞 Integrate IK into national climate education programs",
      "🌱 Support intergenerational transfer of traditional knowledge",
    ],
  },
  {
    name: "🌾 Volta Region",
    lat: 6.5786,
    lng: 0.4502,
    population: "2.1M",
    projects: 1,
    beneficiaries: "120+ local farmers",
    keyImpacts: [
      "🌾 120 farmers trained in climate lobbying and advocacy",
      "💬 3 community groups formed for policy participation",
      "📈 Greater awareness of climate adaptation methods",
      "💧 Improved soil and water-use practices in farmlands",
    ],
    stories: [
      {
        title: "📢 BLOCAF Advocacy Training",
        description:
          "Empowered climate-affected farmers to advocate for fair policy inclusion",
        metric: "120 farmers",
      },
    ],
    challenges: [
      "☀️ Erratic rainfall patterns and poor irrigation access",
      "💸 Limited access to agricultural credit",
      "📉 Weak representation in decision-making",
    ],
    futureGoals: [
      "🏛 Strengthen farmer participation in district planning",
      "🌿 Expand advocacy to 3 additional farming districts",
      "💧 Promote sustainable irrigation innovation",
    ],
  },
  {
    name: "🍯 Eastern Region",
    lat: 6.2000,
    lng: -0.2833,
    population: "3.2M",
    projects: 1,
    beneficiaries: "125 (80 youth, 45 women)",
    keyImpacts: [
      "🐝 200 beehives distributed to farming families",
      "💵 25% increase in household income from honey sales",
      "🌼 Improved pollination and biodiversity recovery",
      "👩🏾‍🏫 Enhanced gender inclusion and climate education",
    ],
    stories: [
      {
        title: "🍯 Beelieve Smart Project",
        description:
          "Provided sustainable beekeeping livelihoods to rural farmers and women",
        metric: "125 beneficiaries",
      },
    ],
    challenges: [
      "🌧 Overreliance on rain-fed agriculture",
      "💰 Limited access to honey markets",
      "🚚 High logistics cost for rural production",
    ],
    futureGoals: [
      "🏭 Establish honey processing hub by 2025",
      "🧑🏽‍🎓 Train 50 additional beekeepers annually",
      "🌱 Combine beekeeping with agroforestry systems",
    ],
  },
  {
    name: "🏛 National Project",
    lat: 7.9465,
    lng: -1.0232,
    population: "33.1M",
    projects: 1,
    beneficiaries: "300+ marginalized participants",
    keyImpacts: [
      "🗣 4 regional and national-level climate justice workshops",
      "📚 2 major publications on youth and indigenous inclusion",
      "🤝 Strengthened policy dialogue frameworks",
      "🎥 2 documentary videos amplifying local voices",
    ],
    stories: [
      {
        title: "🌍 MCECJ Initiative",
        description:
          "Assessed inclusion of vulnerable populations in Ghana’s national climate policy framework",
        metric: "300+ participants",
      },
    ],
    challenges: [
      "🧩 Policy fragmentation at national and local levels",
      "💬 Limited indigenous leadership inclusion",
    ],
    futureGoals: [
      "🏛 Embed climate justice into national NDC strategies",
      "📈 Expand participation to all 16 regions",
      "🎓 Develop youth climate policy training programs",
    ],
  },
  {
    name: "🐝 Bono East Region",
    lat: 7.7000,
    lng: -2.1167,
    population: "1.2M",
    projects: 1,
    beneficiaries: "60 trained women",
    keyImpacts: [
      "🍯 150 active hives managed by women cooperatives",
      "💵 40% increase in household income for female beekeepers",
      "🌾 Integration of cashew-bee farming for soil restoration",
      "👩🏾‍🌾 Strengthened women’s economic leadership",
    ],
    stories: [
      {
        title: "👩🏾‍🌾 Gendered Beekeeping Enterprise",
        description:
          "Empowered women through a social enterprise model promoting resilience and income stability",
        metric: "60 women trained",
      },
    ],
    challenges: [
      "🚧 Limited access to modern apiary equipment",
      "📉 Weak market linkage for processed honey",
    ],
    futureGoals: [
      "🏭 Expand cooperative honey production centers",
      "🌱 Introduce agroforestry training and seedlings",
      "💻 Digitize traceability for honey sales",
    ],
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
