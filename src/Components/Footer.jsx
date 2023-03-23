import React from "react";
import Logo from "./Logo";
import visa from "../assets/Frame 317.png";
import masterCard from "../assets/Frame 321.png";
import cash from "../assets/Frame 322.png";
import eInstall from "../assets/Frame 323.png";

const Footer = () => {
  const footerInfo = [
    {
      id: 1,
      title: "Trending",
      list: [
        "Installments",
        "Electronics",
        "Grocery",
        "Health & Beauty",
        "Home Appliances",
        "Mobile Accessories",
      ],
    },
    {
      id: 2,
      title: "Information",
      list: [
        "About Us",
        "Contact Us",
        "FAQs",
        "Shipping & Return",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },
    {
      id: 3,
      title: "Customer Care",
      list: [
        "My Account",
        "Track Your Order",
        "Recently Viewed",
        "Wishlist",
        "Compare",
        "Become a Vendor",
      ],
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div className="footer bg-footer color-white w-100 pe-md-5">
      <div className="fts-7 fts-md-5 container-md d-flex flex-column flex-md-row gap-3 justify-content-md-between p-md-4">
        <div className="footer-top d-flex flex-column align-items-start justify-content-between me-md-5">
          <Logo color="white" />
          <div className="d-flex flex-md-column">
            <div className="pt-3 d-flex flex-column">
              <p className="fts-5 fts-md-3 color-title pb-1">
                Got questions? Call us 24/7!
              </p>
              <p>03 111 666 144</p>
              <p>0317 1777015.</p>
            </div>
            <div className="pt-3 d-flex flex-column align-items-end align-items-md-start">
              <p className="fts-5 fts-md-3 color-title">Contact info</p>
              <p>info@winstore.pk</p>
              <div className="d-flex gap-3 mt-2">
                <i className="fts-2-5 fa-brands fa-facebook-f"></i>
                <i className="fts-2-5 fa-brands fa-twitter"></i>
                <i className="fts-2-5 fa-brands fa-linkedin-in"></i>
                <i className="fts-2-5 fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-between justify-content-md-around py-3 w-100">
          {footerInfo.map((item) => {
            const { title, id, list } = item;
            return (
              <div className="" key={id}>
                <h5 className="fts-4 fts-md-2-5 color-title">{title}</h5>
                {list.map((listitem, i) => {
                  return (
                    <p key={i} className="my-1 my-md-2 fts-7 fts-md-5 ">
                      {listitem}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer-cards container-md d-none d-md-block mb-5">
        <div className="d-flex gap-3 align-items-center justify-content-end me-5">
          <img src={visa} alt="cards" />
          <img src={masterCard} alt="cards" />
          <img src={cash} alt="cards" />
          <img src={eInstall} className="pt-1" alt="cards" />
        </div>
      </div>
      <div className="bg-black p-2 mt-3">
        <div className="container-md">
          <p className="p-2">© {year} Winstore. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
