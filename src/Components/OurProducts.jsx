import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import specialIMG from "../assets/headphone.png";
import { addToCart, openModal } from "../features/cartSlice";

const prodArray = [
  {
    count: 0,
    num: 1,
  },
  {
    count: 1,
    num: 7,
  },
  {
    count: 2,
    num: 13,
  },
];
const OurProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((store) => store.api);
  const [counter, setCounter] = useState(0);
  const [prod, setProd] = useState(prodArray[counter]);
  useEffect(() => {
    setProd(prodArray[counter]);
  }, [counter]);

  const toggleProd = (e) => {
    if (e.target.classList.contains("p1")) {
      setCounter(0);
    } else if (e.target.classList.contains("p2")) {
      setCounter(1);
    } else {
      setCounter(2);
    }
  };

  return (
    <div
      id="our-products"
      className="p-4 d-flex flex-column flex-xl-row justify-content-between gap-4"
    >
      {isLoading == true && <h3>Loading...</h3>}
      <div className="products-top">
        <h4 className="title">
          <span className="color-title">Our </span>
          Products
        </h4>
        <div className="special-offer d-none d-xl-block mt-4">
          <div className="special-img">
            <img src={specialIMG} alt="special offer" />
          </div>
          <p className="fts-2-5 m-0">Beats by Dre Headphones</p>
          <p className="color-red fts-2-3 m-0">
            $48.55{" "}
            <span className="color-black text-decoration-line-through fts-3">
              $58.99
            </span>
          </p>
          <div className="d-flex justify-content-between ">
            <p className="fts-3 color-title m-0">already Sold: 6</p>
            <p className="fts-3 color-title m-0">Available: 30</p>
          </div>
          <div className="special-text">
            <h4 className="fts-1-5">Special </h4>
            <h4 className="fts-1-5">Offer</h4>
          </div>
          <div className="save-10">
            <h4>save 10%</h4>
          </div>
        </div>
      </div>
      <div className="products-bottom">
        <div className="header d-flex gap-3 gap-md-5 align-items-start">
          <h4
            role="button"
            onClick={toggleProd}
            className={`p1 fts-8 fts-sm-6 fts-md-3 ${
              prod.count == 0 && "active"
            } `}
          >
            EASY MONTHLY INSTALLMENTS
          </h4>
          <h4
            role="button"
            onClick={toggleProd}
            className={`p2 fts-8 fts-sm-6 fts-md-3 ${
              prod.count == 1 && "active"
            } `}
          >
            ON SALE
          </h4>
          <h4
            role="button"
            onClick={toggleProd}
            className={`p3 fts-8 fts-sm-6 fts-md-3 ${
              prod.count == 2 && "active"
            } `}
          >
            TOP RATED
          </h4>
          <div className="ms-auto d-flex me-2">
            <button
              className="m-0 border-0 p-0"
              disabled={prod.count == 0}
              onClick={() => {
                setCounter((prev) => prev - 1);
              }}
            >
              <i className="fa-solid fa-caret-left fts-2-5"></i>
            </button>
            <button
              className="m-0 border-0 p-0"
              disabled={prod.count == 2}
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              <i className="fa-solid fa-caret-right fts-2-5"></i>
            </button>
          </div>
        </div>
        <div className="arrive-bottom row p-3 gap-4 justify-content-around">
          {data.map((data) => {
            const { id, price, category, title, images, brand } = data;
            if (id >= prod.num && id <= prod.num + 7) {
              return (
                <div
                  key={id}
                  className="arrive-card bg-white p-3 col-6 col-md-3 col-lg-3"
                >
                  <p className="fts-6">{category}</p>
                  <h4 className="fts-4-5 color-title">
                    {title.slice(0, 15)}...
                  </h4>
                  <div className="arrive-img">
                    <img src={images[images.length - 1]} alt={brand} />
                  </div>
                  <div className="arrive-price d-flex gap-2 align-items-center">
                    <h5 className="fts-6 text-decoration-line-through">
                      $ {Math.round(price / 0.7)}.00
                    </h5>
                    <h4 className="fts-4-5 color-title">$ {price}</h4>
                  </div>
                  <Button
                    onClick={() => dispatch(openModal(id))}
                    className="bg-green fts-4-5 w-100 border-0"
                  >
                    Add to cart
                  </Button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
