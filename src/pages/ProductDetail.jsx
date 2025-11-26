import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const { title, description, price, images, brand, category, rating, shippingInformation, returnPolicy, stock, availabilityStatus, weight, dimensions } = product;

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="w-full flex justify-center">
          <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm w-full max-w-md">
            {images && (
              <img
                src={images[0]}
                alt={title}
                className="w-full rounded-md object-cover"
              />
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {description}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">SKU:</span> {id}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Brand:</span> {brand}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Weight:</span> {weight}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Rating:</span> {rating}
          </p>

          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Shipping Information:</span> {shippingInformation}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Return Policy:</span> {returnPolicy}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Availability Status:</span> {availabilityStatus}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            <span className="font-semibold">Stock:</span> {stock}
          </p>


          <p className="text-3xl font-bold text-green-600 mb-6">
            ${price}
          </p>

          <div className="flex items-center gap-4 mt-3">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition">
              Add to Cart
            </button>

            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;