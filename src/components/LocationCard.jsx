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
      className="bg-white flex flex-col h-full min-h-[380px] rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-full h-[230px] sm:h-[250px] bg-gray-100 flex items-center justify-center">
        <img
          src={image}
          alt={`${city} landmark`}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x250?text=Image+Unavailable"; // fallback if image missing
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-between text-center flex-grow p-4 sm:p-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin className="text-red-600 w-5 h-5" />
            <h2 className="text-black font-bold text-lg sm:text-xl tracking-wide uppercase">
              {city}
            </h2>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full transform transition-all duration-200 hover:scale-105 hover:shadow-md text-sm sm:text-base mt-3"
        >
          Explore more!
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
