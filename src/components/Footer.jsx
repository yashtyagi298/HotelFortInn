import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand / About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-playfair font-bold">Hotel Fort Inn</h1>
          <p className="text-gray-400">
           
At Hotel Fort Inn, we don’t just offer rooms — we offer a sense of belonging.
Every property reflects the city’s soul — the charm of Lucknow, the energy of Kanpur, the innovation of Greater Noida, and the serenity of Manali.

          </p>
          <div className="flex items-center gap-4 mt-4">
            {/* <a href="#"><Facebook className="w-5 h-5 text-white hover:text-blue-500 transition" /></a> */}
            <a href="https://www.instagram.com/hotelfortinnn?igsh=OHRnZDV3dXA0eGtu"><Instagram className="w-5 h-5 text-white hover:text-pink-500 transition" /></a>
            {/* <a href="#"><Twitter className="w-5 h-5 text-white hover:text-blue-400 transition" /></a> */}
            {/* <a href="#"><Linkedin className="w-5 h-5 text-white hover:text-blue-700 transition" /></a> */}
          </div>
        </div>

        {/* Quick Links / Policies */}
        <div className="space-y-3">
  <h2 className="text-lg font-semibold">Quick Links</h2>
  <ul className="space-y-2 text-gray-400">
    <li><a href="#home" className="hover:text-white transition">Home</a></li>
    <li><a href="#services" className="hover:text-white transition">Services</a></li>
   
    <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
    <li><a href="#footer" className="hover:text-white transition">Contacts</a></li>
  </ul>
</div>
        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="flex items-center gap-2 text-gray-400"><MapPin className="w-4 h-4" /> PLOT NO.3, GATA NO.24 , NAVI KOT NANDANA, Bakshi Ka Talab, Lucknow, Uttar Pradesh, 226013, India</div>
          <div className="flex items-center gap-2 text-gray-400"><Mail className="w-4 h-4" /> hotelfortinngroup@gmail.com</div>
          <div className="flex items-center gap-2 text-gray-400"><Phone className="w-4 h-4" /> +91 9170435385</div>
          {/* <div className="mt-4 text-gray-400">
            <p>Check-in: 12:00 PM | Check-out: 11:00 AM</p>
            <p>Customer Support: Mon-Sun, 9:00 AM - 8:00 PM</p>
          </div> */}
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hotel Fort Inn. All rights reserved.
      </div>
    </footer>
  );
}
