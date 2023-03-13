import React from "react";
import { Button } from "react-bootstrap";
import { UseFetchData } from "../contexts/UseFetchData";

const ProdList = ({ num1, num2 }) => {
  const { isLoading, data, isError, error } = UseFetchData();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data.data.map((data) => {
        const { id, price, category, title, image } = data;
        if (id >= num1 && id <= num2) {
          return (
            <div className="product-element  d-flex justify-content-between">
              <div className="grid-img p-3">
                <img src={image} alt="products" />
              </div>
              <div className="w-50 d-flex flex-column gap-2">
                <p className="m-0 fts-6">{category}</p>
                <h5 className="m-0 fts-4-5 color-title">
                  {title.slice(0, 15)}
                </h5>
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
            </div>
          );
        }
      })}
    </>
  );
};

export default ProdList;
