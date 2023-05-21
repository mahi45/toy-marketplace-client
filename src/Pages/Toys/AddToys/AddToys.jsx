import React, { useState } from "react";
import Swal from "sweetalert2";

const AddToys = () => {
  const toys = [
    { toyname: "Chevrolet Camaro ZL1" },
    { toyname: "Chevrolet Corvette" },
    { toyname: "Chevrolet Corvette Z06" },
    { toyname: "Ford Mustang" },
  ];

  const [selectedToyCategory, setselectedToyCategory] = useState(toys[0]);

  const handleChangeSelectedValue = (event) => {
    setselectedToyCategory(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyname = form.toyname.value;
    const toyprice = form.toyprice.value;
    const toypicture = form.toypicture.value;
    const quantity = form.quantity.value;
    const toysubcat = form.toysubcat.value;
    const rating = form.rating.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const description = form.description.value;

    const toyDetails = {
      toyname,
      toyprice,
      toypicture,
      quantity,
      toysubcat,
      rating,
      sellername,
      selleremail,
      description,
    };
    // console.log(toyDetails);
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Addded Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-2/3 mx-auto pb-5 mt-10 mb-10 border">
      <h2 className="text-3xl text-center py-8 bg-teal-50 w-full">Add Toys</h2>

      <form className="space-y-6 p-6" onSubmit={handleSubmit}>
        {/* First Row Start */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              for="toyname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Toy Name
            </label>
            <div className="mt-2">
              <input
                id="toyname"
                name="toyname"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
          <div>
            <label
              for="toyprice"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Toy Price
            </label>
            <div className="mt-2">
              <input
                id="toyprice"
                name="toyprice"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
        </div>
        {/*First Row End  */}
        {/*Second Row Start  */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              for="toypicture"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Toy Picture URL
            </label>
            <div className="mt-2">
              <input
                id="toypicture"
                name="toypicture"
                type="url"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
          <div>
            <label
              for="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Available Quantity
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
        </div>
        {/*Second Row End  */}
        {/*Third Row Start  */}
        <div className="grid grid-cols-2 gap-3">
          <div className="">
            <label
              for="toysubcat"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Toys Subcategory
            </label>
            <div className="form-control">
              <div className="input-group">
                <select
                  id="toysubcat"
                  name="toysubcat"
                  className="select select-bordered"
                  value={selectedToyCategory}
                  onChange={handleChangeSelectedValue}
                >
                  {toys.map((toy, index) => (
                    <option key={index} value={toy.toyname}>
                      {toy.toyname}
                    </option>
                  ))}
                </select>
                {/* <select onChange={handleChangeSelectedValue}>
                  <option value="">Select a toy</option>
                  {toys.map((toy, index) => (
                    <option key={index} value={toy.toyname}>
                      {toy.toyname}
                    </option>
                  ))}
                </select> */}
              </div>
            </div>
          </div>
          <div>
            <label
              for="rating"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Rating
            </label>
            <div className="mt-2">
              <input
                id="rating"
                name="rating"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
        </div>
        {/*Third Row End  */}
        {/*Fourth Row Start  */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              for="sellername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Name
            </label>
            <div className="mt-2">
              <input
                id="sellername"
                name="sellername"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
          <div>
            <label
              for="selleremail"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seller Email
            </label>
            <div className="mt-2">
              <input
                id="selleremail"
                name="selleremail"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
        </div>
        {/*Fourth Row End  */}
        <div>
          <label
            for="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-2">
            <textarea
              placeholder="Bio"
              id="description"
              name="description"
              type="text"
              required
              className="textarea textarea-bordered textarea-md w-full max-w-xs pl-3"
            ></textarea>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToys;
