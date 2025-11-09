// SearchForm.jsx
import React, { useState } from "react";

const SearchForm = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!destination || !checkIn || !checkOut) {
      alert("Please fill all required fields (Destination & Dates).");
      return;
    }

    // Owner WhatsApp number (replace with real one)
    const ownerNumber = "919170435385"; // e.g. 919876543210 (without +)

    // Message
    const message = `
🛎️ New Booking Inquiry!
---------------------------------
📍 Destination: ${destination}
📅 Check-in: ${checkIn}
📅 Check-out: ${checkOut}
👥 Guests: ${guests}
🏨 Room Type: ${roomType || "Not specified"}
---------------------------------
🔗 From: ${window.location.href}
    `;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-end gap-6 w-full max-w-6xl mx-auto"
    >
      {/* Destination Dropdown */}
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Destination
        </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          <option value="">Select City</option>
         
          <option value="Lucknow">Lucknow</option>
          <option value="Kanpur">Kanpur</option>
          <option value="Greater Noida">Greater Noida</option>
           <option value="Manali">Manali</option>
        </select>
      </div>

      {/* Dates */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Check in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 w-full transition"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Check out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 w-full transition"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="flex-1">
        <label
          htmlFor="guests"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          Guests
        </label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
      </div>

      {/* Room Type */}
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Room Type
        </label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          <option value="">Select Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Deluxe">Deluxe</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex justify-start md:items-start">
        <button
          type="submit"
          className="rounded-xl bg-black text-white py-3 px-8 font-semibold hover:bg-gray-800 transition-shadow shadow-md hover:shadow-lg"
        >
          Book now
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
