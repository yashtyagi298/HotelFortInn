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
      className="w-full bg-white flex flex-col h-full rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Section */}
      <div className="w-full h-[210px] sm:h-[230px] bg-gray-100">
        <img
          src={image}
          alt={`${city} landmark`}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/400x250?text=Image+Unavailable';
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-4 sm:p-4 text-center">
        
        {/* City Name */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <MapPin className="text-red-600 w-4 h-4" />
            <h2 className="text-black font-semibold text-lg uppercase tracking-wide">
              {city}
            </h2>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 hover:scale-105 text-sm mt-3"
        >
          Explore more!
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
