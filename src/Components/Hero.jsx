import React from "react";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container py-4 ">
        <h2 className="fts-2 fts-md-0 w-75 max-md-490">
          Shop <span className="color-blue"> Computer & experience</span>
        </h2>
        <p className="fts-5 fts-md-4">
          You cannot inspect quality into the product; it is already there.
        </p>
        <p className="fts-5 fts-md-4">
          I am not a product of my circumstances. I am a product of my
          decisions.
        </p>
        <Button className="bg-btnBlue border-0 px-5 mt-4">View More</Button>
      </div>
    </div>
  );
};

export default Hero;
