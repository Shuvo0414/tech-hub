import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetail = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const lodadata = useLoaderData();
  const { user } = useContext(AuthContext);

  const { productId } = useParams();

  useEffect(() => {
    const productDetails = lodadata.find(
      (product) => product._id === productId
    );
    setProductDetails(productDetails);
  }, [productId, lodadata]);

  const addToCart = () => {
    setCart([...cart, product]);

    const {
      _id,
      photo,
      name,
      brandname,
      type,
      price,
      rating,
      shortDescription,
    } = productDetails;

    const newProduct = {
      photo,
      name,
      brandname,
      type,
      price,
      rating,
      shortDescription,
      email: user.email,
    };

    fetch(
      "https://assignment-10-server-side-eight-sigma.vercel.app/addToCart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product added to the cart");
      });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="border rounded-lg p-4 w-96">
        <h1 className="text-4xl font-bold text-center">
          {productDetails.name}
        </h1>
        <img
          src={productDetails.photo}
          alt={productDetails.name}
          className="w-full"
        />
        <p className="text-center mt-2 font-bold text-2xl">
          {productDetails.brandname}
        </p>
        <p className="text-center text-xl font-semibold">
          ${productDetails.price}
        </p>
        <p className="text-center text-xl font-semibold">
          Rating: {productDetails.rating}
        </p>
        <p className="text-center text-base font-thin">
          {productDetails.shortDescription}
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
