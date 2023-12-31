import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  };

  return (
    <div className="border">
      <div className="text-center my-6">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search with your toy name"
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <button onClick={handleSearch} className="btn btn-accent">
          Search Toy
        </button>
      </div>
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
            {alltoys.slice(0, 20).map((alltoy, index) => (
              <tr key={alltoy._id}>
                <th>{index + 1}</th>
                <td>{alltoy.sellername}</td>
                <td>{alltoy.toyname}</td>
                <td>{alltoy.toysubcat}</td>
                <td>{alltoy.toyprice}</td>
                <td>{alltoy.quantity}</td>
                <td>
                  <button className="btn btn-secondary mr-2">
                    <Link to={`/toyview/${alltoy._id}`}>View Details</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
