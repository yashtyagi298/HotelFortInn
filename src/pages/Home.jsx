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
      <section id="hero">
        <Hero />
      </section>

      {/* Featured Destinations Section */}
      <section id="featured-destinations" mb-3px>
        <FeatureDestination />
      </section>
    <div className='mt-8'>
      <HotelServices/>
    </div>
    <div id = "testimonials">
      <Testimonials/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
