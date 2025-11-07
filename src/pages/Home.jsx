import React from 'react';
import Hero from '../components/Hero';
import FeatureDestination from '../components/FeatureDestination';
import HotelServices from '../components/HotelService';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Featured Destinations Section */}
      <section id="rooms" className="mt-10">
        <FeatureDestination />
      </section>

      {/* Hotel Services Section */}
      <section id="services" className="mt-8">
        <HotelServices />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mt-8">
        <Testimonials />
      </section>

      {/* Footer Section */}
      <section id="footer" className="mt-8">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
