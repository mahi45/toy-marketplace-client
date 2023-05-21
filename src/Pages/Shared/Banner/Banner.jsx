import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-max"
        style={{
          backgroundImage: `url("https://i.ibb.co/JjWct64/Banner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-32">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Car Lovers</h1>
            <p className="mb-5">
              All of your stylish sports car is available here. We have the
              production house, marketing team, brand ambasador and our unique
              architect.
            </p>
            <button className="btn btn-info text-black">See All Car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
