import React from "react";

import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NewArrivals from "./NewArrivals";
import OurProducts from "./OurProducts";
import ProjectList from "./ProjectList";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="bg-caramel">
      <Navbar />
      <Hero />
      <Slider />
      <NewArrivals />
      <OurProducts />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Home;
