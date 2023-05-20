import React, { useEffect, useState } from "react";
import Toyrow from "./Toyrow";

const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto my-8">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alltoys.map((alltoy, index) => (
              <Toyrow key={alltoy._id} alltoy={alltoy} index={index}></Toyrow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
