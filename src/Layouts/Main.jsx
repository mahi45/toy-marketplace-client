import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Shared/Banner/Banner";
import Gallery from "../Pages/Home/Gallery/Gallery";
import ProductsByCat from "../Pages/Home/ProductsByCat/ProductsByCat";
import Cta from "../Pages/Home/CTA section/Cta";
import NewsLetter from "../Pages/Home/NewsLetter/NewsLetter";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
