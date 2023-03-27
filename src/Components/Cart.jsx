import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../features/apiSlice";
import { clearCart, removeItem } from "../features/cartSlice";
import Navbar from "./Navbar";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);
  const { data, isLoading } = useSelector((store) => store.api);

  return (
    <div className="">
      <Navbar />
      <section className="mt-3 container cart-container">
        <header>
          <h2 className="text-center">Your bag</h2>
          {items.length < 1 ? (
            <h4 className="color-darkgreen fw-bold text-center">
              is currently empty
            </h4>
          ) : (
            <div className="cart-wrapper pb-5">
              {isLoading == true && <h3>Loading...</h3>}

              {data.map((prod) => {
                const { id, price, title, images, brand, quantity } = prod;
                if (items.includes(id)) {
                  let qty = items.filter((item) => item === id).length;
                  return (
                    <article key={id} className="cart-item">
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
                          onClick={() => {
                            dispatch(increase({ id, qty }));
                          }}
                        >
                          <i className="fa-solid fa-chevron-up"></i>
                        </button>
                        <p className="amount">{quantity || qty}</p>
                        <button
                          className="amount-btn"
                          onClick={() => {
                            if (quantity == 0) {
                              if (qty === 1) {
                                dispatch(removeItem(id));
                                return;
                              }
                            } else if (quantity === 1) {
                              dispatch(removeItem(id));
                              return;
                            }
                            dispatch(decrease({ id, qty }));
                          }}
                        >
                          <i className="fa-solid fa-chevron-down"></i>
                        </button>
                      </div>
                    </article>
                  );
                }
              })}
              <div className="clear-container">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="clear-btn"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </header>
      </section>
    </div>
  );
};

export default Cart;
