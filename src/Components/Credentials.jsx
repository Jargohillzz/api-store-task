import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Register from "./Register";
import SignIn from "./SignIn";

const Credentials = () => {
  const [credPage, setCredPage] = useState("signin");
  return (
    <>
      <div className="background pt-4 text-center color-white">
        <Logo color="white" />
        <h2 className="fts-2">Welcome to WinStore.com</h2>
      </div>
      <div className="overview"></div>
      <Link className="back-home" to="/">
        Back to Home
      </Link>

      <div className="credentials">
        <div className="credential-container color-grey">
          <div className="cred-pick d-flex justify-content-between">
            <h4
              role="button"
              className={`${
                credPage == "signin" ? "color-blue" : "color-grey"
              }`}
              onClick={() => setCredPage("signin")}
            >
              Sign In
            </h4>
            <h4
              role="button"
              className={`${
                credPage == "register" ? "color-blue" : "color-grey"
              }`}
              onClick={() => setCredPage("register")}
            >
              Register
            </h4>
          </div>
          {credPage == "signin" ? <SignIn /> : <Register />}
        </div>
      </div>
    </>
  );
};

export default Credentials;
