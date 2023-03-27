import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cartSlice";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.api);

  return (
    <div className="p-3 px-md-5">
      <div className="arrive-top d-flex justify-content-between align-items-center">
        <h4 className="fts-2-3">
          <span className="color-title">New </span>Arrivals
        </h4>
        <h5 className="color-title">Ends in: 08 08 53 08</h5>
      </div>
      <div className="arrive-bottom row p-4 gap-4 justify-content-around">
        {isLoading == true && <h3>Loading...</h3>}
        {data.map((data) => {
          const { id, price, category, title, images, brand } = data;
          if (id > 14) {
            return (
              <div
                key={id}
                className="arrive-card bg-white p-3 col-6 col-md-4 col-lg-2"
              >
                <p className="fts-6">{category}</p>
                <h4 className="fts-4-5 color-title">{title.slice(0, 15)}...</h4>
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
                  className="bg-green fts-4-5 w-100 border-0"
                  onClick={() => dispatch(openModal(id))}
                >
                  Add to cart
                </Button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
