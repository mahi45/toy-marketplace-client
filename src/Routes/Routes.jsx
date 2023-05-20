import { createBrowserRouter } from "react-router-dom";
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
import Blog from "../Pages/Blog/Blog";
import ToyDetailsReadOnly from "../Pages/Toys/AllToys/ToyDetailsReadOnly";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        element: (
          <PrivateRoute>
            <Mytoys></Mytoys>
          </PrivateRoute>
        ),
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
  {
    path: "/toyview",
    element: <ToysLayout></ToysLayout>,
    children: [
      {
        path: "/toyview/:id",
        element: (
          <PrivateRoute>
            <ToyDetailsReadOnly></ToyDetailsReadOnly>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
