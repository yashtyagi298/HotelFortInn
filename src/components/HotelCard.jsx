import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room.id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative w-full bg-white text-gray-500/90 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
      {/* Hotel Image */}
      <img
        src={room.images[0]}
        alt={room.hotel.name}
        className="w-full h-52 sm:h-60 object-cover"
      />

      {/* Best Seller Tag */}
      {index % 2 === 0 && (
        <p className="absolute top-3 left-3 px-3 py-1 text-xs sm:text-sm bg-white rounded-3xl font-semibold text-gray-800 shadow">
          Best Seller
        </p>
      )}

      {/* Details Section */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-lg sm:text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>

          <div className="flex items-center gap-1 text-sm sm:text-base">
            <img
              src={assets.starIconFilled}
              alt="star-icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span>4.5</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 text-sm sm:text-base mt-1 text-gray-600">
          <img
            src={assets.locationFilledIcon}
            alt="location-icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="truncate">{room.hotel.address}</span>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 text-sm sm:text-base font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200">
            Explore more
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
