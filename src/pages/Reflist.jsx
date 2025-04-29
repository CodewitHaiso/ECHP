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

const RefrigeratorList = () => {
  const products = [
    { id: 1, brand: "Haier", name: "Double Door Refrigerator", image: "ref.png", oldPrice: 75000, newPrice: 72000 },
    { id: 2, brand: "Samsung", name: "Side-by-Side Refrigerator", image: "ref.png", oldPrice: 145000, newPrice: 138000 },
    { id: 3, brand: "Dawlance", name: "Top Mount Refrigerator", image: "ref.png", oldPrice: 85000, newPrice: 81000 },
    { id: 4, brand: "PEL", name: "Smart Inverter Refrigerator", image: "ref.png", oldPrice: 96000, newPrice: 92000 },
    { id: 5, brand: "Orient", name: "Glass Door Refrigerator", image: "ref.png", oldPrice: 78000, newPrice: 74000 },
    { id: 6, brand: "Gree", name: "Frost Free Refrigerator", image: "ref.png", oldPrice: 98000, newPrice: 94000 },
    { id: 7, brand: "Kenwood", name: "Multi-Door Refrigerator", image: "ref.png", oldPrice: 132000, newPrice: 126000 },
  ];

  const scrollRef = useRef(null);
  const [visibleProducts] = useState([...products, ...products]); // Duplicate for infinite scroll effect

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = scrollContainer.firstChild.offsetWidth + 16; // 16px because of gap-4

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

export default RefrigeratorList;
