import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { UseFetchData } from "../contexts/UseFetchData";

const Slider = () => {
  const sliderRef = useRef();
  const [counter, setCounter] = useState(0);
  const [scroller, setScroller] = useState(0);

  const scrollValue = () => {
    const value = Math.floor(sliderRef.current.scrollLeft);
    setScroller(value);
  };
  const handleNext = () => {
    if (counter < sliderRef.current.children.length) {
      setCounter(Math.round(scroller / 288) + 1);
      sliderRef.current.scrollLeft += 288;
    }
  };
  const handlePrev = () => {
    if (counter > 0) {
      setCounter(Math.round(scroller / 288) - 1);
      sliderRef.current.scrollLeft -= 288;
    }
  };

  const { isLoading, data, isError, error } = UseFetchData();

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <div className="slider">
        <div
          className="media-scroller snaps gap-3 slider-container px-2"
          ref={sliderRef}
          onScroll={scrollValue}
        >
          {data.data.map((prod) => {
            const { id, image, category } = prod;
            return (
              <div key={id} className="media-element">
                <img src={image} alt="serfd" />
                <div className="slider-label fts-2-5 d-flex justify-content-between py-2 pe-4">
                  <p className="m-0">{category}</p>
                  <p className="m-0 color-slider">Shop</p>
                </div>
              </div>
            );
          })}
        </div>
        <div onClick={handlePrev} className="slider-btn prev">
          <i className="fts-2 fa-solid fa-chevron-left"></i>
        </div>
        <div onClick={handleNext} className="slider-btn next">
          <i className="fts-2 fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="slider p-4 d-flex flex-column flex-lg-row gap-5 gap-lg-1">
        <div className="container-md ms-4 max-490">
          <h2 className="fts-2 fts-md-0">
            DEALS OF <span className="color-blue"> THE DAY </span>
          </h2>
          <p className="fts-5 fts-md-4 w-75">
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions. decisions.
          </p>
          <Button className="bg-btnBlue border-0 px-5 mt-4">View More</Button>
        </div>
        <div className="d-flex justify-content-around w-100 gap-4">
          {data.data.map((card) => {
            const { id, price, image } = card;
            if (id > 13 && id < 17) {
              return (
                <div className="deal-card" key={id}>
                  <img src={image} alt="sweet deals" />
                  <h5 className="m-0 text-end fts-7 fts-md-5">Add to cart</h5>
                  <h4 className="m-0 text-end fts-7 fts-md-5">RS {price}</h4>
                </div>
              );
            }
          })}
          {/* <div className="deal-card">
            <img src="/water-drops-bg.png" alt="sweet deals" />
            <h5 className="m-0 text-end fts-7 fts-md-5">Add to cart</h5>
            <h4 className="m-0 text-end fts-7 fts-md-5">RS 30,000</h4>
          </div>
          <div className="deal-card">
            <img src="/water-drops-bg.png" alt="sweet deals" />
            <h5 className="m-0 text-end fts-7 fts-md-5">Add to cart</h5>
            <h4 className="m-0 text-end fts-7 fts-md-5">RS 30,000</h4>
          </div>
          <div className="deal-card">
            <img src="/water-drops-bg.png" alt="sweet deals" />
            <h5 className="m-0 text-end fts-7 fts-md-5">Add to cart</h5>
            <h4 className="m-0 text-end fts-7 fts-md-5">RS 30,000</h4>
          </div> */}
        </div>
        <div className="slider-btn prev">
          <i className="fts-2 fa-solid fa-chevron-left"></i>
        </div>
        <div className="slider-btn next">
          <i className="fts-2 fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
