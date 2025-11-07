import React from "react";
import LocationCard from "./LocationCard";
import { assets } from "../assets/assets";
import SearchForm from "./SearchForm";

const FeaturedDestination = () => {
  const destinations = [
    { city: "Lucknow", image: assets.lucknowloc },
    { city: "Kanpur", image: assets.kanpur },
    { city: "Greater Noida", image: assets.noida },
    { city: "Manali", image: assets.manali },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-16 lg:px-24 py-20 -mt-12">
      <h1 className="text-black text-4xl font-bold text-center mb-6 font-playfair">
        Featured Destinations
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed font-Outfit">
        Explore some of the most beautiful destinations and pick your perfect stay!
      </p>

    {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
  {destinations.map((dest, index) => (
    <LocationCard key={index} city={dest.city} image={dest.image} />
  ))}
</div>

      {/* Search Form */}
      <div className="mt-16 ">
        <SearchForm />
      </div>
    </div>
  );
};

export default FeaturedDestination;
