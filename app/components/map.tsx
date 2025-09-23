"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

export default function MapLocation() {
  useEffect(() => {
    // Ensure AOS or other animations can be initialized here if needed
  }, []);

  const position: [number, number] = [5.6037, -0.1870]; // Example: Accra, Ghana

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6 text-center"
          whileHover={{ scale: 1.02 }}
        >
          Visit Our Office
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
          whileHover={{ scale: 1.01 }}
        >
          Find us at our headquarters in Ghana. Our team is always ready to welcome visitors and partners.
        </motion.p>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-400">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Indigenous People Alliance <br /> Our Headquarters.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
