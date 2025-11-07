import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 👈 for reading hotel id

const hotelsData = {
  Lucknow: [
    { _id: "1", id: "1", hotel: { name: "BKT Hotel", address: "BKT, Lucknow" }, pricePerNight: 2500 },
    { _id: "2", id: "2", hotel: { name: "Indira Nagar Inn", address: "Indira Nagar, Lucknow" }, pricePerNight: 3000 },
    { _id: "3", id: "3", hotel: { name: "Faizullaganj Stay", address: "Faizullaganj, Lucknow" }, pricePerNight: 2800 },
    { _id: "4", id: "4", hotel: { name: "Chinhat Palace", address: "Chinhat, Lucknow" }, pricePerNight: 3500 },
  ],
  Kanpur: [
    { _id: "5", id: "5", hotel: { name: "Barra Bypass Hotel", address: "Barra Bypass, Kanpur" }, pricePerNight: 2700 },
    { _id: "6", id: "6", hotel: { name: "Kidwai Nagar Inn", address: "Kidwai Nagar, Kanpur" }, pricePerNight: 2900 },
  ],
  "Greater Noida": [
    { _id: "7", id: "7", hotel: { name: "Parichowk Suites", address: "Parichok, Greater Noida" }, pricePerNight: 3200 },
  ],
  Manali: [
    { _id: "8", id: "8", hotel: { name: "Manali Resort", address: "Manali" }, pricePerNight: 4500 },
  ],
};

const BookingForm = () => {
  const { id } = useParams(); // 👈 e.g. /rooms/7 → id = "7"

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    // 🔍 Find city based on hotel id
    for (const [city, hotels] of Object.entries(hotelsData)) {
      const match = hotels.find((hotel) => hotel.id === id);
      if (match) {
        setDestination(city);
        break;
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      alert("Please fill all required fields (Check-in & Check-out).");
      return;
    }

    const ownerNumber = "919170435385"; // ← apna WhatsApp number
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
      className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-end gap-6 w-full max-w-5xl mx-auto mt-10 border border-gray-100"
    >
      {/* Check-in */}
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1 block">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Check-out */}
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1 block">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Guests */}
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1 block">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
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
        <label className="text-sm font-medium text-gray-700 mb-1 block">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white text-gray-800 px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Deluxe">Deluxe</option>
        </select>
      </div>

      {/* Submit */}
      <div className="flex justify-center md:items-start">
        <button
          type="submit"
          className="rounded-xl bg-black text-white py-3 px-8 font-semibold hover:bg-gray-600 transition-shadow shadow-md hover:shadow-lg"
        >
          Book now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
