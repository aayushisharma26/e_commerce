"use client"
import axios from "axios";
import { useEffect, useState } from "react";
let Home=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response) => setData(response.data))
  }, []);


  return(
    <>
      <h1>Axios</h1>
      {data.map((product)=>{
        const{id,title,price,image}=product;

        return(
          <div className="card">
          <h1>{id}</h1>
          <p>{title}</p>
          <h2>{price}</h2>
          <h1><img src={image} alt={`Product ${id}`} /></h1>


          </div>
        );
      })}
    </>
  );
}
export default Home;