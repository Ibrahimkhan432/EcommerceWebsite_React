import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        console.log("res=>", res.data.products);
      })  
  },[]);
  return (
    <div>
      <div className="border-2 border-indigo-500 w-full">home</div>
      <h1>Our Products</h1>
       {products.map((product) => (
        <ProductCard 
        key={product.id}
        product={product}/>
      ))}
    </div>
  );
};

export default Home;
