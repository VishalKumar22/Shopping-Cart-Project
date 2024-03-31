import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartValue = useSelector((state)=> state.cart)
  return (
    <div style={{ padding: '8px 8px', marginBottom: '1rem', backgroundColor: 'lightgreen', display: "flex", fontWeight:'bolder', color: 'Red', alignItems:'center', justifyContent: "space-between" }}>
        <span>Shopping Cart</span>
      <div>
        <Link className="navLink" style={{fontWeight:'bolder'}} to={"/"}>
          Home
        </Link>
        <Link className="navLink" style={{marginRight:"5px", fontWeight:'bolder'}} to={"/cart"}>
          Cart
        </Link>
        <span style={{fontWeight:'bolder'}}>({cartValue.length})</span>
      </div>
    </div>
  );
};

export default Navbar;
