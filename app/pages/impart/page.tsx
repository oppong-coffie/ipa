"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the MapComponent to avoid SSR error
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
