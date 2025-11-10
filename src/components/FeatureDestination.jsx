import React from "react";
import LocationCard from "./LocationCard";
import { assets } from "../assets/assets";
import SearchForm from "./SearchForm";
import { Instagram } from "lucide-react";

const FeaturedDestination = () => {
  const destinations = [
    { city: "Lucknow", image: assets.lucknowloc },
    { city: "Kanpur", image: assets.kanpur },
    { city: "Greater Noida", image: assets.noida },
    { city: "Manali", image: assets.manali },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-16 lg:px-24 py-20 -mt-12">
      {/* Heading */}
      <h1 className="text-black text-4xl font-bold text-center mb-6 font-playfair">
        Featured Destinations
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4 text-lg leading-relaxed font-Outfit">
        Explore some of the most beautiful destinations and pick your perfect stay!
      </p>

      {/* Instagram Follow Section (just below paragraph) */}
      <div className="flex justify-center mb-12">
        <a
          href="https://www.instagram.com/hotelfortinnn?igsh=OHRnZDV3dXA0eGtu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:scale-105 transition-transform bg-white border border-gray-200 shadow-md px-4 py-2 rounded-full"
        >
          <Instagram className="w-5 h-5 text-black hover:text-pink-500 transition" />
          <span className="text-sm text-gray-800 hover:text-black font-medium">
            👈 Follow for More Updates 🔔
          </span>
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {destinations.map((dest, index) => (
          <LocationCard key={index} city={dest.city} image={dest.image} />
        ))}
      </div>

      {/* Search Form */}
      <div className="mt-16">
        <SearchForm />
      </div>
    </div>
  );
};

export default FeaturedDestination;
