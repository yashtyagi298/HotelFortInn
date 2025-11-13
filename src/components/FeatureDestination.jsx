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
    <div className="bg-gray-50 min-h-screen px-4 md:px-16 lg:px-24 py-20 -mt-22">
      {/* Heading */}
      <h1 className="text-black text-4xl font-bold text-center mb-2 font-playfair">
        Featured Destinations
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-4 text-lg leading-relaxed font-Outfit">
        Explore some of the most beautiful destinations and pick your perfect stay!
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {destinations.map((dest, index) => (
          <LocationCard key={index} city={dest.city} image={dest.image} />
        ))}
      </div>

      {/* ✅ Instagram Follow Section (Below Search Form) */}
      <div className="mt-14 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Follow us on Instagram to grab the best deals ✨
        </h2>

        {/* ✅ Responsive Flex - column on mobile, row on md+ screens */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Account 1 - Lucknow */}
          <a
            href="https://www.instagram.com/hotelfortinnn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform bg-white border border-gray-200 shadow-md px-4 py-2 rounded-full"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            <span className="text-sm text-gray-800 font-medium">@hotelfortinnn</span>
          </a>

          {/* Account 2 - Manali */}
          <a
            href="https://www.instagram.com/hotel_fort_inn_manali"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform bg-white border border-gray-200 shadow-md px-4 py-2 rounded-full"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            <span className="text-sm text-gray-800 font-medium">@hotel_fort_inn_manali</span>
          </a>
        </div>
      </div>

      {/* Search Form */}
      <div className="mt-16">
        <SearchForm />
      </div>
    </div>
  );
};

export default FeaturedDestination;
