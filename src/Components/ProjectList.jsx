import React from "react";
import televisionIMG from "../assets/television.png";
import phoneIMG from "../assets/phone.png";
import watchIMG from "../assets/watch.png";
import ProdList from "./ProdList";

const ProjectList = () => {
  const products = [
    {
      id: 1,
      name: "I-watch series 4",
      color: "save-10-red",
      image: watchIMG,
      price: [145, 160],
    },
    {
      id: 2,
      name: "Samsung A-96 6gb ram",
      color: "save-10-green",
      image: phoneIMG,
      price: [400, 560],
    },
    {
      id: 3,
      name: 'Sony 65" OLED display',
      color: "save-10-blue",
      image: televisionIMG,
      price: [1240, 1460],
    },
  ];

  const prodLists = [
    {
      id: 1,
      text: "Featured",
      num: [1, 3],
    },
    {
      id: 2,
      text: "On Sale",
      num: [10, 12],
    },
    {
      id: 3,
      text: "Top Rated",
      num: [17, 19],
    },
  ];

  return (
    <div>
      <h2>
        <span className="color-title">New </span>Arrivals
      </h2>
      <div className="project-list-bg d-flex flex-column align-items-center flex-lg-row justify-content-around gap-3 p-5">
        {products.map((item) => {
          const { id, price, name, image, color } = item;
          return (
            <div key={id} className="project-list p-3">
              <div className="img">
                <img src={image} alt="special offer" />
              </div>
              <p className="fts-2-5 m-0">{name}</p>
              <p className="color-red fts-2-5 m-0">
                ${price[0]}{" "}
                <span className="color-black text-decoration-line-through fts-3">
                  ${price[1]}
                </span>
              </p>
              <div className="d-flex justify-content-between ">
                <p className="fts-4 color-title m-0">already Sold: 6</p>
                <p className="fts-4 color-title m-0">Available: 30</p>
              </div>
              <div className={`save-10 ${color} color-white`}>
                <h4>save 10%</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="project-grid mt-4 media-scroller snaps d-lg-flex justify-content-lg-evenly">
        {prodLists.map((item) => {
          const { id, text, num } = item;
          return (
            <div className="bg-white me-5" key={id}>
              <h2 className="mb-3 ps-5 py-3">
                <span className="color-red">{text} </span>
                Products
              </h2>
              <ProdList num1={num[0]} num2={num[1]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
