import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [alltoys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/toy/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = alltoys.filter((alltoy) => alltoy._id !== id);
        setAlltoys(remaining);
      });
  };

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
                    <Link to={`/toy/${alltoy._id}`}>View Details</Link>
                  </button>

                  <button
                    onClick={() => handleDelete(alltoy._id)}
                    className="btn btn-accent"
                  >
                    Delete
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
