import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section
      className='relative flex flex-col items-center justify-start text-center text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center min-h-[100vh] overflow-hidden pt-20 md:pt-28'
    >
      {/* 🔹 Overlay for soft dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 px-6 md:px-16 flex flex-col items-center justify-center">

        {/* ✅ Logo (same look, same placement) */}
        <img
          src={assets.LOGO}
          alt="logo"
          className="h-64 md:h-80 lg:h-[22rem] w-auto mx-auto mb-5 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.45)]"
        />

        {/* 🔹 Tagline */}
        <p className="bg-[#49B9FF]/60 px-6 py-2 rounded-full text-sm md:text-base inline-block mb-5">
          The Ultimate Hotel Experience
        </p>

        {/* 🔹 Title */}
        <h1 className="font-playfair text-3xl md:text-6xl font-extrabold max-w-2xl mx-auto leading-tight">
         
Welcome to Hotel Fort Inn Where Comfort Meets Character.

        </h1>

        {/* 🔹 Subtitle */}
        <p className="text-gray-200 mt-4 max-w-xl mx-auto text-sm md:text-lg mb-10">
          From the royal lanes of Lucknow to the calm hills of Manali, Hotel Fort Inn brings you a stay that blends modern design, local flavor, and genuine warmth.

        </p>




      </div>
    </section>
  );
};

export default Hero;
