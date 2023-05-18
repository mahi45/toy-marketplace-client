import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Shared/Banner/Banner";
import Gallery from "../Pages/Shared/Gallery/Gallery";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
