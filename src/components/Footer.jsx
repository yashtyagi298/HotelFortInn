import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand / About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-playfair font-bold">Hotel Fort Inn</h1>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            At Hotel Fort Inn, we don’t just offer rooms — we offer a sense of
            belonging. Every property reflects the city’s soul — the charm of
            Lucknow, the energy of Kanpur, the innovation of Greater Noida, and
            the serenity of Manali.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/hotelfortinnn?igsh=OHRnZDV3dXA0eGtu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-white transition">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Contact Us</h2>

          {/* Location */}
          <div className="flex items-start gap-3 text-gray-400 text-sm sm:text-base leading-relaxed">
            <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
            <span>
              PLOT NO.3, GATA NO.24, NAVI KOT NANDANA, BAKASHI KA TALAB,
              LUCKNOW, UTTAR PRADESH, 226013, INDIA
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
            <Mail className="w-5 h-5 text-gray-500" />
            <span>hotelfortinngroup@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
            <Phone className="w-5 h-5 text-gray-500" />
            <span>+91 9170435385</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hotel Fort Inn. All rights reserved.
      </div>
    </footer>
  );
}
