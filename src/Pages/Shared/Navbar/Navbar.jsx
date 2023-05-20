import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoy">All Toys</Link>
      </li>
      <li>
        <Link to="/">My Toys</Link>
      </li>
      <li>
        <Link to="/addtoy">Add New Toy</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="">
          <img
            src="https://i.ibb.co/FJ7PrGF/logo.jpg"
            alt=""
            className="w-40"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end gap-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.ibb.co/0mcCVyh/Mohidul-Hasan.jpg" />
          </div>
        </label>
        <Link>
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
