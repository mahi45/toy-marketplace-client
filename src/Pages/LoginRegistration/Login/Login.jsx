import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border w-2/3 mx-auto py-10 my-10">
      <h2 className="text-5xl text-center border-b-2 w-1/2 mx-auto pb-8">
        Login your account
      </h2>
      <form>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text font-semibold text-lg">
              Email Address
            </span>
          </label>
          <input
            type="text"
            placeholder="Type your email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text font-semibold text-lg">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type your password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mt-5 max-w-xs mx-auto">
          <button className="btn w-full" type="submit">
            Login
          </button>
          <button className="flex items-center gap-2 border-2 border-blue-400 p-2 rounded-lg mt-3 mx-auto">
            <FaGoogle className="text-blue-500" />
            Login with Google
          </button>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link className="text-blue-600" to="/register">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
