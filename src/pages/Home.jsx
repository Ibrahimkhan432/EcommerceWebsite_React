import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchCategories = axios.get(
      "https://dummyjson.com/products/categories"
    );
    const productsUrl = selectedCategory
      ? `https://dummyjson.com/products/category/${encodeURIComponent(
          selectedCategory
        )}`
      : "https://dummyjson.com/products?limit=12";

    const fetchProducts = axios.get(productsUrl);

    Promise.all([fetchCategories, fetchProducts])
      .then(([catRes, prodRes]) => {
        setCategories(Array.isArray(catRes.data) ? catRes.data : []);
        const prods = prodRes.data.products || prodRes.data || [];
        setProducts(prods);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products. Try again later.");
      })
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 mt-20">
      {/* Hero */}
      <section className="mt-8 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center p-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Discover products you'll love
            </h1>
            <p className="mt-3 text-indigo-100 max-w-xl">
              Hand-picked collections, great offers, and fast delivery. Shop top
              categories and featured products.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#products"
                className="inline-block bg-white text-indigo-600 font-semibold px-4 py-2 rounded-md"
              >
                Shop now
              </a>
              <a
                href="/signup"
                className="inline-block border border-white text-white px-4 py-2 rounded-md"
              >
                Create account
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://simicart.com/wp-content/uploads/eCommerce-logo.jpg"
              alt="hero"
              className="w-md ml-16 rounded-lg object-cover h-56"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
        <div className="mt-4 flex gap-3 overflow-x-auto py-2">
          {categories.length === 0 && !loading && (
            <div className="text-sm text-gray-500">No categories found</div>
          )}
          {categories.map((cat) => {
            const isObj = cat && typeof cat === "object";
            const key = isObj
              ? cat.slug ?? cat.name ?? JSON.stringify(cat)
              : String(cat);
            const label = isObj
              ? cat.name ?? cat.slug ?? String(cat)
              : String(cat);
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full border ${
                  selectedCategory === key
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-200"
                } shadow-sm`}
              >
                {label}
              </button>
            );
          })}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory("")}
              className="whitespace-nowrap px-4 py-2 rounded-full border bg-white text-gray-700 border-gray-200 shadow-sm"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Featured products
          </h2>
          <div className="text-sm text-gray-500">
            {loading ? "Loading..." : `${products.length} results`}
          </div>
        </div>

        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-64 bg-gray-100 animate-pulse rounded-md"
                />
              ))
            : products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  id={product.id}
                />
              ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
