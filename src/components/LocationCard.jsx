import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LocationCard = ({ city, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels?city=${city}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
      <img
        src={image}
        alt={`${city} landmark`}
        className="rounded-t-xl w-full h-48 sm:h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col items-center text-center">
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin className="text-red-600 w-5 h-5" />
          <h2 className="text-black font-bold text-xl sm:text-lg tracking-wide uppercase">
            {city}
          </h2>
        </div>

        {/* Book Now Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-black hover:bg-gray-700 text-white font-medium py-1.5 px-4 sm:py-2 sm:px-5 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-md text-sm sm:text-base"
        >
          Explore more!
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
