import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {add} from "../redux/CartSlice"

const Home = () => {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch()
  
  useEffect(() => {
    async function fetchProductData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductData(data);
    }
    fetchProductData();
  }, []);
  console.log(productData);

  const handleAdd = (getProduct) => {
    dispatch(add(getProduct))
  };

  return (
    <div className="productsWrapper">
      {productData.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
