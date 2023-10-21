import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BrandProducts from "../components/BrandProducts/BrandProducts";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import UpdateProducts from "../pages/UpdateProducts/UpdateProducts";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/addToCart"),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandProducts/:brandName",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/product/:productId",
        element: (
          <PrivateRoute>
            <ProductDetail></ProductDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/products"),
      },

      {
        path: "/update/:id",
        element: <UpdateProducts></UpdateProducts>,
      },
    ],
  },
]);

export default Route;
