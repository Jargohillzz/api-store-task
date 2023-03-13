import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fs-3 fa-regular fa-user"></i>
            </InputGroup.Text>
            <input type="text" className="border-0" placeholder="Full Name" />
          </InputGroup>
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fs-3 fa-regular fa-envelope"></i>
            </InputGroup.Text>
            <input type="email" className="border-0" placeholder="E mail" />
          </InputGroup>
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fa-regular fa-lock fs-3 fw-bold"></i>
            </InputGroup.Text>
            <input
              type="password"
              className="border-0"
              placeholder="Password"
            />
          </InputGroup>
          <InputGroup className="mb-3 p-2 input-border mt-4">
            <InputGroup.Text className="bg-white border-0 me-2">
              <i className="color-blue fa-regular fa-lock fs-3 fw-bold"></i>
            </InputGroup.Text>
            <input
              type="password"
              className="border-0"
              placeholder="Confirm Password"
            />
          </InputGroup>
        </Form.Group>
        <Link to="/">
          <Button className="w-100 fts-2-5 p-2 mt-2 bg-green">Register</Button>
        </Link>
      </Form>
    </>
  );
};

export default Register;
