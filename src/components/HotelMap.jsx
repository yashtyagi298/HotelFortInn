import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

// ✅ Fix Leaflet marker icon issue in Vite/React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 🧭 Component to handle map click event
const MapClickHandler = ({ lat, lng }) => {
  useMapEvents({
    click: () => {
      const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
      window.open(googleMapsUrl, "_blank"); // open Google Maps in new tab
    },
  });
  return null;
};

const HotelMap = ({ lat, lng, hotelName, address }) => {
  if (!lat || !lng) {
    return (
      <div className="text-gray-400 italic text-center py-6">
        📍 Location not available
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-300 relative">
      <MapContainer
        center={[lat, lng]}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full cursor-pointer"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <div className="text-sm text-gray-800">
              <strong>{hotelName}</strong>
              <br />
              {address}
              <br />
              <a
                href={`https://www.google.com/maps?q=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-xs mt-1 inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </Popup>
        </Marker>

        {/* ✅ When map clicked, open in Google Maps */}
        <MapClickHandler lat={lat} lng={lng} />
      </MapContainer>

      <div className="absolute bottom-2 right-2 bg-white/90 text-xs px-2 py-1 rounded-md shadow">
        🖱️ Click map to open in Google Maps
      </div>
    </div>
  );
};

export default HotelMap;
