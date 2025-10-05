"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";
import React from 'react'


// ✅ Custom marker icon
const customIcon = new L.Icon({
    iconUrl: "/images/com.jpg",
    iconSize: [9, 61],
    iconAnchor: [12, 41],
  });

const page = () => {
    return(
        <MapContainer
          center={[7, -1.02]} // Ghana center
          zoom={6}
          style={{ height: "600px", width: "100%", borderRadius: "1rem" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker
          position={[7.9, -1.0]}
          icon={customIcon}
          >
            <Popup>"YES OOOO"</Popup>
          </Marker>
    
       
        </MapContainer>
    
  )
}

export default page
