"use client";
import { MapPin, Menu, X } from "lucide-react"; // Import the Menu and X icons
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import MapComponent from "@/components/MapComponent";
import WeatherInfoCard from "@/components/WeatherInfoCard";

export default function Home() {
  const [county, setCounty] = useState("");
  const [countyProb, setCountyProb] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-blue-900 to-black text-white font-sans">
      <button
        onClick={toggleSidebar}
        className="p-2 bg-black text-white rounded fixed top-4 left-4"
      >
        <Menu className="w-6 h-6 text-white" /> {/* Use the Menu icon */}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-black text-white transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 bg-black text-white rounded m-4"
        >
          <X className="w-6 h-6 text-white" /> {/* Use the X icon */}
        </button>
        <ul className="p-4">
          <li className="p-2 hover:bg-gray-700 cursor-pointer font-bold">
            <Link href="/">California Wildfire Tracker</Link>{" "}
            {/* Link to the current page */}
          </li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer font-bold">
            COVID-19 Pandemic
          </li>
        </ul>
      </div>
      <h1 className="font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-blue-100 flex items-center gap-2">
        <span className="text-light-blue-400 flex items-center gap-1">
          California Wildfires <MapPin className="w-8 h-8 text-red-400" />
        </span>
      </h1>
      <h2>
        <span className="bg-white bg-clip-text text-transparent text-xl">
          Click on the county to get a real-time wildfire prediction
        </span>
      </h2>
      <div className="flex flex-col items-center justify-between w-full">
        <div className="z-10 w-full max-w-7xl flex flex-row items-start space-x-4 justify-center">
          {county && (
            <div className="flex-shrink-0">
              <WeatherInfoCard
                county={county}
                setCounty={setCounty}
                countyProb={countyProb}
              />
            </div>
          )}
          <div className="w-[800px] h-[600px] border-0">
            <MapComponent setCounty={setCounty} setCountyProb={setCountyProb} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 text-center text-lg text-white font-bold">
        Past Data, Future Vision
      </div>
      <div className="absolute top-4 right-4 text-lg text-white font-bold">
        envision.ai
      </div>
    </main>
  );
}
