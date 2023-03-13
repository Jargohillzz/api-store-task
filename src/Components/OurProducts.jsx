import React from "react";
import { Button } from "react-bootstrap";
import specialIMG from "../assets/headphone.png";
import { UseFetchData } from "../contexts/UseFetchData";

const OurProducts = () => {
  const { isLoading, data, isError, error } = UseFetchData();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="p-4 d-flex flex-column flex-xl-row justify-content-between gap-4">
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
        <div className="header d-flex gap-3 gap-md-5">
          <h4 className="fts-7 fts-sm-5 fts-md-3 active">
            EASY MONTHLY INSTALLMENTS
          </h4>
          <h4 className="fts-7 fts-sm-5 fts-md-3 ">ON SALE</h4>
          <h4 className="fts-7 fts-sm-5 fts-md-3">TOP RATED</h4>
          <div className="ms-auto me-3">
            <i className="fa-solid fa-caret-left fts-2-5"></i>
            <i className="fa-solid fa-caret-right fts-2-5"></i>
          </div>
        </div>
        <div className="arrive-bottom row p-3 gap-4 justify-content-around">
          {data.data.map((data) => {
            const { id, price, category, title, image } = data;
            if (id < 9) {
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
                    <img src={image} alt="gergrfe" />
                  </div>
                  <div className="arrive-price d-flex gap-2 align-items-center">
                    <h5 className="fts-6 text-decoration-line-through">
                      $ {Math.round(price / 0.7)}.00
                    </h5>
                    <h4 className="fts-4-5 color-title">$ {price}</h4>
                  </div>
                  <Button className="bg-green fts-4-5 w-100 border-0">
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
