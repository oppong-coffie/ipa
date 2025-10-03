"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically load the MapComponent to avoid SSR errors
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

export default function Impart2Page() {
  return (
    <div className="h-screen w-full">
      <MapComponent />
    </div>
  );
}
