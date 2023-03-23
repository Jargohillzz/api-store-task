import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/apiSlice";

import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import NewArrivals from "./NewArrivals";
import OurProducts from "./OurProducts";
import ProjectList from "./ProjectList";
import Slider from "./Slider";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { isLoading, data } = useSelector((store) => store.api);
  isLoading && <h2>Loading...</h2>;
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
