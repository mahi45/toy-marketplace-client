import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete Confirmed");
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToys.filter((mytoy) => mytoy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="border">
      <h2 className="text-center text-3xl font-bold bg-teal-50 py-6">
        My Toys
      </h2>
      <div className="overflow-x-auto">
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
            {myToys.map((mytoy, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{mytoy.sellername}</td>
                <td>{mytoy.toyname}</td>
                <td>{mytoy.toysubcat}</td>
                <td>{mytoy.toyprice}</td>
                <td>{mytoy.quantity}</td>
                <td>
                  <button className="btn btn-secondary mr-2">
                    <Link to={`/toy/${mytoy._id}`}>Edit Toy</Link>
                  </button>

                  <button
                    onClick={() => handleDelete(mytoy._id)}
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

export default Mytoys;
