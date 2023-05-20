import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/LoginRegistration/Login/Login";
import Register from "../Pages/LoginRegistration/Registration/Register";
import ToysLayout from "../Layouts/ToysLayout";
import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import ToyDetails from "../Pages/Toys/AllToys/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/addtoy",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/addtoy",
        element: <AddToys></AddToys>,
      },
    ],
  },
  {
    path: "/alltoy",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/alltoy",
        element: <AllToys></AllToys>,
      },
    ],
  },
  {
    path: "/details",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/details/:id",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },
]);

export default router;
