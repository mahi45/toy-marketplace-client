import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const SingleCatToy = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const handleView = (event) => {
    event.preventDefault();
    if (!user) {
      Swal.fire({
        title: "Warning!",
        text: "Please login first to view details of this toy",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy.toypicture} alt="Sports Toy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {toy.toyname}</h2>
        <p className="card-title">Price: {toy.toyprice}</p>
        <p>Rating: {toy.rating}</p>
        <div className="card-actions justify-center">
          <button onClick={handleView} className="btn btn-secondary mr-2">
            <Link to={`/toyview/${toy._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCatToy;
