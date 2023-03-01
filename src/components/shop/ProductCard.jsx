import React from "react";

function ProductCard({ product, add, added }) {
  return (
    <div className="flex w-full" onClick={() => add(product)}>
      <img
        src={product.image}
        alt={product.title}
        className="object-cover"
        width={80}
        height={80}
      />
      <div className="text-sm">
        <p className="text-sm mb-2">{product.title}</p>
        {!added && (
          <button className="shadow-md">Add to card +</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
