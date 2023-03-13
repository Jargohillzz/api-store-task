import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fs-3 fa-regular fa-envelope"></i>
            </InputGroup.Text>
            <input
              type="email"
              className="border-0"
              placeholder="Enter Email"
            />
          </InputGroup>
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fa-regular fa-lock fs-3 fw-bold"></i>
            </InputGroup.Text>
            <input
              type="password"
              className="border-0"
              placeholder="Enter Email"
            />
          </InputGroup>
          <InputGroup className="d-flex justify-content-between gap-1 mt-4">
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" />
              <label>Remember Password</label>
            </div>
            <div className="color-blue fw-light">forgot Password?</div>
          </InputGroup>
        </Form.Group>
        <Link to="/">
          <Button className="w-100 p-2 fts-2-5 mt-2 bg-green">Login</Button>
        </Link>
      </Form>
      <p className="fts-4 text-center mt-2 fw-normal">or connect with</p>
      <div className="socials d-flex justify-content-around px-5 mt-4">
        <div className="social bg-facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="social bg-instagram">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="social bg-pinterest">
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <div className="social bg-linkedin">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </>
  );
};

export default SignIn;
