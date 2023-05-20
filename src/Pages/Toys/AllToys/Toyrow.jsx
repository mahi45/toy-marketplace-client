import React from "react";
import { Link } from "react-router-dom";

const Toyrow = ({ alltoy, index }) => {
  const { _id, toyname, toyprice, quantity, toysubcat, sellername } = alltoy;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{sellername}</td>
      <td>{toyname}</td>
      <td>{toysubcat}</td>
      <td>{toyprice}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/details/${_id}`}>View Details</Link>
      </td>
    </tr>
  );
};

export default Toyrow;
