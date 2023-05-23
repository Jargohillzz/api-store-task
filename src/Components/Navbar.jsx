import React, { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";

import busIcon from "../assets/bus.svg";
import pakistanIcon from "../assets/pakistan.svg";
import returnIcon from "../assets/return.svg";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import CartLogo from "./CartLogo";

const Navbar = () => {
  const navRef = useRef();
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const navToggle = () => {
    setIsModal(!isModal);
  };

  const goHome = () => {
    navigate("/");
    setIsModal(!isModal);
  };
  const navList = [
    {
      id: 1,
      icon: busIcon,
      text: "Orders & Tracking",
    },
    {
      id: 2,
      icon: pakistanIcon,
      text: "Delivery within Pakistan",
    },
    {
      id: 3,
      icon: returnIcon,
      text: "Return",
    },
  ];
  return (
    <div>
      {/* mobile view */}
      <div className="d-block d-md-none fixed-top">
        <div className="nav-logo p-2 nav-mobile bg-darkgreen d-flex justify-content-between align-items-center">
          <Logo color="white" />
          <div className="d-flex gap-3 align-items-center">
            <i className="fa-regular fts-2-5 fa-user color-white"></i>
            <CartLogo />
            <div
              className="bar color-white me-3"
              role="button"
              onClick={navToggle}
            >
              <i
                className={` fa-solid ${
                  isModal ? "fa-times color-red fts-1" : "fts-2 fa-bars"
                }`}
              ></i>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <div className=" nav-wrapper">
            <div
              ref={navRef}
              className={`nav-content ${isModal ? "show-nav" : "hide-nav"}`}
            >
              <InputGroup className="d-flex p-2 w-100">
                <DropdownButton
                  variant="light"
                  className="bg-white fts-7"
                  title="All category"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <input
                  placeholder="Search for products"
                  className="input-nav flex-grow-1 border-0"
                />
                <InputGroup.Text className="border-0">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
              </InputGroup>
              <div className="d-flex flex-column h-75 align-items-center color-white gap-4 mt-4">
                <p role="button" onClick={goHome} className="m-0 fts-2-5">
                  Home
                </p>
                <p className="m-0 fts-2-5">Easy Monthly Installments</p>
                <p className="m-0 fts-2-5">Shop By Brands</p>
                <p className="m-0 fts-2-5">Become a Vendor</p>
                <div className="d-flex gap-4">
                  <i className="fts-2-5 fa-brands fa-facebook-f"></i>
                  <i className="fts-2-5 fa-brands fa-twitter"></i>
                  <i className="fts-2-5 fa-brands fa-linkedin-in"></i>
                  <i className="fts-2-5 fa-brands fa-instagram"></i>
                </div>
                <Link
                  to="/cred"
                  className="link fts-2-5 color-white text-decoration-none m-0 mt-auto mb-3 bg-blue py-2 px-5 rounded-2 mt-3"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* desktop view */}
      <div className="d-none d-md-block bg-darkgreen bs-nav">
        <div className="container">
          <div className="nav-top pt-3 pb-3 d-flex align-items-center gap-4 justify-content-between">
            <Logo color="white" />
            <InputGroup className="d-flex ms-4 max-md-490">
              <DropdownButton
                variant="light"
                className="bg-white fts-7"
                title="All category"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <input
                placeholder="Search for products"
                className="flex-grow-1 border-0"
              />
              <InputGroup.Text className="border-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </InputGroup.Text>
            </InputGroup>
            <div className="nav-list d-none d-lg-flex flex-column gap-2">
              {navList.map((item) => {
                const { id, icon, text } = item;
                return (
                  <div className="d-flex align-items-center gap-2" key={id}>
                    <img src={icon} alt="icon" />
                    <h4 className="fts-7 m-0 color-white">{text}</h4>
                  </div>
                );
              })}
            </div>
            <div className="call-us d-none d-lg-block color-white">
              <p className="fts-8 m-0">Call us now</p>
              <div className="m-0">
                <i className="fts-4 pe-1 fa-solid fa-headphones"></i>
                <span className="fts-5 m-0">+011 5827918</span>
              </div>
              <Link
                to="/cred"
                className="link color-white text-decoration-none fts-6 m-0"
              >
                Sign In
              </Link>
            </div>
            <div className="profile-cart d-flex gap-4 align-items-center">
              <i className="fa-regular fts-2-5 fa-user color-white"></i>
              <i className="fa-regular fts-2-5 fa-heart color-white"></i>
              <CartLogo />
            </div>
          </div>
          <div className="nav-bottom d-flex align-items-center w-100 color-white gap-5 gap-lg-3 pb-3">
            <h3 className="fts-3 m-0 mw-fit">
              <i className="fts-3 color-white fa-solid fa-bars me-2"></i>
              Browse by Category
            </h3>

            <div className="d-flex w-100 align-items-center">
              <div className="d-none d-lg-flex gap-4">
                <p className="m-0 fts-5">Home</p>
                <p className="m-0 fts-5">Easy Monthly Installments</p>
                <p className="m-0 fts-5">Shop By Brands</p>
                <p className="m-0 fts-5">Become a Vendor</p>
              </div>
              <div className="d-lg-none">
                <Link
                  to="/cred"
                  className="link fts-3 color-white text-decoration-none m-0 bg-blue py-2 px-5 rounded-2"
                >
                  Sign In
                </Link>
              </div>
              <div className="d-flex gap-4 ms-auto">
                <i className="fts-2-5 fa-brands fa-facebook-f"></i>
                <i className="fts-2-5 fa-brands fa-twitter"></i>
                <i className="fts-2-5 fa-brands fa-linkedin-in"></i>
                <i className="fts-2-5 fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
