import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white mt-10  ">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">E-Commerce</h2>
          <p className="text-gray-200">
            Hand-picked collections, fast delivery, and amazing offers. Shop your favorite products now.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Clothing</li>
            <li>Electronics</li>
            <li>Home & Kitchen</li>
            <li>Beauty</li>
            <li>Sports</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-200">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-200 mb-4">Get the latest offers and products updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none bg-white text-gray-800"
            />
            <button className="bg-yellow-400 cursor-pointer px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-indigo-500 mt-10 py-4 text-center text-gray-300">
        &copy; 2025 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
