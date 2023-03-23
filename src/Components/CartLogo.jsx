import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartIcon from "../assets/cart.svg";

const CartLogo = () => {
  const { num } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  return (
    <>
      <div
        role="button"
        onClick={() => navigate("/cart")}
        className="cart-container d-flex align-items-center"
      >
        <img className="cart " src={cartIcon} alt="cart" />
        <span className="color-white">Cart</span>
        <div className="cart-amount">
          <p className="m-0">{num}</p>
        </div>
      </div>
    </>
  );
};

export default CartLogo;
