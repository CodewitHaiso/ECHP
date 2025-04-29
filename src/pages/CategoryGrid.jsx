import React from "react";
import "./CategoryGrid.css"

function Categories() {

    const categories = [
      { name: "Air Conditioners", image: "ac.png" },
      { name: "LED TVs", image: "tv.png" },
      { name: "Built in Ovens", image: "oven.png" },
      { name: "Refrigerators", image: "ref.png" },
      { name: "Washing Machines", image: "wm.png" },
      { name: "Water Dispensers", image: "wd.png" },
      { name: "Air Coolers", image: "Air.png" },
      { name: "Air Fryers", image: "Air fry.png" },
      { name: "Deep Freezers", image: "fre.png" },
      { name: "Kitchen Hoods", image: "kd.png" },
      { name: "Kitchen Hobs", image: "kh.png" },
      { name: "Kitchen Appliances", image: "ka.png" },
    ];

    return (
      <div className="categories-container">
        <h2 className="categories-title">ALL CATEGORIES</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} className="category-img" />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Categories;