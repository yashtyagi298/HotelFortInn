import React from "react";
import { Truck, MapPin, Coffee, Wifi, Utensils } from "lucide-react";

export default function HotelServices() {
  return (
    <section className="relative bg-white px-6 md:px-16 lg:px-24">
      {/* Headings */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h5 className="text-sm md:text-base font-semibold text-gray-500 tracking-widest uppercase mb-2">
          OUR SERVICES
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 font-playfair">
          Hotel Facilities
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Experience the best amenities and services during your stay. From comfortable rooms to seamless transport, we ensure convenience and comfort for all our guests.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* Pick Up & Drop */}
        <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-red-100 p-6 rounded-full mb-5 flex items-center justify-center">
            <Truck className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pick Up & Drop</h3>
          <p className="text-gray-600 text-sm">
            Convenient airport and city transfers for a hassle-free experience.
          </p>
        </div>

        {/* Parking Space */}
        <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-blue-100 p-6 rounded-full mb-5 flex items-center justify-center">
            <MapPin className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-Outfit">Parking Space</h3>
          <p className="text-gray-600 text-sm">
            Secure and spacious parking for all our guests.
          </p>
        </div>

        {/* Room Service */}
        <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-yellow-100 p-6 rounded-full mb-5 flex items-center justify-center">
            <Coffee className="w-10 h-10 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-outfit">Room Service</h3>
          <p className="text-gray-600 text-sm">
            Order food, drinks, and essentials straight to your room 24/7.
          </p>
        </div>

        {/* Wi-Fi */}
        <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-green-100 p-6 rounded-full mb-5 flex items-center justify-center">
            <Wifi className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Wi-Fi</h3>
          <p className="text-gray-600 text-sm">
            High-speed internet access available throughout the hotel premises.
          </p>
        </div>

        {/* 🍽️ Food Service */}
        <div className="flex flex-col items-center text-center p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-orange-100 p-6 rounded-full mb-5 flex items-center justify-center">
            <Utensils className="w-10 h-10 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Service</h3>
          <p className="text-gray-600 text-sm">
            Enjoy freshly prepared meals and multi-cuisine options anytime you desire.
          </p>
        </div>
      </div>
    </section>
  );
}
