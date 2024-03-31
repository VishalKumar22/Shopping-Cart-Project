import React from "react";
import { useDispatch, useSelector } from "react-redux";
import remove from '../redux/CartSlice'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (getId) => {
    dispatch(remove(getId));
  };
  return (
    <div>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className="cartCard">
            <img src={item.image} alt="img" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button onClick={() => handleRemove(item.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
