import React from "react";
import "./CategoryGrid.css";

const logos = [
  "./logo/S.png",
  "./logo/E.png",
  "./logo/K.png",
  "./logo/N.png",
  "./logo/P.png",
  "./logo/G.png",
  "./logo/R.png",
  "./logo/D.png",
];

const LogoSlider = () => {
  return (
    <div className="logo-slider-wrapper overflow-hidden bg-[#F8F6DC] py-4">
      <div className="logo-slider flex w-max">
        {/* Duplicating logos for smooth infinite effect */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="logo-item w-[200px] h-[200px] mx-4 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
