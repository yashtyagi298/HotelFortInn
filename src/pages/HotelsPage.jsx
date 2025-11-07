import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HotelCard from '../components/HotelCard';
import { assets } from '../assets/assets';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';

const hotelsData = {
  Lucknow: [
    { _id: '1', id: '1', hotel: { name: 'BKT Hotel', address: 'BKT, Lucknow' }, images: [assets.lucknowbkt2], pricePerNight: 2500 },
    { _id: '2', id: '2', hotel: { name: 'Indira Nagar Inn', address: 'Indira Nagar, Lucknow' }, images: [assets.lucknowchinhat1], pricePerNight: 3000 },
    { _id: '3', id: '3', hotel: { name: 'Faizullaganj Stay', address: 'Faizullaganj, Lucknow' }, images: [assets.lucknowfizulganj2], pricePerNight: 2800 },
    { _id: '4', id: '4', hotel: { name: 'Chinhat Palace', address: 'Chinhat, Lucknow' }, images: [assets.lucknowchinhat3], pricePerNight: 3500 },
  ],
  Kanpur: [
    { _id: '5', id: '5', hotel: { name: 'Barra Bypass Hotel', address: 'Barra Bypass, Kanpur' }, images: [assets.kanpurroom1], pricePerNight: 2700 },
    { _id: '6', id: '6', hotel: { name: 'Kidwai Nagar Inn', address: 'Kidwai Nagar, Kanpur' }, images: [assets.kidwaikanpur2], pricePerNight: 2900 },
  ],
  'Greater Noida': [
    { _id: '7', id: '7', hotel: { name: 'Parichowk Suites', address: 'Parichok, Greater Noida' }, images: [assets.parichowk1], pricePerNight: 3200 },
  ],
  Manali: [
    { _id: '8', id: '8', hotel: { name: 'Manali Resort', address: 'Manali' }, images: [assets.manaliroom1], pricePerNight: 4500 },
  ],
};

const HotelsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get('city');

  const hotels = hotelsData[city] || [];

  // ✅ Scroll page to top whenever city or page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [city]);

  // Scroll to FeatureDestination section on Home
  const scrollToHomeFeature = (e) => {
    e.preventDefault();
    navigate("/"); // Navigate to Home page
    setTimeout(() => {
      const element = document.getElementById("featured-destinations");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure Home renders
  };

  return (
    <div>
      <Navbar />

      <div className="pt-22 px-8 md:px-16 lg:px-24">
        {/* Breadcrumbs */}
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
              <span className="text-gray-800 font-semibold">{city}</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Hotels in {city}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-4">
          {hotels.length > 0 ? (
            hotels.map((room, index) => (
              <HotelCard key={room._id} room={room} index={index} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-8">
              No hotels found in {city}.
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 lg:mb-8">
        <SearchForm />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HotelsPage;
