import React from 'react';
import { useNavigate } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
  const navigate = useNavigate();

  const scrollToFeatured = () => {
    const element = document.getElementById("featured-destinations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBreadcrumbClick = (name) => {
    if (name === "Home" || name === "Hotels") {
      if (window.location.pathname !== "/") {
        navigate("/"); // Navigate to home page
        setTimeout(() => scrollToFeatured(), 100); // Scroll after navigation
      } else {
        scrollToFeatured(); // Already on home page
      }
    }
  };

  return (
    <nav className="text-gray-600 text-sm md:text-base mb-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  {/* Use span with click handler instead of Link */}
                  <span
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => handleBreadcrumbClick(path.name)}
                  >
                    {path.name}
                  </span>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span className="text-gray-800 font-semibold">{path.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
