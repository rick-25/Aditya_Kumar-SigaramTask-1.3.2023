import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Category from "./Category";
import Products from "./Products";

function ShopingPage() {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(body => setProducts(body))
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className="flex flex-row h-screen w-screen">
      <Category setCategory={(cat) => setSelectedCategory(cat)} />
      <Products 
        products={products.filter(p => (selectedCategory === '' || p.category === selectedCategory))} 
        addToCart={(p) => setCardData([...cardData, p])}
      />
      <Cart products={cardData}/>
    </div>
  );
}

export default ShopingPage;
