import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Wifi,
  Coffee,
  ConciergeBell,
  Tv,
  BedDouble,
  UtensilsCrossed,
  PhoneCall,
  Star,
  MapPin,
} from "lucide-react";

import { assets } from "../assets/assets";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import HotelMap from "../components/HotelMap";

// ----------- Hotel Data with Latitude & Longitude -----------
const hotelsData = {
  Lucknow: [
    {
      _id: "1",
      id: "1",
      hotel: { name: "Hotel Fort Inn", address: "Bakshi-ka-talab (BKT), Lucknow" },
      images: [assets.lucknowbkt2, assets.lucknowbkt1, assets.lucknowbkt3],
      pricePerNight: 2500,
      lat: 26.957286,
      lng: 80.931492,
    },
    {
      _id: "2",
      id: "2",
      hotel: { name: "Hotel Fort Inn", address: "Indira Nagar, Lucknow" },
      images: [assets.lucknowindranagar2, assets.lucknowindranagar1, assets.lucknowindranagar3],
      pricePerNight: 3000,
      lat: 26.869980,
      lng: 80.960060,
    },
    {
      _id: "3",
      id: "3",
      hotel: { name: "Hotel Fort Inn", address: "Faizullaganj, Lucknow" },
      images: [assets.lucknowchinhat3, assets.lucknowindranagar2, assets.lucknowchinhat1],
      pricePerNight: 2800,
      lat: 26.869980,
      lng: 80.960060,
    },
    {
      _id: "4",
      id: "4",
      hotel: { name: "Hotel Fort Inn", address: "Chinhat, Lucknow" },
      images: [assets.lucknowchinhat1, assets.lucknowchinhat2, assets.lucknowchinhat3],
      pricePerNight: 3500,
      lat: 26.869980,
      lng: 80.960060,
    },
  ],
  Kanpur: [
    {
      _id: "5",
      id: "5",
      hotel: { name: "Hotel Fort Inn", address: "Barra Bypass, Kanpur" },
      images: [assets.kanpurroom2],
      pricePerNight: 2700,
      lat: 26.869980,
      lng:80.960060,
    },
    {
      _id: "6",
      id: "6",
      hotel: { name: "Hotel Fort Inn", address: "Kidwai Nagar, Kanpur" },
      images: [assets.kidwaikanpur1, assets.kidwaikanpur2, assets.kidwaikanpur3, assets.kidwaikanpur4],
      pricePerNight: 2900,
      lat: 26.869980,
      lng: 80.960060,
    },
  ],
  "Greater Noida": [
    {
      _id: "7",
      id: "7",
      hotel: { name: "Hotel Fort Inn", address: "Parichowk, Greater Noida" },
      images: [assets.parichowk2, assets.parichowk3, assets.parichowk4],
      pricePerNight: 3200,
      lat: 28.4744,
      lng: 77.5030,
    },
  ],
  Manali: [
    {
      _id: "8",
      id: "8",
      hotel: { name: "Hotel Fort Inn", address: "Manali" },
      images: [assets.manaliroom3, assets.manaliroom4, assets.manaliroom5, assets.manaliroom6],
      pricePerNight: 4500,
      lat: 26.869980,
      lng: 80.960060,
    },
  ],
};

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Get all hotels together
  const allHotels = Object.entries(hotelsData).flatMap(([city, hotels]) =>
    hotels.map((hotel) => ({ ...hotel, city }))
  );

  // Find selected hotel
  const hotel = allHotels.find((h) => h.id === id);
  const [mainImage, setMainImage] = useState(hotel?.images?.[0]);

  if (!hotel) {
    return <div className="text-center text-gray-500 mt-20">❌ Room not found</div>;
  }

  // Smooth scroll to "Featured Destination" section on Home
  const scrollToHomeFeature = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to Home
    setTimeout(() => {
      const element = document.getElementById("featured-destinations");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <div className="font-[Outfit] text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-white mt-12">
        {/* ---------- Breadcrumbs ---------- */}
        <nav className="text-gray-600 text-sm md:text-base mb-6" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a
                href="/"
                onClick={scrollToHomeFeature}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Home
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <a
                href="/"
                onClick={scrollToHomeFeature}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Hotels
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span
                onClick={() => navigate(`/hotels?city=${encodeURIComponent(hotel.city)}`)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                {hotel.city}
              </span>
              <span className="mx-2">/</span>
            </li>
          </ol>
        </nav>

        {/* ---------- Title Section ---------- */}
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-2xl sm:text-3xl font-[Playfair_Display] font-semibold text-gray-900">
                {hotel.hotel.name}
              </h1>
              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-md font-medium">
                20% OFF
              </span>
            </div>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-500 w-4 h-4 fill-yellow-500" />
            ))}
            <span className="text-sm text-gray-500 ml-1">200+ reviews</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{hotel.hotel.address}</span>
          </div>
        </div>

        {/* ---------- Images Section ---------- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="md:col-span-2">
            <img
              src={mainImage}
              alt="Main Room"
              className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-1 gap-3">
            {hotel.images.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                onClick={() => setMainImage(img)}
                className={`w-full h-[80px] sm:h-[100px] object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                  mainImage === img ? "ring-2 ring-blue-500 scale-105" : "hover:opacity-90"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- Description + Amenities ---------- */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-[Playfair_Display] font-semibold text-gray-900">
              Experience Luxury Like Never Before
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <Wifi className="w-4 h-4 text-blue-500" /> High-speed Wi-Fi
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <Coffee className="w-4 h-4 text-amber-600" /> Free Breakfast
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <ConciergeBell className="w-4 h-4 text-purple-600" /> Room Service
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <Tv className="w-4 h-4 text-indigo-600" /> Smart LED TV
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <BedDouble className="w-4 h-4 text-pink-500" /> Premium Bedding
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <UtensilsCrossed className="w-4 h-4 text-orange-500" /> Room Dining & Daily Housekeeping
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-md flex items-center gap-2 text-sm text-gray-700">
                <PhoneCall className="w-4 h-4 text-green-600" /> 24×7 Front Desk Assistance
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Booking Form ---------- */}
        <div className="mt-10">
          <BookingForm />
        </div>

        {/* ---------- Map ---------- */}
        <div className="mt-10">
          <HotelMap
            lat={hotel.lat}
            lng={hotel.lng}
            hotelName={hotel.hotel.name}
            address={hotel.hotel.address}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
