import React from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Scroll from "./Scroll";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Categories />
      <Scroll />
    </div>
  );
};

export default Home;
