import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919170435385";
  const message = "Hello, I’d like to inquire about your hotel services!";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-110 z-50 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white drop-shadow-sm" />
    </button>
  );
};

export default WhatsAppButton;
