import React, { useEffect, useRef, useState } from "react";
import "./CategoryGrid.css";

const ProductCard = ({ brand, name, image, oldPrice, newPrice }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-[#A6D1C8] relative hover:shadow-lg transition-all 
                    w-full sm:w-[250px] flex-shrink-0 flex flex-col justify-between snap-start">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-2 rounded" />
      <div className="text-left p-2 bg-[#A6D1C8] flex-grow min-h-[120px]">
        <p className="text-gray-700 bg-[#A6D1C8] font-semibold">{brand}</p>
        <p className="text-gray-900 bg-[#A6D1C8] font-bold">{name}</p>
        <p className="text-sm text-gray-600 bg-[#A6D1C8] line-through">Rs.{oldPrice}</p>
        <p className="text-red-600 bg-[#A6D1C8] font-bold text-lg">Rs.{newPrice}</p>
      </div>
      <div className="flex justify-center items-end h-12 mt-2 bg-[#A6D1C8]">
        <button className="font-medium bg-[#D6A24A] text-[#0F4C55] font-bold py-1 px-10 rounded hover:bg-[#0F4C55] hover:text-[#D6A24A] transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ACList = () => {
  const products = [
    { id: 1, brand: "Nasgas", name: "1.5 Ton Inverter AC", image: "ac.png", oldPrice: 82000, newPrice: 78000 },
    { id: 2, brand: "Haier", name: "1 Ton Split AC", image: "ac.png", oldPrice: 72000, newPrice: 69000 },
    { id: 3, brand: "Dawlance", name: "1.5 Ton Energy Saver AC", image: "ac.png", oldPrice: 90000, newPrice: 86000 },
    { id: 4, brand: "Orient", name: "1.5 Ton DC Inverter AC", image: "ac.png", oldPrice: 95000, newPrice: 91000 },
    { id: 5, brand: "Gree", name: "2 Ton Wall Mounted AC", image: "ac.png", oldPrice: 120000, newPrice: 114000 },
    { id: 6, brand: "PEL", name: "1 Ton Smart AC", image: "ac.png", oldPrice: 68000, newPrice: 65000 },
    { id: 7, brand: "Kenwood", name: "1.5 Ton Split AC", image: "ac.png", oldPrice: 88000, newPrice: 84000 },
  ];

  const scrollRef = useRef(null);
  const [visibleProducts, setVisibleProducts] = useState([...products, ...products]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.firstChild.offsetWidth + 16; // 16px because gap-4

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += cardWidth;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-[#F8F6DC] overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ACList;
