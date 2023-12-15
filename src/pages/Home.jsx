import React from "react";

import Cart from "../components/Cart";
import CatagoryMenu from "../components/CatagoryMenu";
import FoodItem from "../components/FoodItem";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <CatagoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
