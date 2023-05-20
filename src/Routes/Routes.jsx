import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/LoginRegistration/Login/Login";
import Register from "../Pages/LoginRegistration/Registration/Register";
import ToysLayout from "../Layouts/ToysLayout";
import AddToys from "../Pages/Toys/AddToys/AddToys";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import ToyDetails from "../Pages/Toys/AllToys/ToyDetails";
import Mytoys from "../Pages/Toys/AllToys/Mytoys";
import LoginLayout from "../Layouts/LoginLayout";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
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
    path: "/mytoys",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/mytoys",
        element: <Mytoys></Mytoys>,
      },
    ],
  },
  {
    path: "/toy",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
