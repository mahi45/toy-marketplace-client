import React from "react";
import Gallery from "../Gallery/Gallery";
import ProductsByCat from "../ProductsByCat/ProductsByCat";
import Cta from "../CTA section/Cta";
import NewsLetter from "../NewsLetter/NewsLetter";
import Banner from "../../Shared/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ProductsByCat></ProductsByCat>
      <Cta></Cta>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
