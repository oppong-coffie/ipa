"use client";

import React, { useState } from "react";
import { Modal } from "antd";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/drive/d (1).jpg",
    alt: "Resilient Farming for a Better Tomorrow",
  },
  {
    type: "image",
    src: "/drive/d (11).jpg",
    alt: "From Blossom to Honeycomb",
  },
  {
    type: "image",
    src: "/images/ga.jpg",
    alt: "Every Voice Counts, Every Story Matters",
  },

  {
    type: "image",
    src: "/images/wk.jpeg",
    alt: "Knowledge that Inspires Growth",
  },

  {
    type: "image",
    src: "/images/agric.jpg",
    alt: "Sustainable Agriculture",
  },
  {
    type: "image",
    src: "/drive/0.jpeg",
    alt: "Smart Farmers",
  },
  {
    type: "image",
    src: "/drive/p.jpg",
    alt: "Creating Pathways of Opportunity",
  },
  {
    type: "image",
    src: "/images/women.jpg",
    alt: "Women in Sanpkala",
  },
  {
    type: "image",
    src: "/images/dce.jpg",
    alt: "Time with DCE",
  },
  {
    type: "video",
    src: "/videos/poor5.mp4",
    alt: "IPAGH - Northen Sector video",
  },
  {
    type: "video",
    src: "/videos/climate.mp4",
    alt: "Workshop of Empowerment video",
  },
  // {
  //   type: "video",
  //   src: "https://www.youtube.com/embed/9bZkp7q19f0",
  //   alt: "Environmental Awareness Event",
  // },
];

export default function MediaGallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

// ✅ Type the parameter:
const openModal = (item: MediaItem) => setSelectedItem(item);
const closeModal = () => setSelectedItem(null);

  return (
    <section className="py-1 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#8B7D6B] mb-4 drop-shadow-sm">
          📸 Photo and Video Gallery
        </h2>
        <p className="text-lg text-[#5B3A1A] max-w-3xl mx-auto leading-relaxed">
          Explore our impactful projects and community moments through photos and videos. Click any item to view in full size.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaItems.map((item, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(item)}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
            ) : (
              <div className="w-full h-64 bg-[#FDDC5C] flex items-center justify-center">
                <span className="text-5xl">▶️</span>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-yellow-100 py-2 px-3 text-sm font-semibold">
              {item.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={!!selectedItem}
        onCancel={closeModal}
        footer={null}
        centered
        width={800}
        bodyStyle={{ backgroundColor: "#FFFDF5", borderRadius: "12px" }}
      >
        {selectedItem && (
          <div className="text-center">
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt={selectedItem.alt} className="w-full rounded-lg" />
            ) : (
              <div className="relative w-full h-96">
                <iframe
                  src={selectedItem.src}
                  title={selectedItem.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            )}
            <p className="text-[#5B3A1A] mt-4 font-medium">{selectedItem.alt}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
