import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navbarClasses = isHome
    ? isScrolled
      ? 'bg-white/90 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4'
      : 'py-8 md:py-10'
    : 'bg-white shadow-md text-gray-800 py-4';

  const linkTextColor = isHome ? (isScrolled ? 'text-gray-800' : 'text-white') : 'text-gray-800';
  const underlineColor = isHome ? (isScrolled ? 'bg-gray-800' : 'bg-white') : 'bg-gray-800';

  // ✅ Scroll helper — har section ke liye
  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Navbar Links
  const navLinks = [
    { name: 'Home', path: '/', onClick: () => navigate('/') },
    { name: 'Hotels', path: '/', onClick: () => scrollToSection('featured-destinations') },
    { name: 'Experience', path: '/', onClick: () => scrollToSection('testimonials') },
    { name: 'About', path: '/', onClick: () => scrollToSection('footer') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${navbarClasses}`}
    >
      {/* Left Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => (
          <button
            key={i}
            onClick={link.onClick}
            className={`group flex flex-col gap-0.5 ${linkTextColor}`}
          >
            {link.name}
            <div
              className={`${underlineColor} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </button>
        ))}
      </div>

      {/* Center Logo */}
      <Link
        to="/"
        className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 cursor-pointer ${
          isHome
            ? isScrolled
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75 pointer-events-none'
            : 'opacity-100 scale-100'
        }`}
      >
        <img
          src={assets.logoblack}
          alt="logo"
          className="h-18 w-auto object-contain transition-all duration-700"
        />
      </Link>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={() => scrollToSection('featured-destinations')}
          className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
            isHome
              ? isScrolled
                ? 'text-white bg-black'
                : 'bg-white text-black'
              : 'text-white bg-black'
          }`}
        >
          Explore
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden ml-auto">
        {(isHome ? isScrolled : true) && (
          <img
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={assets.menuIcon}
            alt="menu"
            className={`h-8 transition-all duration-500 ${
              isHome && !isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          />
        )}
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-white via-gray-100 to-white backdrop-blur-xl text-white flex flex-col md:hidden items-center justify-start pt-12 gap-8 font-medium transform transition-all duration-700 ease-in-out z-50 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
          <img src={assets.closeIcon} alt="close menu" className="h-5 w-5 transition-all" />
        </button>

        <div className="flex items-center justify-center mt-4 mb-1">
          <img
            src={assets.logoblack}
            alt="logo"
            className="h-40 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* ✅ Mobile Links */}
        <div className="flex flex-col items-center gap-5 mt-2">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => {
                setIsMenuOpen(false);
                link.onClick();
              }}
              className="text-lg text-black/90 hover:text-black hover:scale-105 transition-all duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* ✅ Explore button works globally */}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            scrollToSection('featured-destinations');
          }}
          className="bg-black text-white px-10 py-3 mt-6 rounded-full text-lg shadow-md hover:shadow-white/50 transition-all duration-300"
        >
          Explore
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
