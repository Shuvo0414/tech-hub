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
import NotFound from "../pages/ErrorPage/NotFound";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
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
        loader: () =>
          fetch(
            "https://assignment-10-server-side-eight-sigma.vercel.app/addToCart"
          ),
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
        loader: () =>
          fetch(
            "https://assignment-10-server-side-eight-sigma.vercel.app/products"
          ),
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-side-eight-sigma.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default Route;
