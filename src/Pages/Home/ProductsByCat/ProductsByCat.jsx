import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCatToy from "./SingleCatToy";

const ProductsByCat = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [activeTab, setActiveTab] = useState("Chevrolet Camaro ZL1");

  useEffect(() => {
    fetch(`https://assignment11-server-gamma.vercel.app/alltoy/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setAlltoys(result);
      });
  }, [activeTab]);
  const toys = [
    { toyname: "Chevrolet Camaro ZL1" },
    { toyname: "Chevrolet Corvette" },
    { toyname: "Chevrolet Corvette Z06" },
    { toyname: "Ford Mustang" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h2 className="text-3xl text-center pb-6">Products By Category</h2>
      <div className="flex gap-3 justify-center py-3">
        <div
          className="bg-teal-500 py-2 px-4 rounded-lg text-white cursor-pointer"
          onClick={() => handleTabClick("Chevrolet Camaro ZL1")}
        >
          Chevrolet Camaro ZL1
        </div>
        <div
          className="bg-teal-500 py-2 px-4 rounded-lg text-white cursor-pointer"
          onClick={() => handleTabClick("Chevrolet Corvette")}
        >
          Chevrolet Corvette
        </div>
        <div
          className="bg-teal-500 py-2 px-4 rounded-lg text-white cursor-pointer"
          onClick={() => handleTabClick("Chevrolet Corvette Z06")}
        >
          Chevrolet Corvette Z06
        </div>
        <div
          className="bg-teal-500 py-2 px-4 rounded-lg text-white cursor-pointer"
          onClick={() => handleTabClick("Ford Mustang")}
        >
          Ford Mustang
        </div>
      </div>
      <div className="grid grid-cols-3 mt-4 mb-6">
        {alltoys?.map((alltoy) => (
          <SingleCatToy toy={alltoy}></SingleCatToy>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCat;
