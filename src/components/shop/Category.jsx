import React, { useState } from "react";

function Category({ setCategory }) {
  const [categories, setCategories] = useState([]);

  useState(() => {
    try {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
    } catch (error) {
      console.log('Category error!');
    }
  }, []);

  return (
    <div className="w-72 border p-5">
      <h4 className="text-lg font-semibold mb-3">Categories</h4>
      <div>
        <div className="hover:cursor-pointer" onClick={() => setCategory('')}>all</div>
        {categories.map(cat => (
          <div className="hover:cursor-pointer" onClick={() => setCategory(cat)}>{cat}</div>
        ))}
      </div>
    </div>
  );
}

export default Category;
