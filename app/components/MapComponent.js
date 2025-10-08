"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Modal, Card, Badge, Tabs, List } from "antd";
import L from "leaflet";
import { motion } from "framer-motion";
import Image from "next/image";

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
  // {
  //   name: "🌾 Northern Region",
  //   lat: 10.4124,
  //   lng: -0.8393,
  //   population: "2.7M",
  //   projects: 1,
  //   beneficiaries: "150+ community participants",
  //   overview: `
  //     <p style="color:#065f46; font-weight:600; font-size:1.05rem;">
  //       🌾 The agricultural sector forms the backbone of the Ghanaian economy
  //     </p>
  
  //     <p style="line-height:1.7; color:#374151; margin-top:8px;">
  //       and provides a livelihood for the vast majority of the population.
  //       The greater part of production is generated through
  //       <span style="color:#059669; font-weight:500;">rain-fed farming</span>,
  //       meaning that agricultural production for food and export is highly
  //       dependent on climate conditions.
  //     </p>
  
  //     <p style="line-height:1.7; color:#374151; margin-top:8px;">
  //       Over the past several years, the impact of a changing climate is
  //       <span style="font-style:italic; color:#047857;">deeply felt</span>,
  //       and adapting agriculture to climate change is therefore of
  //       <span style="font-weight:600; color:#065f46;">high priority</span>
  //       in vulnerable communities in Ghana.
  //     </p>
  
  //     <p style="line-height:1.7; color:#374151; margin-top:8px;">
  //       Centered on the
  //       <span style="font-weight:700; color:#064e3b;">
  //         Building Lobbying Capacity of Climate Affected Farmers (BLOCAF)
  //       </span>
  //       project, this initiative empowers climate-vulnerable indigenous
  //       community farmers to actively influence climate policy.
  //     </p>
  
  //     <div style="border-left:4px solid #059669; background:#ecfdf5; padding:10px 14px; border-radius:6px; margin:14px 0;">
  //       <em style="color:#065f46;">
  //         “The project shifts power dynamics — enabling these communities to
  //         become direct participants in shaping the policies that affect
  //         their lives.”
  //       </em>
  //     </div>
  
  //     <p style="line-height:1.7; color:#374151; margin-top:8px;">
  //       By doing so, it fulfills
  //       <span style="color:#047857; font-weight:600;">Article 7</span> of the
  //       <span style="color:#059669; font-weight:500;">Paris Agreement</span>
  //       and ensures that Ghana’s
  //       <span style="text-decoration:underline; text-decoration-color:#10b981;">
  //         Nationally Determined Contributions (NDCs)
  //       </span>
  //       are informed by the on-the-ground realities of
  //       climate-affected communities.
  //     </p>
  //   `,
  //   link: "https://www.researchgate.net/profile/Lord-Offei-Darko/publication/386488720_Lobbying_strategies_for_climate-affected_farmers_in_rural_communities_in_Ghana_a_case_study_of_Klotekpo_in_the_Volta_region_of_Ghana/links/6822ebd2026fee1034f7b157/Lobbying-strategies-for-climate-affected-farmers-in-rural-communities-in-Ghana-a-case-study-of-Klotekpo-in-the-Volta-region-of-Ghana.pdf",
  //   images: ["/images/ata1.jpg", "/images/ata2.jpg", "/images/ata3.jpg"],
  // },
  {
    name: "🌾 Volta Region",
    lat: 6.5786,
    lng: 0.4502,
    population: "2.1M",
    projects: 1,
    beneficiaries: "120+ local farmers",
    overview: `
    <p style="color:#065f46; font-weight:600; font-size:1.05rem;">
      🌾 The agricultural sector forms the backbone of the Ghanaian economy
    </p>

    <p style="line-height:1.7; color:#374151; margin-top:8px;">
      and provides a livelihood for the vast majority of the population.
      The greater part of production is generated through
      <span style="color:#059669; font-weight:500;">rain-fed farming</span>,
      meaning that agricultural production for food and export is highly
      dependent on climate conditions.
    </p>

    <p style="line-height:1.7; color:#374151; margin-top:8px;">
      Over the past several years, the impact of a changing climate is
      <span style="font-style:italic; color:#047857;">deeply felt</span>,
      and adapting agriculture to climate change is therefore of
      <span style="font-weight:600; color:#065f46;">high priority</span>
      in vulnerable communities in Ghana.
    </p>

    <p style="line-height:1.7; color:#374151; margin-top:8px;">
      Centered on the
      <span style="font-weight:700; color:#064e3b;">
        Building Lobbying Capacity of Climate Affected Farmers (BLOCAF)
      </span>
      project, this initiative empowers climate-vulnerable indigenous
      community farmers to actively influence climate policy.
    </p>

    <div style="border-left:4px solid #059669; background:#ecfdf5; padding:10px 14px; border-radius:6px; margin:14px 0;">
      <em style="color:#065f46;">
        “The project shifts power dynamics — enabling these communities to
        become direct participants in shaping the policies that affect
        their lives.”
      </em>
    </div>

    <p style="line-height:1.7; color:#374151; margin-top:8px;">
      By doing so, it fulfills
      <span style="color:#047857; font-weight:600;">Article 7</span> of the
      <span style="color:#059669; font-weight:500;">Paris Agreement</span>
      and ensures that Ghana’s
      <span style="text-decoration:underline; text-decoration-color:#10b981;">
        Nationally Determined Contributions (NDCs)
      </span>
      are informed by the on-the-ground realities of
      climate-affected communities.
    </p>
  `,
    link: "https://www.researchgate.net/profile/Lord-Offei-Darko/publication/386488720_Lobbying_strategies_for_climate-affected_farmers_in_rural_communities_in_Ghana_a_case_study_of_Klotekpo_in_the_Volta_region_of_Ghana/links/6822ebd2026fee1034f7b157/Lobbying-strategies-for-climate-affected-farmers-in-rural-communities-in-Ghana-a-case-study-of-Klotekpo-in-the-Volta-region-of-Ghana.pdf",
    images: [
      "/drive2/volta1.jpeg",
      "/drive2/volta2.jpeg",
      "/drive2/volta3.jpeg",
    ],
  },
  {
    name: "🍯 Eastern Region",
    lat: 6.2,
    lng: -0.2833,
    population: "3.2M",
    projects: 1,
    beneficiaries: "125 (80 youth, 45 women)",
    overview: `
    <p style="color:#065f46; font-weight:600; font-size:1.05rem;">
      🍯 The Beelieve Smart Project
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      offers a <span style="font-weight:500; color:#059669;">practical and sustainable solution</span> 
      to the impacts of climate change by providing alternative livelihoods to 
      youth and farmers in rural Ghana. The initiative focuses on 
      <span style="color:#047857; font-weight:600;">beekeeping and honey production</span>, 
      training participants in climate-resilient methods that not only provide 
      a new source of income but also enhance agricultural productivity through pollination.
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      By adopting an <span style="font-style:italic; color:#059669;">ecosystem-based approach</span> 
      and prioritizing <span style="font-weight:600; color:#065f46;">gender equity and social inclusion</span>, 
      the project empowers communities and disseminates vital climate knowledge, 
      promoting sustainable development from the ground up.
    </p>
  
    <div style="border-left:4px solid #059669; background:#ecfdf5; padding:10px 14px; border-radius:6px; margin:14px 0;">
      <em style="color:#065f46;">
        “Beelieve Smart represents the harmony between people, planet, and purpose —
        transforming rural resilience into a shared prosperity.”
      </em>
    </div>
  `,
    link: "impart",
    images: [
      "/drive2/beeleive4.jpg",
      "/drive2/bee2.jpg",
      "/drive2/beeleive3.jpg",
    ],
  },
  {
    name: "🏛 National Project",
    lat: 7.9465,
    lng: -1.0232,
    population: "33.1M",
    projects: 1,
    beneficiaries: "300+ marginalized participants",
    overview: `
    <p style="color:#065f46; font-weight:600; font-size:1.05rem;">
      🏛 Marginalized Groups Empowerment for Climate Justice (MCECJ) Project
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      The initiative <span style="color:#047857; font-weight:500;">critically assesses the inclusion of vulnerable populations</span> 
      in Ghana's national climate policies. It examines how 
      <span style="font-weight:600; color:#065f46;">youth and indigenous communities&opos; rights</span> 
      to a safe environment are protected and promoted within the country&opos;s 
      climate strategies.
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      This analysis is supported by targeted workshops in the 
      <span style="color:#059669; font-weight:600;">Northern (Sankpala)</span> and 
      <span style="color:#059669; font-weight:600;">Southern (Accra)</span> sectors,
      alongside a national research assessment exploring how existing policies 
      impact <span style="font-weight:600;">youth climate justice</span>.
    </p>
  
    <div style="border-left:4px solid #059669; background:#ecfdf5; padding:10px 14px; border-radius:6px; margin:14px 0;">
      <em style="color:#065f46;">
        “Empowering marginalized voices ensures climate action is not only effective
        but equitable — bridging the gap between policy and lived experience.”
      </em>
    </div>
  
    <p style="line-height:1.7; color:#374151;">
      The MCECJ project represents a cornerstone in Ghana&opos;s pursuit of 
      <span style="color:#059669; font-weight:600;">inclusive and participatory climate governance</span>,
      ensuring that those most affected by climate change are 
      <span style="font-weight:600; color:#065f46;">co-creators of sustainable solutions</span>.
    </p>
  `,
  
    link: "https://drive.google.com/file/d/1VEWO8NzisAu7PEzqs3nUPSpINHBQ7rQW/view?usp=sharing",
    images: [
      "/drive2/bono1.jpg",
      "/drive2/bono3.jpg",
      "/drive2/bono2.jpg",
    ],
  },
  {
    name: "🐝 Bono East Region",
    lat: 7.7,
    lng: -2.0967,
    population: "1.2M",
    projects: 1,
    beneficiaries: "60 trained women",
    overview: `
    <p style="color:#065f46; font-weight:600; font-size:1.05rem;">
      🐝 Beelieve Smart Project — Women&opos;s Climate Enterprise Initiative
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      The <span style="font-weight:600; color:#059669;">Beelieve Smart Project</span>, 
      a beneficiary of the <em>Bridge in Agriculture Programme</em> of the 
      <span style="color:#047857; font-weight:500;">Mastercard Foundation</span>, 
      is a <span style="font-weight:600;">sustainable and alternative livelihood initiative</span> 
      that empowers women in vulnerable communities by establishing a 
      profit-sharing social enterprise.
    </p>
  
    <p style="line-height:1.7; color:#374151;">
      By training these women as <span style="color:#065f46; font-weight:600;">beekeepers</span>, 
      the project provides a new source of income while promoting 
      <span style="font-style:italic; color:#059669;">climate-resilient practices</span>. 
      This approach strengthens both economic independence and ecological balance, 
      making local food systems more sustainable.
    </p>
  
    <div style="border-left:4px solid #fbbf24; background:#fefce8; padding:10px 14px; border-radius:6px; margin:14px 0;">
      <em style="color:#92400e;">
        “Through honey, women are building independence — one hive, one harvest, one future at a time.”
      </em>
    </div>
  
    <p style="line-height:1.7; color:#374151;">
      The enterprise model ensures that the benefits of the beekeeping initiative 
      are shared directly with participating women, fostering 
      <span style="color:#065f46; font-weight:600;">economic independence</span> 
      and enhancing their leadership within the community.
    </p>
  `,
    link: "https://drive.google.com/file/d/17b2EPNSZd6lR0nC0URCzBZgmjyYjZkt4/view?usp=drive_link",
    images: [
      "/drive/d (11).jpg",
      "/drive2/b.jpg",
      "/drive2/bee1.jpeg"
    ],
  },
];

export default function MapComponent() {
  const [selectedRegion, setSelectedRegion] = useState(null);

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
        title={
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-emerald-800"
          >
            <span className="text-2xl font-semibold">
              {selectedRegion?.name}
            </span>
          </motion.div>
        }
        onCancel={() => setSelectedRegion(null)}
        footer={null}
        width={750}
        centered
      >
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Summary Card */}
            <Card
              className="shadow-lg hover:shadow-xl transition-shadow border-emerald-100"
              title={
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-900">
                    Regional Overview
                  </span>
                  <Badge
                    count={`${selectedRegion.projects} Project${
                      selectedRegion.projects > 1 ? "s" : ""
                    }`}
                    style={{ backgroundColor: "#065f46" }}
                  />
                </div>
              }
            >
              <div
                className="grid grid-cols-2 gap-4 mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center p-3 bg-emerald-100 rounded-lg shadow-sm hover:bg-emerald-200 transition-all"
                >
                  <div className="text-2xl font-bold text-emerald-700">
                    {selectedRegion.population}
                  </div>
                  <div className="text-sm text-emerald-800">Population</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center p-3 bg-emerald-200 rounded-lg shadow-sm hover:bg-emerald-300 transition-all"
                >
                  <div className="text-2xl font-bold text-emerald-900">
                    {selectedRegion.beneficiaries}
                  </div>
                  <div className="text-sm text-emerald-800">Beneficiaries</div>
                </motion.div>
              </div>
            </Card>

            {/* Content Tabs */}
            <Card
              className="mt-5 border-emerald-100 shadow-lg hover:shadow-emerald-200 transition-all rounded-2xl bg-gradient-to-b from-white to-emerald-50"
              title={
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 text-emerald-800"
                >
                  <span className="text-2xl font-semibold">
                    🌍 Project Overview
                  </span>
                </motion.div>
              }
            >
              {/* Overview Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 text-neutral-700 leading-relaxed"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: selectedRegion.overview }}
                  className="prose prose-emerald max-w-none leading-relaxed text-neutral-700"
                />
                {/* Gallery Grid */}
                {selectedRegion.images?.length > 0 && (
                  <div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5"
                    data-aos="fade-up"
                  >
                    {selectedRegion.images.map((img, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.05,
                          rotate: 1,
                          boxShadow: "0 10px 20px rgba(16, 185, 129, 0.3)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="overflow-hidden rounded-xl shadow-sm cursor-pointer"
                      >
                        <Image
                          src={img}
                          alt={`${selectedRegion.name} image ${i + 1}`}
                          width={350}
                          height={220}
                          className="w-full h-44 object-cover rounded-xl hover:opacity-90 transition-all duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* View Report Button */}
                <motion.div
                  className="text-center mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <a
                    href={selectedRegion.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-all shadow-md"
                  >
                    📘 View Full Report
                  </a>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        )}
      </Modal>
    </>
  );
}
