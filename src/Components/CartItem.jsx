import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";

const CartItem = ({ id, price, title, images, brand }) => {
  const { items } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  let quant = items.filter((item) => item === id);
  setQty(quant.length);
  return (
    <>
      <article className="cart-item">
        <img src={images[images.length - 1]} alt={brand} />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">${price}</h4>
          <button
            className="remove-btn"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            remove
          </button>
        </div>
        <div>
          <button
            className="amount-btn"
            // onClick={() => {
            //   setQty((prev) => prev - 1);
            // }}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
          <p className="amount">{quant.length}</p>
          <button
            className="amount-btn"
            // onClick={() => {
            //   if (amount === 1) {
            //     dispatch(removeItem(id));
            //     return;
            //   }
            //   dispatch(decrease({ id }));
            // }}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
