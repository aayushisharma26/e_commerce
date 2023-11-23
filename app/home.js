"use client"
import axios from "axios";
import { useEffect, useState } from "react";

let Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => setData(response.data));
  }, []);

  return (
    <>
      <div className="row">
        {data.map((product) => (
          <div className="col" key={product.id}>
            {/* <p>ID: {product.id}</p> */}
            {/* <p>Title: {product.title}</p> */}
            {/* <p>Price: {product.price}</p> */}
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
