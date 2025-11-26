import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import CategoryLink from "../component/CategoryLink";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/categories`).then((res) => {
      setCategory(res.data);
      console.log("categ", res.data);
    });
  }, [selectedCategory]);

  useEffect(() => {
    const url =
      selectedCategory === ""
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selectedCategory}`;
    axios.get(url).then((res) => {
      setProducts(res.data.products);
      // console.log("res=>", res.data.products);
    });
  }, [selectedCategory]);

  return (
    <div>
      <div className="border-2 border-indigo-500 w-full flex flex-wrap">
        home
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap mx-auto mb-4">
          {category.map((category) => (
            <CategoryLink
              isSelected={category.slug === selectedCategory}
              key={category.slug}
              category={category}
              onClick={() => setSelectedCategory(category.slug)}
            />
          ))}
          <h1>Our Products</h1>
          <div className="flex flex-wrap mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} 
              id={product.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
