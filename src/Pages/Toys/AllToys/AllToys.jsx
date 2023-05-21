import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://assignment11-server-gamma.vercel.app/alltoy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `https://assignment11-server-gamma.vercel.app/searchToy/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  };

  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log("Delete Confirmed");
  //       fetch(`https://assignment11-server-gamma.vercel.app/toy/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire("Deleted!", "Your toy has been deleted.", "success");
  //             const remaining = alltoys.filter((alltoy) => alltoy._id !== id);
  //             setAlltoys(remaining);
  //           }
  //         });
  //     }
  //   });
  // };

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
            {alltoys.slice(0, 120).map((alltoy, index) => (
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
