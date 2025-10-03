"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Sample Ghana cities with coordinates
const locations = [
  { name: "Accra", coords: [5.55, -0.2] },
  { name: "Kumasi", coords: [6.69, -1.62] },
  { name: "Takoradi", coords: [4.88, -1.76] },
  { name: "Tamale", coords: [9.4, -0.84] },
  { name: "Cape Coast", coords: [5.1, -1.25] },
];

export default function MapComponent() {
  return (
    <MapContainer
      center={[7.9465, -1.0232]} // Ghana center
      zoom={6} // zoomed out for country view
      style={{ height: "100%", width: "100%" }}
    >
      {/* OpenStreetMap Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Markers */}
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
