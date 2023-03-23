import React, { useEffect, useRef, useState } from "react";
import { Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import CartLogo from "./CartLogo";

const NavMob = () => {
  const navRef = useRef();
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();

  const navToggle2 = () => {
    setBtn(!btn);
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
    setBtn(!btn);
  };

  return (
    <div>
      <div className="d-block d-md-none ">
        <div className="nav-logo p-2 nav-mobile bg-darkgreen d-flex justify-content-between align-items-center">
          <Logo color="white" />
          <div className="d-flex gap-3 align-items-center">
            <i className="fa-regular fts-2-5 fa-user color-white"></i>
            <CartLogo />
            <div
              className="bar color-white me-3"
              role="button"
              onClick={navToggle2}
            >
              <i className="fa-solid fa-times color-red fts-1"></i>
            </div>
          </div>
        </div>
        <div ref={navRef} className="nav-content show-nav">
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
  );
};

export default NavMob;
