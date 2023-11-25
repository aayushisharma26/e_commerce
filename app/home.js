"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      // Extract unique categories from the data
      const uniqueCategories = [...new Set(response.data.map((product) => product.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory) {
      const filteredProducts = data.filter((product) => product.category === selectedCategory);
      setFilteredData(filteredProducts);
    } else {
      setFilteredData(data);
    }
  }, [selectedCategory, data]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {filteredData.map((product) => (
          <div className="col" key={product.id}>
            {/* Display other product information as needed */}
            <p>ID: {product.id}</p>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

























