import React, { useEffect, useRef } from "react";
import "./CategoryGrid.css";

const ProductCard = ({ brand, name, image, oldPrice, newPrice }) => {
  return (
    <div className="p-3 border rounded-lg shadow-md bg-[#A6D1C8] relative hover:shadow-lg transition-all w-full sm:w-[250px] flex-shrink-0 flex flex-col justify-between snap-start">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-2 rounded" />
      <div className="text-left p-2 bg-[#A6D1C8] flex-grow min-h-[120px]">
        <p className="text-gray-700 bg-[#A6D1C8] font-semibold">{brand}</p>
        <p className="text-gray-900 bg-[#A6D1C8] font-bold">{name}</p>
        <p className="text-sm text-gray-600 bg-[#A6D1C8] line-through">Rs.{oldPrice}</p>
        <p className="text-red-600 bg-[#A6D1C8] font-bold text-lg">Rs.{newPrice}</p>
      </div>
      <div className="flex justify-center bg-[#A6D1C8] items-end h-12 mt-2">
        <button className="font-medium  bg-[#D6A24A] text-[#0F4C55] font-bold py-1 px-10 rounded hover:bg-[#0F4C55] hover:text-[#D6A24A] transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const GeyserList = () => {
  const products = [
    { id: 1, brand: "Nasgas", name: "20L Semi-Instant Geyser", image: "ac.png", oldPrice: 24800, newPrice: 23500 ,},
    { id: 2, brand: "Nasgas", name: "Instant Electric Geyser", image: "oven.png", oldPrice: 23900, newPrice: 22700 },
    { id: 3, brand: "Beetro", name: "35 Gallon Gas Geyser", image: "tv.png", oldPrice: 75200, newPrice: 71400 },
    { id: 4, brand: "Beetro", name: "35 Gallon Gas Geyser", image: "oven.png", oldPrice: 64700, newPrice: 61400 },
    { id: 5, brand: "Haier", name: "Water Heater", image: "ref.png", oldPrice: 32000, newPrice: 29500 },
    { id: 6, brand: "Orient", name: "Gas Geyser 25L", image: "kh.png", oldPrice: 27800, newPrice: 25900 },
    { id: 7, brand: "Canon", name: "Electric Water Geyser", image: "tv.png", oldPrice: 31000, newPrice: 28900 },
    { id: 8, brand: "Pel", name: "Instant Gas Geyser", image: "tv.png", oldPrice: 28500, newPrice: 26900 },
    { id: 9, brand: "Dawlance", name: "50L Water Heater", image: "oven.png", oldPrice: 35000, newPrice: 32900 },
    { id: 10, brand: "Super Asia", name: "Home Water Geyser", image: "Air.png", oldPrice: 27000, newPrice: 25500 },
  ];

  const scrollRef = useRef(null);
  const productList = [...products, ...products]; // Duplicate for infinite effect

  useEffect(() => {
    const scrollWidth = scrollRef.current.clientWidth;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollWidth;
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-[#F8F6DC] overflow-hidden">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory">
        {productList.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default GeyserList;
